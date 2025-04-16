import React, { useState, ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';

interface ToggleButtonProps {
    activeText?: string;
    inactiveText?: string;
    initialState?: boolean;
    onToggle?: (active: boolean) => void;
    headerComponent?: ReactNode; // cualquier componente para renderizar arriba del texto
}

export default function ToggleButton({
    activeText = 'Activo',
    inactiveText = 'Inactivo',
    initialState = false,
    onToggle,
    headerComponent,
}: ToggleButtonProps) {
    const [active, setActive] = useState(initialState);

    const handlePress = () => {
        const newState = !active;
        setActive(newState);
        if (onToggle) {
            onToggle(newState);
        }
    };

    return (
        <View className="items-center justify-center">
            <Pressable
                className={`px-6 py-3 rounded-2xl items-center ${active
                    ? 'bg-orange-500 border-2 border-orange-600'
                    : 'bg-gray-300 border border-transparent'
                    }`}
                onPress={handlePress}
            >
                {headerComponent && <View className="mb-2">{headerComponent}</View>}

                <Text
                    className={`text-center font-bold ${active ? 'text-white' : 'text-black'
                        }`}
                >
                    {active ? activeText : inactiveText}
                </Text>
            </Pressable>
        </View>
    );
}