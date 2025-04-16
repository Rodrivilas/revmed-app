import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                animation: 'fade',
                headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',

                }

            }}
        >
            <Stack.Screen
                name='authScreen/index'
                options={{ title: 'Inicie sesion' }}
            />
            <Stack.Screen
                name='(drawer)'
                options={{ title: 'Inicio' }}
            />
        </Stack>
    )
}

export default StackLayout