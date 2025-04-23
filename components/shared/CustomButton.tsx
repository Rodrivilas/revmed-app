import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'
interface Props extends PressableProps {
    children: React.ReactNode; // Changed from string to React.ReactNode
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'contained' | 'text-only';
    className?: string;
    textClassName?: string;
}

const CustomButton = React.forwardRef(({ children, color = 'primary', onPress, onLongPress, variant = 'contained', className, textClassName }: Props, ref: React.Ref<View>) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'

    }[color];
    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary'

    }[color];

    // Determine if children is a string or another React node
    const isStringChild = typeof children === 'string';

    if (variant == 'text-only') {
        return (
            <Pressable className={`p-3 ${className}`}
                onPress={onPress} onLongPress={onLongPress} ref={ref}
            >
                {isStringChild ? (
                    <Text className={`text-center ${textColor} font-nunito-regular ${textClassName}`}>{children}</Text>
                ) : (
                    // Render non-string children directly
                    children
                )}
            </Pressable>
        );
    }


    return (
        <Pressable className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
            onPress={onPress} onLongPress={onLongPress} ref={ref}
        >
             {isStringChild ? (
                    <Text className={`text-white text-center font-nunito-regular ${textClassName}`}>{children}</Text>
                ) : (
                     // Render non-string children directly
                    children
                )}
        </Pressable>
    )
})

export default CustomButton