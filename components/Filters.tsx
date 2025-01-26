import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data';

const Filters = () => {
    const params = useLocalSearchParams<{ query?: string }>();
    const [selectedCategory, setSelectedCategory] = useState(params.query || 'All');

    const handleCategoryChange = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory('All');
            router.setParams({ filter: 'All' });
            return;
        }

        setSelectedCategory(category);
        router.setParams({ filter: category });
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-3 mb-2'>
            {
                categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleCategoryChange(category.category)}
                        className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${selectedCategory === category.category ? 'bg-primary-300' : 'bg-primary-100 border border-primary-200'}`}
                    >
                        <Text className={`text-sm ${selectedCategory === category.category ? "text-white font-rubik-bold mt-0.5" : "text-black-300 font-rubik"}`}>{category.title}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

export default Filters