import { Drawer } from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { rgbaColor } from 'react-native-reanimated/lib/typescript/Colors'
import { Text } from 'react-native'
import CustomDrawer from '@/components/shared/CustomDrawer'

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                overlayColor: 'rgba(0,0,0,0,4)',
                drawerActiveTintColor: '#ffa600',
                headerPressColor: '#ffa600',
                headerShadowVisible: false


            }}
        >
            <Drawer.Screen
                name="home/index"
                options={{
                    drawerLabel: 'Home',
                    title: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='home-sharp' size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="checklists" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Checklists',
                    title: 'Checklists',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='checkmark-circle-sharp' size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="questions" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Questoes',
                    title: 'Questoes',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='help-sharp' size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="statistics/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Stats',
                    title: 'Stats',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='stats-chart-outline' size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="profile/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Stats',
                    title: 'Stats',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='person-circle-outline' size={size} color={color} />
                    )
                }}
            />

        </Drawer>
    )
}

export default DrawerLayout