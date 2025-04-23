import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Platform, ActivityIndicator, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth"; // signInWithCredential needed for native
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

import CustomButton from '@/components/shared/CustomButton';
import { auth, db } from '@/firebaseConfig'; // Adjust path if firebaseConfig.ts is elsewhere

const AuthScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        setError(null);
        const provider = new GoogleAuthProvider();

        // --- Web Implementation --- TODO: Add native implementation
        if (Platform.OS === 'web') {
            try {
                // It's generally recommended to use signInWithRedirect on mobile web, 
                // but signInWithPopup is simpler for initial setup and works on desktop web.
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
                await createUserInFirestore(user);
                router.replace('/(stack)/(drawer)/home'); // Navigate after successful login & user creation/check
            } catch (error: any) {
                console.error("Google Sign-In Error (Web):", error);
                // Handle specific errors like popup blocked
                if (error.code === 'auth/popup-blocked') {
                    setError('Popup blocked. Please allow popups for this site.');
                } else if (error.code === 'auth/cancelled-popup-request') {
                     setError('Sign-in cancelled. Please try again.');
                } else {
                    setError(`Failed to sign in: ${error.message}`);
                }
            } finally {
                setIsLoading(false);
            }
        } else {
            // --- Native Implementation Placeholder ---
            // Needs expo-auth-session or react-native-google-signin
            setError("Google Sign-In não está implementado para mobile ainda.");
            console.warn("Native Google Sign-In needs implementation using e.g., expo-auth-session.");
            setIsLoading(false);
            // Example (conceptual - requires specific library setup):
            // const response = await promptAsync(); // From useAuthRequest (expo-auth-session)
            // if (response?.type === 'success') {
            //    const { id_token } = response.params;
            //    const credential = GoogleAuthProvider.credential(id_token);
            //    const result = await signInWithCredential(auth, credential); // Use signInWithCredential
            //    const user = result.user;
            //    await createUserInFirestore(user);
            //    router.replace('/(stack)/(drawer)/home');
            // } else { /* handle errors/dismissal */ }
        }
    };

    // Function to create or check user in Firestore
    const createUserInFirestore = async (user: User) => {
         if (!user) return;

        const userRef = doc(db, "users", user.uid); // Reference to the user document in 'users' collection

        try {
            const docSnap = await getDoc(userRef);

            if (docSnap.exists()) {
                // User exists, log data (could update last login here)
                console.log("User already exists:", docSnap.data());
                // Example: Update last login time
                // await setDoc(userRef, { lastLogin: serverTimestamp() }, { merge: true });
            } else {
                // User doesn't exist, create new document
                console.log("Creating new user document for UID:", user.uid);
                await setDoc(userRef, {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    createdAt: serverTimestamp(), // Firestore server timestamp
                    isSuperUser: false // Default new users to non-super users
                });
                console.log("New user document created.");
            }
            // After creation or check, you might want to fetch the data again
            // to ensure you have the latest `isSuperUser` status for your app state.
            // const latestDocSnap = await getDoc(userRef);
            // const userData = latestDocSnap.data();
            // storeUserDataInAppContext(userData); // Example: Update context/state

        } catch (error) {
            console.error("Error accessing Firestore:", error);
            setError("Falha ao verificar os dados do usuário. Tente novamente."); // User-facing error
            // Rethrow the error to stop the login process if Firestore access is critical
            throw new Error("Failed to create or check user in Firestore.");
        }
    };


    return (
        <ImageBackground source={require('@/assets/images/bg.jpg')} className='size-full flex'>
            <SafeAreaView className='flex-1'> {/* Use SafeAreaView for content */} 
                 <View className='flex-1 items-center justify-center p-4'>
                    <View className='flex items-center p-8 sm:p-10 bg-white rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm'> {/* Responsive padding/max-width */} 
                        <Image
                            style={{ width: 100, height: 100 }} // Keep fixed size or make responsive
                            className='mb-3'
                            source={require('@/assets/images/logo.png')}
                            resizeMode="contain"
                        />
                        <Text className='text-3xl sm:text-4xl text-blue-700 font-nunito-black text-center'>REV MED</Text> {/* Adjusted color/size */} 
                        <Text className='font-roboto-flex text-base sm:text-lg text-center my-4 text-gray-600'> {/* Adjusted text size/color */} 
                            Use sua conta do Google para começar a se preparar!
                        </Text>

                        {error && (
                            <View className="bg-red-100 p-3 rounded-md mb-4 w-full">
                                <Text className="text-red-700 text-center text-sm">{error}</Text>
                            </View>
                        )}

                        <CustomButton
                            onPress={handleGoogleSignIn}
                            disabled={isLoading}
                            className={`mt-5 px-8 py-3 w-full ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} rounded-lg`} // Adjusted styles and added hover for web
                        >
                            {isLoading ? (
                                <ActivityIndicator size="small" color="#ffffff" />
                            ) : (
                                <Text className="text-white text-center font-bold text-base">Login com Google</Text>
                            )}
                        </CustomButton>

                        {Platform.OS !== 'web' && (
                            <Text className="text-orange-600 text-center mt-4 text-xs px-4">
                                Google Sign-In para mobile ainda não implementado.
                            </Text>
                        )}
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default AuthScreen;
