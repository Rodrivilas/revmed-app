import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const StatisticsScreen = () => {
    return (
        <ScrollView className='flex flex-col web:grid'>
            <View className='bg-white rounded-2xl m-4 p-6 flex justify-center'>
                <Text className='font-nunito-regular text-[1.75rem] text-center'>Streak no aplicativo</Text>
                <View className='flex flex-row  m-5 justify-center'>
                    <View className='mt-2 mr-4' >
                        <Ionicons size={35} color='orange' name='flame' />
                    </View>
                    <Text className='font-nunito-black ml-4 color-primary text-[35px]'>0 dias</Text>
                </View>
            </View>

            <View className='bg-white rounded-2xl m-4 p-6 flex justify-center'>
                <Text className='font-nunito-regular text-[1.75rem] text-center'>Tempo estudando</Text>
                <View className='flex flex-row  m-5 justify-center'>
                    <View className='mt-2 mr-4' >
                        <Ionicons size={35} color='orange' name='time' />
                    </View>
                    <Text className='font-nunito-black ml-4 color-primary text-[35px]'>0h 0m</Text>
                </View>
            </View>

            <View className='bg-white rounded-2xl m-4 p-6 flex justify-center'>
                <Text className='font-nunito-regular text-[1.75rem] text-center'>Aceitos</Text>
                <View className='flex flex-row  m-5 justify-center'>
                    <View className='mt-2 mr-4' >
                        <Ionicons size={35} color='orange' name='checkmark-circle' />
                    </View>
                    <Text className='font-nunito-black ml-4 color-primary text-[35px]'>0</Text>
                </View>
            </View>

            <View className='bg-white rounded-2xl m-4 p-6 flex justify-center'>
                <Text className='font-nunito-regular text-[1.75rem] text-center'>Erros</Text>
                <View className='flex flex-row  m-5 justify-center'>
                    <View className='mt-2 mr-4' >
                        <Ionicons size={35} color='orange' name='close-circle' />
                    </View>
                    <Text className='font-nunito-black ml-4 color-primary text-[35px]'>0</Text>
                </View>
            </View>

            <View className='bg-white rounded-2xl m-4 p-6 flex justify-center'>
                <Text className='font-nunito-regular text-[1.75rem] text-center'>Total de perguntas respondidas</Text>
                <View className='flex flex-row  m-5 justify-center'>
                    <View className='mt-2 mr-4' >
                        <Ionicons size={35} color='orange' name='trophy' />
                    </View>
                    <Text className='font-nunito-black ml-4 color-primary text-[35px]'>0</Text>
                </View>
            </View>

        </ScrollView>
    )
}

export default StatisticsScreen