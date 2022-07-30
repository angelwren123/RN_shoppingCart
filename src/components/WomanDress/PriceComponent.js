import React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Slider } from '@miblanchard/react-native-slider';
import { View,Text } from 'react-native';
const PriceComponent = () => {
    const [value, setValue] = React.useState([48, 677]);

    return (
        <>
            <View style={{ flexDirection: 'row', marginLeft: 2 }}>
                    <FontAwesome name='dollar' size={18} color={'black'} style={{ alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', marginLeft: 15, fontWeight: '700', color: 'black', fontSize: 16 }}>Price</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Slider
                        value={value}
                        onValueChange={([value1, value2]) => { setValue([value1, value2]) }}
                        thumbStyle={{ backgroundColor: 'black', width: 10, height: 20, borderRadius: -5 }}
                        animationType={'spring'}
                        maximumValue={1000}
                        minimumValue={1}
                        step={1}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ backgroundColor: '#dcdcdc', flex: 1, marginRight: 8 }}>
                            <Text style={{ alignSelf: 'center', paddingVertical: 5, fontWeight: '600' }}>$ {value[0]}</Text>
                        </View>
                        <View style={{ backgroundColor: '#dcdcdc', flex: 1, marginLeft: 8 }}>
                            <Text style={{ alignSelf: 'center', paddingVertical: 5, fontWeight: '600' }}>$ {value[1]}</Text>
                        </View>
                    </View>
                </View>
        </>
    )
}

export default PriceComponent