import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { View, Image, Text, Animated, Easing, PanResponder, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useDispatch } from 'react-redux'
import { zip } from 'rxjs'
import { actAddToCart } from '../../redux/actions/ActionTypes'
const ProductItem = (props) => {
    const { width, height } = Dimensions.get('window');
    // console.log(width);
    const navigation = useNavigation();

    const opacity = new Animated.Value(0)
    const marginTopImg = new Animated.Value(0);
    const marginRightImg = new Animated.Value(0);
    const widthImg = new Animated.Value(0);
    const heightImg = new Animated.Value(0)

    const { item } = props
    const dispatch = useDispatch()
    const viewDetail = () => {
        navigation.navigate('Detail', { item: item })
    }
    const addToCart = (e) => {
        // console.log(e.nativeEvent.pageY);
        opacity.setValue(0);
        marginTopImg.setValue(0);
        marginRightImg.setValue(0);
        widthImg.setValue(0);
        heightImg.setValue(0)
        animAddToCart(e.nativeEvent)
        dispatch(actAddToCart(item, item?.color))
    }
    const animAddToCart = (coordinate) => {
        // console.log(coordinate);
        const opacityImg = Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.circle
        })
        const mtImgAnim = Animated.timing(marginTopImg, {
            toValue: -coordinate.pageY + 280,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.circle
        })
        const mrImgAnim = Animated.timing(marginRightImg, {
            // 350
            toValue: coordinate.pageX > 189 ? coordinate.pageX / 5 : -coordinate.pageX,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.circle
        })
        const heightImgAnim = Animated.timing(heightImg, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.circle
        })
        const widthImgAnim = Animated.timing(widthImg, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.circle
        })

        const finalImg = Animated.parallel([opacityImg, mtImgAnim, mrImgAnim, heightImgAnim, widthImgAnim]).start()
        // const finalImg = Animated.parallel([opacityImg,float, heightImgAnim, widthImgAnim]).start()
        // Animated.loop(finalImg).start()
    }

    return (
        <View style={{ width: '45%', margin: 10, }}>
            {/* //margin: 10, */}
            <View style={{ height: 300, width: '100%', backgroundColor: 'white', shadowColor: 'black', elevation: 5, borderRadius: 5 }}>
                <TouchableOpacity onPress={() => viewDetail()} style={{ flex: 1 }}>
                    {item?.status && (
                        <View style={{ position: 'absolute', top: 30, left: -5, elevation: 5, shadowColor: 'black', borderRadius: 2 }}>
                            <Text style={{ padding: 8, color: 'white' }}>New</Text>
                        </View>
                    )}
                    <View style={{ flex: 0.98, width: "100%" }}>
                        <Image source={{ uri: `${item?.images}` }} style={{ height: '100%', width: "100%", resizeMode: 'cover', borderTopRightRadius: 5, borderTopLeftRadius: 5 }} />
                    </View>
                </TouchableOpacity>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: '800' }}>{item?.title}</Text>
                    <Text style={{ alignSelf: 'center', marginTop: 10 }}>$ {item?.price}</Text>
                </View>

                <TouchableOpacity onPress={(e) => { addToCart(e) }}>
                    <Animated.View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <FontAwesome5 name='cart-plus' size={25} color={'black'} />
                    </Animated.View>
                </TouchableOpacity>

            </View>
            <Animated.View style={{
                position: 'absolute',
                top: 0, right: 0,
                // backgroundColor: 'yellow',
                height:
                    heightImg.interpolate({
                        inputRange: [0, 0.25, 0.5, 0.75, 1],
                        outputRange: [80, 60, 40, 20, 0]
                    }),
                width:
                    widthImg.interpolate({
                        inputRange: [0, 0.25, 0.5, 0.75, 1],
                        outputRange: [80, 60, 40, 20, 0]
                    }),
                marginTop: marginTopImg,
                marginRight: marginRightImg,
                opacity:
                opacity.interpolate({
                    inputRange: [0, 0.25, 0.5, 0.75, 1],
                    outputRange: [0, 0.5, 1, 0.5, 0]
                }),
                zIndex: 100
            }}>
                <Animated.Image source={{ uri: `${item?.images}` }}
                    style={[{
                        height: '100%',
                        width: '100%',
                    },]}
                />
            </Animated.View>
        </View>
    )
}

export default ProductItem