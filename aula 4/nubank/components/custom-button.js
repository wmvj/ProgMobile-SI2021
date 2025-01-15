import { Pressable, Text, View } from "react-native";

export const CustomButton = ({label, onPress}) => {
    return(
            <Pressable onPress={onPress} className="bg-white h-12 w-full rounded-2xl my-2 justify-center items-center">
                <Text className="font-bold text-xl">{label}</Text>
            </Pressable>
    )
}