import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomCarousel from '@/components/shared/CustomCarousel'
import CustomToggleButton from '@/components/shared/CustomToggleButton'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router' // Import Link

const HomeScreen = () => {
    // Placeholder for streak data
    const dailyStreak = 5;

    return (
        <ScrollView className='p-5 flex-1 bg-slate-100' >
            {/* Main container with responsive grid layout */}
            <View className='flex flex-col md:grid md:grid-cols-2 md:gap-5'>

                {/* Welcome Section */}
                <View className='p-5 bg-white rounded-xl mb-5 md:mb-0'>
                    <Text className=' text-xl font-nunito-regular ios:color-slate-700'>Bem-vindo ao </Text>
                    <Text className=' text-3xl color-primary font-nunito-black'>REV MED </Text>
                    <Text className=' font-roboto-flex text-xl mt-2'>Sua jornada para a aprovação no Revalida começa aqui!</Text>
                    <Text className=' font-roboto-flex text-base mt-1'>Conte com recursos personalizados, simulados e suporte especializado para alcançar o sucesso no exame do INEP. </Text>
                </View>

                 {/* Daily Streak Section */}
                 <View className='p-5 bg-white rounded-xl mb-5 md:mb-0 flex flex-row items-center justify-center md:justify-start'>
                    <Ionicons name="flame" size={40} color="#FF9900" />
                    <View className='ml-4'>
                        <Text className='text-2xl font-nunito-black color-primary'>{dailyStreak} Dias</Text>
                        <Text className='text-lg font-nunito-regular text-slate-600'>Sequência Atual</Text>
                    </View>
                </View>

                 {/* Shortcuts Section */}
                 <View className='p-5 bg-white rounded-xl mb-5 md:mb-0'>
                    <Text className='text-xl font-nunito-black mb-3 text-slate-700'>Atalhos Rápidos</Text>
                    <View className='flex flex-col space-y-3'>
                         <Link href="/checklists" asChild>
                            <TouchableOpacity className='bg-primary p-3 rounded-lg flex-row items-center'>
                                <Ionicons name="checkbox-outline" size={24} color="white" />
                                <Text className='text-white text-lg font-nunito-regular ml-2'>Acessar Checklists</Text>
                            </TouchableOpacity>
                        </Link>
                        <Link href="/questions" asChild>
                             <TouchableOpacity className='bg-secondary p-3 rounded-lg flex-row items-center'>
                                <Ionicons name="help-circle-outline" size={24} color="white" />
                                <Text className='text-white text-lg font-nunito-regular ml-2'>Acessar Questões</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>

                 {/* Carousel Section */}
                <View className='mb-5 md:mb-0'>
                    {/* Assuming CustomCarousel takes up appropriate space */}
                    <CustomCarousel />
                 </View>


            </View>
        </ScrollView>
    )
}

export default HomeScreen
