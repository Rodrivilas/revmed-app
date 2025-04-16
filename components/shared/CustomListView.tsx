import React, { useState } from 'react';
import { View, Text, Pressable, LayoutAnimation, Platform, UIManager } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';// o cualquier ícono que uses

// Habilitar animaciones en Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ListItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

interface ExpandableListViewProps {
    data: ListItem[];
}

export default function ExpandableListView({ data }: ExpandableListViewProps) {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedItems((prev) =>
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        );
    };

    return (
        <View className="w-full">
            {data.map((item) => {
                const isExpanded = expandedItems.includes(item.id);

                return (
                    <View key={item.id} className="mb-2 border border-gray-300 rounded-xl overflow-hidden">
                        <Pressable
                            onPress={() => toggleItem(item.id)}
                            className="flex-row items-center justify-between px-4 py-3 bg-gray-100"
                        >
                            <Text className="font-medium text-lg">{item.title}</Text>
                            <Ionicons
                                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                                size={20}
                                color="gray"
                            />
                        </Pressable>

                        {isExpanded && (
                            <View className="px-4 py-2 bg-white">
                                {item.content}
                            </View>
                        )}
                    </View>
                );
            })}
        </View>
    );
}
