import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { settings } from '@/constants/data'

interface SettingsItemProps {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    textStyle?: string;
    showArrow?: boolean;
}

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemProps) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex flex-row items-center justify-between py-3'>
            <View className='flex flex-row items-center gap-3'>
                <Image source={icon} className='size-6' />
                <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>
            </View>
            {showArrow && <Image source={icons.rightArrow} className='size-5' />}
        </TouchableOpacity>
    )
}

const Profile = () => {
    const handleLogout = () => {
        console.log("Logged Out")
    }

    return (
        <SafeAreaView className='h-full bg-white'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName='pb-32 px-7'
            >
                <View className='flex flex-row items-center justify-between mt-5'>
                    <Text className='text-xl font-rubik-bold'>Profile</Text>
                    <Image source={icons.bell} className='size-5' />
                </View>
                <View className='flex flex-row justify-center mt-5'>
                    <View className='flex flex-col items-center mt-5'>
                        <Image source={images.avatar} className='size-44 rounded-full relative' resizeMode='contain' />
                        <TouchableOpacity className='absolute bottom-11 right-2'>
                            <Image source={icons.edit} className='size-9' />
                        </TouchableOpacity>
                        <Text className='text-xl font-rubik-bold mt-2'>Adrian | JS Mastery</Text>
                    </View>
                </View>
                <View className='flex flex-col mt-10'>
                    <SettingsItem icon={icons.calendar} title='My Bookings' />
                    <SettingsItem icon={icons.wallet} title='Payments' />
                </View>
                <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
                    {
                        settings.slice(2).map((setting, index) => (
                            <SettingsItem key={index} {...setting} />
                        ))
                    }
                </View>
                <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
                <SettingsItem icon={icons.logout} title='Log Out' showArrow={false} onPress={handleLogout} textStyle='text-red-500' />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile