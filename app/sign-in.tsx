import React from 'react'
import images from '@/constants/images'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'

const SignIn = () => {
    const handleLogin = () => { }

    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerClassName='h-full'>
                <Image source={images.onboarding} className='w-full h-4/6' resizeMode="contain" />
                <View className='px-10 pb-5'>
                    <Text className='text-base text-center uppercase font-rubik text-blacl-200'>Welcome to ReState</Text>
                    <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
                        Let's Get You Closer to {"\n"}
                        <Text className='text-primary-300'>Your Ideal Home</Text>
                    </Text>
                    <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login to ReState with Google</Text>
                    <TouchableOpacity
                        onPress={handleLogin}
                        className='bg-primary-300 w-full py-3 mt-4 rounded-md shadow-md'
                    >
                        <View className='flex flex-row items-center justify-center'>
                            <Image source={icons.google} className='w-5 h-5' resizeMode='contain' />
                            <Text className='text-lg font-rubik-medium text-white ml-2'>Contiue with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn