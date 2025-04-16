import React from 'react';
import {
    View,
    Text,
    Pressable,
    Platform,
    StyleSheet,
    useWindowDimensions,
} from 'react-native';

interface FloatingActionWrapperProps {
    children: React.ReactNode;
    onPress: () => void;
    buttonText?: string;
}

export default function FloatingActionWrapper({
    children,
    onPress,
    buttonText = 'Continuar',
}: FloatingActionWrapperProps) {
    const { width } = useWindowDimensions();
    const isWeb = Platform.OS === 'web';

    return (
        <View className="flex-1 relative bg-white">
            {children}

            <View
                className="absolute"
                style={[
                    styles.shadow,
                    isWeb
                        ? {
                            bottom: 20,
                            right: 20,
                            width: 160,
                            borderRadius: 9999,
                        }
                        : {
                            bottom: 0,
                            left: 0,
                            width: width,
                        },
                ]}
            >
                <Pressable
                    onPress={onPress}
                    className={`bg-blue-600 p-4 items-center justify-center ${isWeb ? 'rounded-full' : ''
                        }`}
                >
                    <Text className="text-white font-bold">{buttonText}</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
});
