import { View, Text } from 'react-native'
import React from 'react'
import ExpandableListView from '@/components/shared/CustomListView'

const ActorScreen = () => {
    return (
        <ExpandableListView
            data={[
                {
                    id: '1',
                    title: 'Info del producto',
                    content: <Text className="text-gray-600">Detalles, tallas, colores...</Text>,
                },
                {
                    id: '2',
                    title: 'Política de devoluciones',
                    content: <Text className="text-gray-600">Tienes 30 días para devolverlo.</Text>,
                },
            ]}
        />

    )
}

export default ActorScreen