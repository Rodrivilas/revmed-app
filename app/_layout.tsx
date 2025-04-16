import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import './global.css'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({

        'RobotoFlex-Regular': require('../assets/fonts/RobotoFlex-Regular.ttf'),
        'NunitoSans_10pt-Regular': require('../assets/fonts/NunitoSans_10pt-Regular.ttf'),
        'NunitoSans_10pt-Light': require('../assets/fonts/NunitoSans_10pt-Light.ttf'),
        'NunitoSans_10pt-Black': require('../assets/fonts/NunitoSans_10pt-Black.ttf')
    });
    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
        </GestureHandlerRootView>
    );
}

export default RootLayout