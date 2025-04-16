import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomCarousel from '@/components/shared/CustomCarousel'
import CustomToggleButton from '@/components/shared/CustomToggleButton'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = () => {
    return (
        <ScrollView className='p-5 flex bg-slate-100' >
            <View className='flex md:grid-cols-2'>

                <View className='p-5 bg-white rounded-xl mb-3 '>
                    <Text className=' text-xl font-nunito-regular ios:color-slate-700'>Bem-vindo ao </Text>
                    <Text className=' text-3xl color-primary font-nunito-black'>REV MED </Text>
                    <Text className=' font-roboto-flex text-xl'>Sua jornada para a aprovação no Revalida começa aqui!</Text>
                    <Text className=' font-roboto-flex text-xl'>Conte com recursos personalizados, simulados e suporte especializado para alcançar o sucesso no exame do INEP. </Text>
                </View>
                <CustomCarousel />

            </View>
        </ScrollView>
    )
}

export default HomeScreen