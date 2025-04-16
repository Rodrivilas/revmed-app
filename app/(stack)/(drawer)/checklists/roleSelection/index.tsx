import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FloatingActionWrapper from '@/components/shared/CustomBottomButtonView'
import { router } from 'expo-router'

const RoleSelectionPage = () => {
    return (
        <FloatingActionWrapper
            buttonText="Guardar"
            onPress={() => router.push('/(stack)/(drawer)/checklists/actorScreen')}
        >

            <ScrollView className="web:px-20">
                {Array.from({ length: 20 }).map((_, i) => (
                    <View key={i} className="mb-4 p-4 bg-gray-100 rounded-xl flex-row">
                        <Text>Elemento #{i + 1}</Text>
                        <Text>Elemento #{i + 1}</Text>
                    </View>
                ))}
            </ScrollView>

        </FloatingActionWrapper>
    )
}

export default RoleSelectionPage