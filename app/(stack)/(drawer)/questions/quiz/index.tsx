import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import CustomButton from '@/components/shared/CustomButton'
import { router } from 'expo-router'

const QuizScreen = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View >
            <View className='flex felx-col bg-slate-100 '>

                <Text className='font-nunito-regular text-[16px] mt-4 pl-4 pr-4 p-2 bg-white rounded-2xl m-2 ml-4 mr-4 outline-2'>Selecione uma categoria</Text>

                <View className='bg-white rounded-2xl m-4 p-2 flex justify-center'>
                    <View className='flex flex-row  justify-between'>
                        <Text className='font-nunito ml-2 text-[15px] self-center'>Pergunta</Text>
                        <Checkbox value={isChecked} onValueChange={setChecked} className='m-5 h-5 w-5' />
                    </View>
                </View>
            </View>

            <CustomButton onPress={() => router.push('/(stack)/(drawer)/questions/overview')}
                className=' m-5 bottom-0 self-center p-4 pl-[125px] pr-[125px]' textClassName='text-2xl'
            >
                Responder </CustomButton>
        </View>


    )
}

export default QuizScreen