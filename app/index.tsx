import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import "./global.css"
import { Link, Redirect } from 'expo-router'

const App = () => {
    return <Redirect href='/(stack)/(drawer)/home' />
    // return (
    //     <SafeAreaView>

    //         <View className='mt-11 mx-3'>
    //             <Text className=' text-3xl text-primary font-nunito-black'>Hola Mundo</Text>
    //         </View>
    //         <Link href='/home/index'>caca</Link>

    //     </SafeAreaView>
    // )
}

export default App