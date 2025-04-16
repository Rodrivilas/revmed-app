import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView
            {...props}
            scrollEnabled={false}
        >
            <View className='flex justify-center items-center mx-6 mb-8 h-[150px] '>
                <Image style={{ width: 100, height: 100 }} className='flex justify-center items-center mx-6 mb-8 h-[150px] overflow-visible' source={require('@/assets/images/logo.png')} />

            </View>
            { }
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer