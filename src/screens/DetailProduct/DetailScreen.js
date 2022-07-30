import React, { useState } from 'react'
import { SafeAreaView, Text, View, Pressable, Modal, Dimensions, Image, Alert, Animated, Easing } from 'react-native'
import HeaderComponent from '../../components/Header/HeaderComponent';
import { useRoute } from '@react-navigation/native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { actAddToCart } from '../../redux/actions/ActionTypes';
import DescComponent from '../../components/Detail/DescComponent';
import ColourComponent from '../../components/Detail/ColourComponent';
import SlideImgComponent from '../../components/Detail/SlideImgComponent';

const { width, height } = Dimensions.get('window');
// console.log(height);
const data = [
    {
        id: 1,
        title: 'Nike 1',
        images: ['https://i.imgur.com/5zQ2Y5m.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg'],
        price: 321,
        description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        colors: ['red', 'brown', 'violet']
    },
    {
        id: 2,
        title: 'Nike 2',
        images: ['https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg', 'https://i.imgur.com/nDSI1rU.jpg'],
        price: 322,
        description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        colors: ['red', 'brown', 'violet']
    },
    {
        id: 3,
        title: 'Nike 3',
        images: ['https://i.imgur.com/fgb5TPg.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg'],
        price: 323,
        description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        colors: ['red', 'brown', 'violet']
    },
    {
        id: 4,
        title: 'Nike 4',
        images: ['https://i.imgur.com/nDSI1rU.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/5zQ2Y5m.jpg'],
        price: 324,
        description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        colors: ['red', 'brown', 'violet']
    },
];
const DetailScreen = (props) => {

    const ref = React.useRef(new Animated.ValueXY()).current;

    const opacity = new Animated.Value(0)
    const marginTopImg = new Animated.Value(0);
    const marginRightImg = new Animated.Value(0);
    const widthImg = new Animated.Value(0);
    const heightImg = new Animated.Value(0)


    const [detailApi, setDetailApi] = React.useState();
    const [detailJSON, setDetailJSON] = React.useState();
    const route = useRoute()
    const { item } = props?.route?.params
    const { idqr } = props?.route?.params


    React.useEffect(() => {
        if (props?.route?.params?.id) {
            fetch(`https://dummyjson.com/products/${props?.route?.params?.id}`)
                .then(res => res.json())
                .then(data => setDetailApi(data))
        }
    }, [props?.route?.params?.id, idqr])


    React.useEffect(() => {
        if (idqr) {
            const dataJSON = data.filter((item, idx) => {
                return item.id === idqr.id
            })
            setDetailJSON(dataJSON[0])
        }
    }, [idqr, props?.route?.params?.id])


    const dispatch = useDispatch()
    const [color, setColor] = React.useState(item?.colors[0])
    const animAddToCart = () => {
        const opacityImg = Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.circle
        })
        const mtImgAnim = Animated.timing(marginTopImg, {
            toValue: -200,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.circle
        })
        const mrImgAnim = Animated.timing(marginRightImg, {
            toValue: -150,
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
    }

    const addToCart = (product) => {
        opacity.setValue(0);
        marginTopImg.setValue(0);
        marginRightImg.setValue(0);
        widthImg.setValue(0);
        heightImg.setValue(0)
        animAddToCart();
        dispatch(actAddToCart(product, color))
    }
    const selectColor = (color) => {
        setColor(color)
    }
    const layoutSlide = (e) =>{
        // console.log(e.nativeEvent.layout);
        setCoorLayoutSlide({
            ...coorlayoutSlide,
            height:e.nativeEvent.layout.height,
            width:e.nativeEvent.layout.width,
        })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* header */}
            <View>
                <HeaderComponent routeName={route.name} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >

                {/* them */}
                <View style={{
                    backgroundColor: '#404f50', padding: 10, flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Pressable style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 15, marginHorizontal: 5 }}>
                        <Text style={{
                            fontSize: 11,
                            fontWeight: 'bold',
                            letterSpacing: 0.25,
                            color: 'white',
                        }}>ADD TO WISHLIST</Text>
                    </Pressable>
                    <Pressable style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 15, marginHorizontal: 5 }}
                        onPress={() => addToCart(item ? item : detailApi)}
                    >
                        <Text style={{
                            fontSize: 11,
                            fontWeight: 'bold',
                            letterSpacing: 0.25,
                            color: 'black',
                        }}>ADD TO CART</Text>
                    </Pressable>
                </View>
                <View>
                    {/* slide */}

                    <View>
                        <View>
                            <SlideImgComponent
                                images={item?.images ? item?.images : detailApi?.images ? detailApi?.images : detailJSON?.images}
                                title={item?.title ? item?.title : detailApi?.title ? detailApi?.title : detailJSON?.title}
                                price={item?.price ? item?.price : detailApi?.price ? detailApi?.price : detailJSON?.price}
                            />
                        </View>
                        {/* <View style={{ position: 'absolute', top: 100, right: 100, alignItems: 'center' }}>
                            <Animated.Image source={{ uri: `${item?.images ? item?.images : detailApi?.images ? detailApi?.images : detailJSON?.images}` }}
                                style={{
                                    height:
                                    heightImg.interpolate({
                                        inputRange:[0,0.2,0.4,0.6,0.8,1],
                                        outputRange:[100,80,60,40,20,0]
                                    }),
                                    width: 
                                    widthImg.interpolate({
                                        inputRange:[0,0.2,0.4,0.6,0.8,1],
                                        outputRange:[100,80,60,40,20,0]
                                    }),
                                    opacity:
                                    opacity.interpolate({
                                        inputRange: [0, 0.25, 0.5, 0.75, 1],
                                        outputRange: [0, 0.5, 1, 0.5, 0]
                                    }), 
                                    marginTop: marginTopImg,
                                    marginRight: marginRightImg,
                                
                                    
                                }} />
                        </View> */}

                    </View>
                    {/* desc */}
                    <DescComponent desc={item?.description ? item?.description : detailApi?.description ? detailApi?.description : detailJSON?.description} />
                    {/* colors */}
                    {/* <ColourComponent colors={item?.colors} selectColor={selectColor} /> */}
                </View>

            </ScrollView>
            <View style={{ position: 'absolute', top: 200, right: 100, alignItems: 'center' }}>
                <Animated.Image source={{ uri: `${item?.images ? item?.images : detailApi?.images ? detailApi?.images : detailJSON?.images}` }}
                    style={{
                        height:
                            heightImg.interpolate({
                                inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                                outputRange: [100, 80, 60, 40, 20, 0]
                            }),
                        width:
                            widthImg.interpolate({
                                inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                                outputRange: [100, 80, 60, 40, 20, 0]
                            }),
                        opacity:
                            opacity.interpolate({
                                inputRange: [0, 0.25, 0.5, 0.75, 1],
                                outputRange: [0, 0.5, 1, 0.5, 0]
                            }),
                        marginTop: marginTopImg,
                        marginRight: marginRightImg,


                    }} />
            </View>
        </SafeAreaView>
    )
}

export default DetailScreen