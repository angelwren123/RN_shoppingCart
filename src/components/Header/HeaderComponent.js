import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderIcon from './HeaderIcon';
const HeaderComponent = (props) => {
    const { routeName, toggleTag, toggleDrawer, menuWD, } = props

    const navigation = useNavigation();
    
    const yourCart = () => {
        navigation.navigate('cart')
    }
    const tag = () => {
        props?.tag()
    }
    const closeBtnCart = () => {
        navigation.goBack()
    }
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 60,
                paddingHorizontal: 15,
                justifyContent: 'space-between',
                width: Dimensions.get('window').width,
                backgroundColor: routeName === 'Detail' ?
                    '#404f50' :
                    routeName === 'Checkout' || routeName === 'Billing Details' ? 'orange' : menuWD? '#404f50': '#85c9e8',
                // '#85c9e8',
                zIndex:0
            }}>
            <View style={{ flexDirection: 'row' }}>
                {/* {typeOnPressBack && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>back</Text>
                </TouchableOpacity>
                )} */}
                
                {props?.routeName !== 'Cart' && (
                    <MaterialCommunityIcons
                        name={routeName === 'OurAdvice' || routeName === 'Detail' || routeName === 'Checkout' || routeName === 'Billing Details' ? 'arrow-left' : 'menu'}
                        size={30}
                        color={'black'}
                        style={{ alignSelf: 'center' }}
                        // onPress={() => navigation.toggleDrawer()}
                        onPress={routeName === 'OurAdvice' || routeName === 'Detail' || routeName === 'Checkout' || routeName === 'Billing Details' 
                        ? navigation.canGoBack() ? () => navigation.goBack(): ()=>{ navigation.navigate('eCommerce') } 
                        : () => navigation.toggleDrawer()}
                    />
                )}
                <View style={{ alignSelf: 'center', marginLeft: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                        {routeName}
                    </Text>
                </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <HeaderIcon yourCart={yourCart} tag={tag} routeName={routeName} toggleTag={toggleTag} toggleDrawer={toggleDrawer} closeBtnCart={closeBtnCart} />
            </View>
        </View>
    )
}

export default HeaderComponent