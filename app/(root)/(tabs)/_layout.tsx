import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => (
    <View className='flex-1 flex flex-col mt-3 items-center '>
        <Image source={icon} tintColor={focused ? "#0061ff" : "#666876"} resizeMode='contain' className='size-6' />
        <Text className={`${focused ? "text-primary-300 font-rubik-medium" : "text-black-200 font-rubik"} text-xs w-full text-center mt-1`}>{title}</Text>
    </View>
)

const TabsLayout = () => {
    const tabOptions = [
        { name: "index", title: "Home", icon: icons.home },
        { name: "explore", title: "Explore", icon: icons.search },
        { name: "profile", title: "Profile", icon: icons.person },
    ]

    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    position: "absolute",
                    borderTopColor: "#0061FF1A",
                    borderTopWidth: 1,
                    minHeight: 70
                }
            }}
        >
            {
                tabOptions.map((tab, index) => (
                    <Tabs.Screen
                        name={tab.name}
                        key={index}
                        options={{
                            title: tab.title,
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                                <TabIcon focused={focused} icon={tab.icon} title={tab.title} />
                            )
                        }}
                    />
                ))
            }

        </Tabs>
    )
}

export default TabsLayout