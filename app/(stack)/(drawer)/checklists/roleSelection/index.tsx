import { View, Text, Pressable, ActivityIndicator, Alert, TextInput } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { router } from 'expo-router';
import { database } from '@/firebaseConfig'; // Assuming firebaseConfig.ts is in the root/src directory
import { ref, set, onValue, off, push, serverTimestamp, update, get } from "firebase/database";
import { getAuth } from 'firebase/auth'; // To get the current user

// Define the structure for our session data
interface ChecklistSession {
    actorId: string;
    reviewerId?: string;
    status: 'pending' | 'active' | 'closed';
    createdAt: object; // Use serverTimestamp()
    checklistId?: string; // Optional: link to a specific checklist later
}

const RoleSelectionPage = () => {
    const [role, setRole] = useState<'actor' | 'reviewer' | null>(null);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [sessionStatus, setSessionStatus] = useState<'pending' | 'active' | 'error' | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [joinSessionIdInput, setJoinSessionIdInput] = useState<string>(''); // Input for reviewer

    const auth = getAuth();
    const currentUser = auth.currentUser;
    const sessionRef = useRef<any>(null); // To store the database reference for cleanup

    // --- Cleanup Listener ---
    useEffect(() => {
        // This function will be called when the component unmounts
        return () => {
            if (sessionRef.current) {
                off(sessionRef.current); // Detach the listener
                console.log('Database listener detached for session:', sessionId);
                // Optionally, update the session status if the user leaves prematurely
                // Consider adding logic here if an actor cancels or a reviewer leaves
            }
        };
    }, [sessionId]); // Re-run cleanup setup if sessionId changes

    // --- Actor Logic ---
    const handleSelectActor = async () => {
        if (!currentUser) {
            setError("Usuario no autenticado.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setRole('actor');

        const sessionsRef = ref(database, 'checklistSessions');
        const newSessionRef = push(sessionsRef); // Generate unique ID
        const newSessionId = newSessionRef.key;

        if (!newSessionId) {
            setError("No se pudo generar un ID de sesión.");
            setIsLoading(false);
            return;
        }

        const sessionData: ChecklistSession = {
            actorId: currentUser.uid,
            status: 'pending',
            createdAt: serverTimestamp(), // Use Firebase server timestamp
        };

        try {
            await set(newSessionRef, sessionData);
            console.log('Session created with ID:', newSessionId);
            setSessionId(newSessionId);
            setSessionStatus('pending');

            // Store the ref for cleanup
            sessionRef.current = newSessionRef;

            // Listen for the reviewer to join
            onValue(newSessionRef, (snapshot) => {
                const data = snapshot.val() as ChecklistSession;
                if (snapshot.exists() && data.reviewerId && data.status === 'active') {
                    console.log('Reviewer joined! Navigating to actor screen.');
                    setSessionStatus('active');
                    setIsLoading(false); // Stop loading indicator
                    off(newSessionRef); // Stop listening once connected
                    sessionRef.current = null; // Clear the ref
                    // Navigate to the actor screen, passing the session ID
                    router.push({
                        pathname: '/(stack)/(drawer)/checklists/actorScreen',
                        params: { sessionId: newSessionId }
                    });
                } else if (!snapshot.exists()) {
                    // Handle case where session might be deleted unexpectedly
                    setError("La sesión fue cerrada o eliminada.");
                    setIsLoading(false);
                    setSessionId(null);
                    setRole(null);
                }
                 // Keep listening if status is still 'pending'
                 else if (data.status === 'pending') {
                     console.log('Waiting for reviewer...');
                 }

            }, (errorObject) => {
                console.error("Error listening to session:", errorObject);
                setError("Error al escuchar la sesión: " + errorObject.message);
                setIsLoading(false);
                setSessionId(null); // Reset session ID on error
                setRole(null);
            });

            // Keep loading indicator while pending
            // setIsLoading(false); // Moved inside onValue logic

        } catch (err: any) {
            console.error("Error creating session:", err);
            setError("Error al crear la sesión: " + err.message);
            setIsLoading(false);
            setRole(null);
        }
    };

    // --- Reviewer Logic ---
    const handleSelectReviewer = () => {
        setRole('reviewer');
        setError(null);
        setSessionId(null); // Clear previous session ID if any
        setSessionStatus(null);
        // Show input field for session ID
    };

    const handleJoinSession = async () => {
        if (!currentUser) {
            setError("Usuario no autenticado.");
            return;
        }
        if (!joinSessionIdInput.trim()) {
            setError("Por favor, introduce un ID de sesión válido.");
            return;
        }

        setIsLoading(true);
        setError(null);
        const enteredSessionId = joinSessionIdInput.trim();
        const specificSessionRef = ref(database, `checklistSessions/${enteredSessionId}`);

        try {
            const snapshot = await get(specificSessionRef); // Use 'get' for a one-time read

            if (!snapshot.exists()) {
                setError("ID de sesión no encontrado.");
                setIsLoading(false);
                return;
            }

            const sessionData = snapshot.val() as ChecklistSession;

            if (sessionData.status !== 'pending') {
                 setError(`Esta sesión ya está ${sessionData.status === 'active' ? 'activa' : 'cerrada'}.`);
                 setIsLoading(false);
                 return;
            }

             if (sessionData.actorId === currentUser.uid) {
                setError("No puedes unirte a tu propia sesión como revisor.");
                setIsLoading(false);
                return;
            }


            // Update the session to include the reviewer and set status to active
            await update(specificSessionRef, {
                reviewerId: currentUser.uid,
                status: 'active'
            });

            console.log('Joined session successfully:', enteredSessionId);
            setSessionId(enteredSessionId);
            setSessionStatus('active');
            setIsLoading(false);

            // Navigate to the reviewer screen, passing the session ID
             router.push({
                 pathname: '/(stack)/(drawer)/checklists/reviewerScreen',
                 params: { sessionId: enteredSessionId }
             });

        } catch (err: any) {
            console.error("Error joining session:", err);
            setError("Error al unirse a la sesión: " + err.message);
            setIsLoading(false);
        }
    };

     const handleCancel = () => {
        if (sessionRef.current) {
            off(sessionRef.current); // Detach listener if actor cancels
            sessionRef.current = null;
            // Optionally delete the session or mark it as cancelled in DB
        }
        setRole(null);
        setSessionId(null);
        setSessionStatus(null);
        setError(null);
        setIsLoading(false);
        setJoinSessionIdInput('');
    }

    // --- Render Logic ---
    return (
        <View className="flex-1 p-4 justify-center items-center bg-white">
            {isLoading && <ActivityIndicator size="large" color="#0000ff" className="mb-4" />}
            {error && <Text className="text-red-500 mb-4 text-center">{error}</Text>}

            {!role && (
                <>
                    <Text className="text-xl font-bold mb-6 text-center">Selecciona tu Rol</Text>
                    <Pressable
                        onPress={handleSelectActor}
                        disabled={isLoading}
                        className="bg-blue-500 p-4 rounded-lg w-4/5 mb-4 items-center disabled:opacity-50"
                    >
                        <Text className="text-white text-lg font-semibold">Ser Actor</Text>
                    </Pressable>
                    <Pressable
                        onPress={handleSelectReviewer}
                        disabled={isLoading}
                        className="bg-green-500 p-4 rounded-lg w-4/5 items-center disabled:opacity-50"
                    >
                        <Text className="text-white text-lg font-semibold">Ser Revisor</Text>
                    </Pressable>
                </>
            )}

            {role === 'actor' && sessionId && sessionStatus === 'pending' && (
                 <View className="items-center w-full px-5">
                    <Text className="text-lg mb-4">Esperando que un Revisor se una...</Text>
                    <Text className="text-base mb-2">Comparte este ID de Sesión:</Text>
                    <Text selectable className="text-lg font-bold bg-gray-100 p-2 rounded mb-6">{sessionId}</Text>
                     <Pressable
                        onPress={handleCancel}
                        className="bg-gray-400 p-3 rounded-lg items-center w-3/5"
                    >
                        <Text className="text-white text-base">Cancelar</Text>
                    </Pressable>
                 </View>
            )}

            {role === 'reviewer' && !sessionId && (
                 <View className="items-center w-full px-5">
                     <Text className="text-xl font-bold mb-4 text-center">Unirse a Sesión</Text>
                     <TextInput
                         placeholder="Introduce el ID de Sesión"
                         value={joinSessionIdInput}
                         onChangeText={setJoinSessionIdInput}
                         className="border border-gray-300 p-3 rounded-lg w-full mb-4 text-lg"
                         autoCapitalize="none"
                     />
                     <Pressable
                         onPress={handleJoinSession}
                         disabled={isLoading}
                         className="bg-green-500 p-4 rounded-lg w-4/5 mb-4 items-center disabled:opacity-50"
                     >
                         <Text className="text-white text-lg font-semibold">Unirse</Text>
                     </Pressable>
                      <Pressable
                        onPress={handleCancel}
                        className="bg-gray-400 p-3 rounded-lg items-center w-3/5"
                     >
                        <Text className="text-white text-base">Volver</Text>
                    </Pressable>
                 </View>
            )}

             {/* Placeholder for potential future elements or if navigation fails */}
             {sessionStatus === 'active' && (
                <Text className="text-green-600 text-lg">¡Conectado!</Text>
             )}


        </View>
    );
};

export default RoleSelectionPage;
