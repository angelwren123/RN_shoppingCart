import React from 'react'
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import {  View, Text, Dimensions } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const DescComponent = (props) => {
    const { desc } = props
    const [heightDesc, setHeightDesc] = React.useState(false)
    const width = Dimensions.get('window').width;

    const viewDesc = () => {
        setHeightDesc(!heightDesc)
    }
    return (
        <>
            <View style={{
                backgroundColor: 'white', marginBottom: 15, marginHorizontal: 15, width: width - 30,
                elevation: 2, shadowColor: 'black', borderRadius: 5, flex: 0
            }}>
                <TouchableWithoutFeedback onPress={() => { viewDesc() }}>
                    <View style={{ flexDirection: "row", paddingVertical: 15 }}>
                        <FontAweSome name='plus' size={20} style={{ marginLeft: 30 }} color={'black'} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontSize: 15, fontWeight: '900', color: 'black' }}>Description</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                {heightDesc && (
                    <View showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white', borderBottomRightRadius:5, borderBottomLeftRadius:5 }} >
                        <Text style={{ padding: 15 }}>
                            {desc}
                        </Text>
                    </View>
                )}
            </View>
        </>
    )
}

export default DescComponent