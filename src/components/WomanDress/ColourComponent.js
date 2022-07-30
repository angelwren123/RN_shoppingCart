import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Text,View } from 'react-native'
const ColourComponent = () => {
    const colors=[
        'black','brown','orange','gray','#e8e8e4','blue','violet','green','red','yellow','pink','black',
        'brown','orange','gray','#e8e8e8','blue','violet'
    ]
    return (
        <>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Feather name='droplet' size={18} color={'black'} style={{ alignSelf: 'center' }} />
                <Text style={{ alignSelf: 'center', marginLeft: 12, fontWeight: '700', color: 'black', fontSize: 16 }}>Colour</Text>
            </View>
            <View style={{ marginVertical: 15, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start' }}>
                {colors.map((color,idx)=>{
                    return <Text key={idx} style={{ backgroundColor: color, borderWidth: 1, borderColor: 'black', width: 20, height: 20, borderRadius: 2, marginHorizontal: 3, marginBottom: 4 }} />
                })}
            </View></>
    )
}

export default ColourComponent