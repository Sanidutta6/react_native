import { Card, FeaturedCard } from "@/components/Card";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { router } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={(item) => item.toString()}
                numColumns={2}
                contentContainerClassName="pb-32"
                columnWrapperClassName="flex gap-5 px-5"
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Card onPress={() => router.push("/properties/1")} />}
                ListHeaderComponent={
                    <View className="px-5">
                        <View className="flex flex-row items-center justify-between mt-5 ">
                            <TouchableOpacity
                                className="flex flex-row items-center justify-center bg-primary-200 rounded-full size-11"
                                onPress={() => router.back()}
                            >
                                <Image source={icons.backArrow} className="size-6" />
                            </TouchableOpacity>
                            <Text className="text-base mr-2 text-center font-rubik-medium text-black-300">Search for Your Ideal Home</Text>
                            <Image source={icons.bell} className="h-6 w-6" />
                        </View>
                        <Search />
                        <View className="mt-5">
                            <Filters />
                            <Text className="text-xl font-rubik-bold text-black-300 mt-5">Found 5 Properties</Text>
                        </View>
                    </View>
                }
            />

        </SafeAreaView>
    )
}

export default Explore