import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'



const countryDatas = ['Bình Định', 'TPHCM', 'Hà Nội','Huế']
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const ModalCheckoutComponent = (props) => {
    const onPressItem = (data) => {
        props.changeModalVisibility(false);
        props.setSelectedData(data)
    }

    const country = countryDatas.map((item,idx)=>{
        return (
            <TouchableOpacity
            style={styles.option}
            key={idx}
            onPress={()=> onPressItem(item)}
            >
                <Text style={styles.text}>
                {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return (
        <>
            <TouchableOpacity
            onPress={()=>{props?.changeModalVisibility(false)}}
            style={styles.container}
            >
                <View style={[styles.modal, {width:width-50, flex:0.5}]}>
                    <ScrollView>
                        <Text style={[styles.text,{alignSelf:'center', color:'red'}]}>Country</Text>
                        {country}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default ModalCheckoutComponent

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
        backgroundColor:'white',
        borderRadius: 10
    },
    option:{
        alignItems:'center'
    },
    text:{
        margin:20,
        fontSize:20,
        fontWeight:'bold'
    }
})