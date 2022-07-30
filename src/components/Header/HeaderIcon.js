import React,{useRef} from 'react'
import { View, Text, TouchableOpacity,PanResponder, Animated } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Style from '../../theme';
const HeaderIcon = (props) => {
    const navigation = useNavigation();
    const countItem = useSelector(state=>state.cart2Reducer)
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        let countProducts = 0
      countItem.forEach((product)=>{
        countProducts += product.quantity
      })
      setCount(countProducts)
    }, [countItem])
    const viewLayoutIcon = e =>{
        // console.log(e.nativeEvent.layout);
    }
    return (
        <>
            <View style={Style.HeaderIconStyle.container}>
                <View style={Style.HeaderIconStyle.container__cart}>
                    <View >
                        {props?.routeName !== 'cart' && props?.routeName !== 'Checkout' && props?.routeName !== 'Billing Details' ? (
                            <View onLayout={(e)=> viewLayoutIcon(e)}>
                                <TouchableWithoutFeedback onPress={() => props?.yourCart()} style={{}}>
                                    <MaterialCommunityIcons name='cart' size={28} style={[Style.HeaderIconStyle.icon, { color: 'black' }]} />
                                    <View style={Style.HeaderIconStyle.cart__view}>
                                        <Text style={Style.HeaderIconStyle.cart__view__text}>{count}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        ) : props?.routeName === 'Checkout' || props?.routeName === 'Billing Details' ? <></> : (<TouchableOpacity onPress={() => props?.closeBtnCart()}>
                            <MaterialCommunityIcons name='close-thick' size={28} style={[Style.HeaderIconStyle.icon, { color: 'black' }]} />
                        </TouchableOpacity>)}
                        { }
                    </View>
                </View>
                {props?.routeName === 'OurAdvice' && (<></>)}
                {props?.routeName === 'eCommerce' && (<TouchableWithoutFeedback onPress={() => props?.tag()}>
                    <MaterialCommunityIcons name='tag' size={28} style={[Style.HeaderIconStyle.icon, Style.HeaderIconStyle.icon__tag, { color: props?.toggleTag ? 'white' : 'black' }]} />
                </TouchableWithoutFeedback>)
                }
                {props?.routeName === 'Woman&Dresses' && (<><TouchableWithoutFeedback onPress={() => props?.toggleDrawer()}>
                    <MaterialCommunityIcons name='audio-input-rca' size={28} style={[Style.HeaderIconStyle.icon, Style.HeaderIconStyle.icon__tag, { color: props?.toggleTag ? 'white' : 'black', transform: [{ rotateZ: "180deg" }] }]} />
                </TouchableWithoutFeedback></>)}
            </View>
        </>
    )
}

export default HeaderIcon