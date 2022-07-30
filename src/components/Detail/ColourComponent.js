import React from 'react'
import { View,Text, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
const ColourComponent = (props) => {
    const width = Dimensions.get('window').width;

    const {colors} = props

    const [colorSelect, setColorSelect] = React.useState(colors[0])
    const selectColor = (color) => {
        setColorSelect(color)
        props?.selectColor(color)
    }
    return (
        <>
            <View style={{
                backgroundColor: 'white', marginBottom: 15, marginHorizontal: 15, width: width - 30,
                elevation: 2, shadowColor: 'black', borderRadius: 5, flex: 1
            }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 10 }}>
                    <Feather name='droplet' size={18} color={'black'} style={{ alignSelf: 'center', marginHorizontal: 5 }} />
                    <Text style={{ marginHorizontal: 5, color: 'black', fontWeight: '700' }}>Colour:</Text>
                </View>
                <View style={{ alignSelf: 'center', marginBottom: 10 }}>
                    <Text>Choose a colour for item</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 8, justifyContent: 'center' }}>
                    {colors.map((color, idx) => {
                        return <Text key={idx} 
                        style={ color===colorSelect ? {backgroundColor: `${color}`, width: 40, height: 40, borderRadius: 2, marginHorizontal: 8, borderWidth:3} :{backgroundColor: `${color}`, width: 40, height: 40, borderRadius: 2, marginHorizontal: 8} } 
                        onPress={()=>selectColor(color)} />
                    })}
                </View>
            </View>
        </>
    )
}

export default ColourComponent