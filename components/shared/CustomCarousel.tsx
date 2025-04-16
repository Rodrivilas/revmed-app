import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CardButton from './CustomCardButton'

const CustomCarousel = () => {
    return (
        <View className='row-auto w-full bg-white p-3 rounded-lg'>
            <Text className='font-nunito-regular text-xl mt-2 px-2 outline-2'>Selecione uma categoria</Text>
            <ScrollView horizontal={true} className='snap-x'>
                <CardButton image={require('@/assets/images/categoria/ginecologia0.jpg')} description='Ginecologia' width={340} height={340}></CardButton>
                <CardButton image={require('@/assets/images/categoria/pediatria0.jpg')} description='Pediatria' width={340} height={340}></CardButton>
                <CardButton image={require('@/assets/images/categoria/cirugia0.jpg')} description='Cirugia' width={340} height={340}></CardButton>
                <CardButton image={require('@/assets/images/categoria/medica0.jpg')} description='Clinica Medica' width={340} height={340}></CardButton>
                <CardButton image={require('@/assets/images/categoria/preventiva0.jpg')} description='Preventiva' width={340} height={340}></CardButton>

            </ScrollView>
        </View>
    )
}

export default CustomCarousel