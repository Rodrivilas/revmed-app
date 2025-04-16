import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const QuestionsScreen = () => {
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
                name='selectCategory/index'
                options={{ title: 'Select Category' }}
            />
            <Stack.Screen
                name='quiz/index'
                options={{ title: 'Quiz' }}
            />
            <Stack.Screen
                name='overview/index'
                options={{ title: 'Overview' }}
            />
        </Stack>
    )
}

export default QuestionsScreen