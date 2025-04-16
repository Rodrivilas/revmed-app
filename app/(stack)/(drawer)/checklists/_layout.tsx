import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Checklists = () => {
    return (
        <Stack
            screenOptions={{
                animation: 'fade',
                headerShown: true,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',

                }

            }}
        >
            <Stack.Screen
                name='roleSelection/index'
                options={{ title: 'Selecione sua função' }}
            />
            <Stack.Screen
                name='checklistsScreen/index'
                options={{ title: 'Selecione uma CheckList' }}
            />
            <Stack.Screen
                name='actorScreen/index'
                options={{ title: 'Ator' }}
            />
            <Stack.Screen
                name='reviewerScreen/index'
                options={{ title: 'Crítico' }}
            />
            <Stack.Screen
                name='overview/index'
                options={{ title: 'Overview' }}
            />
        </Stack>
    )
}

export default Checklists