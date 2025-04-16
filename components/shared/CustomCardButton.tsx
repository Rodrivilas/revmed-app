import React from 'react';
import { View, Text, Image, Pressable, ImageSourcePropType } from 'react-native';

interface CardButtonProps {
    image: ImageSourcePropType;
    description: string;
    onPress?: () => void;
    width?: number;
    height?: number;
}

export default function CardButton({
    image,
    description,
    onPress,
    width = 150,
    height = 200,
}: CardButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            className="rounded-2xl overflow-hidden bg-slate-100 shadow-md mx-2 my-2"
            style={{ width, height }}
        >
            <Image source={image} style={{ width: '100%', height: '70%' }} resizeMode="cover" />
            <View className="p-2 items-center justify-center h-[30%]">
                <Text className="text-center text-black font-nunito-regular text-xl">{description}</Text>
            </View>
        </Pressable>
    );
}
