import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import React from 'react'
import CustomButton from '@/components/shared/CustomButton'

import { Link, router } from 'expo-router'

const AuthScreen = () => {
    return (

        <ImageBackground source={require('@/assets/images/bg.jpg')} className='size-full flex'>
            <View className='size-full flex items-center justify-center' >



                <View className='flex items-center p-10 h-150 bg-white rounded-xl '>

                    <Image style={{ width: 100, height: 100 }} className='flex justify-center items-center mx-6 mb-2 h-[150px] ' source={require('@/assets/images/logo.png')} />
                    <Text className=' text-4xl color-primary font-nunito-black'>REV MED </Text>
                    <Text className=' font-roboto-flex text-xl max-w-52 mx-3 text-center my-2'>Use sua conta do Google para começar a se preparar!</Text>
                    <Link href="/(stack)/(drawer)/home" asChild>
                        <CustomButton className='mt-7 px-20'>Login</CustomButton>
                    </Link>
                </View>



            </View>
        </ImageBackground>
    )
}

export default AuthScreen