import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '@/components/shared/CustomButton'
import { router } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'

const SelectCategory = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1((previousState1) => !previousState1);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2((previousState2) => !previousState2);

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3((previousState3) => !previousState3);

    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch4 = () => setIsEnabled4((previousState4) => !previousState4);


    return (
        <View >
            <View className='flex felx-col bg-slate-100  h-screen'>

                <Text className='font-nunito-regular text-[1.75rem] mt-4 text-center'>Selecione uma categoria</Text>

                <View className='bg-white rounded-2xl mx-4 my-1 p-6 flex justify-center'>
                    <View className='flex flex-row  m-3 justify-around'>
                        <Text className='font-nunito ml-4 text-[35px]'>Preventiva</Text>
                        <View className='mt-2 ml-4' >
                            <Switch
                                trackColor={{ false: '#959595', true: 'rgba(255, 200, 98, 1)' }}
                                thumbColor={isEnabled ? '#fc9c00' : '#f4f3f4'}
                                ios_backgroundColor="#5d5d5d"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>

                <View className='bg-white rounded-2xl mx-4 my-1 p-6 flex justify-center'>
                    <View className='flex flex-row  m-3 justify-around'>
                        <Text className='font-nunito ml-4 text-[35px]'>Ginecologia e Obstetricia</Text>
                        <View className='mt-2 ml-4' >
                            <Switch
                                trackColor={{ false: '#959595', true: 'rgba(255, 200, 98, 1)' }}
                                thumbColor={isEnabled1 ? '#fc9c00' : '#f4f3f4'}
                                ios_backgroundColor="#5d5d5d"
                                onValueChange={toggleSwitch1}
                                value={isEnabled1}
                            />
                        </View>
                    </View>
                </View>

                <View className='bg-white rounded-2xl mx-4 my-1 p-6 flex justify-center'>
                    <View className='flex flex-row  m-3 justify-around'>
                        <Text className='font-nunito ml-4 text-[35px]'>Pediatria</Text>
                        <View className='mt-2 ml-4' >
                            <Switch
                                trackColor={{ false: '#959595', true: 'rgba(255, 200, 98, 1)' }}
                                thumbColor={isEnabled2 ? '#fc9c00' : '#f4f3f4'}
                                ios_backgroundColor="#5d5d5d"
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                            />
                        </View>
                    </View>
                </View>

                <View className='bg-white rounded-2xl mx-4 my-2 p-6 flex justify-center'>
                    <View className='flex flex-row  m-3 justify-around'>
                        <Text className='font-nunito ml-4 text-[35px]'>Cirugia</Text>
                        <View className='mt-2 ml-4' >
                            <Switch
                                trackColor={{ false: '#959595', true: 'rgba(255, 200, 98, 1)' }}
                                thumbColor={isEnabled3 ? '#fc9c00' : '#f4f3f4'}
                                ios_backgroundColor="#5d5d5d"
                                onValueChange={toggleSwitch3}
                                value={isEnabled3}
                            />
                        </View>
                    </View>
                </View>

                <View className='bg-white rounded-2xl mx-4 my-2 p-6 flex justify-center'>
                    <View className='flex flex-row  m-3 justify-around'>
                        <Text className='font-nunito ml-4 text-[35px]'>Clinica Medica</Text>
                        <View className='mt-2 ml-4' >
                            <Switch
                                trackColor={{ false: '#959595', true: 'rgba(255, 200, 98, 1)' }}
                                thumbColor={isEnabled4 ? '#fc9c00' : '#f4f3f4'}
                                ios_backgroundColor="#5d5d5d"
                                onValueChange={toggleSwitch4}
                                value={isEnabled4}
                            />
                        </View>
                    </View>
                </View>

                <CustomButton onPress={() => router.push('/(stack)/(drawer)/questions/quiz')}
                    className=' m-5 bottom-0 self-center p-4 pl-[125px] pr-[125px]' textClassName='text-2xl'
                >
                    Empezar </CustomButton>
            </View>

        </View>
    )
}

export default SelectCategory