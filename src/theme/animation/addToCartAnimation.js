export const  animAddToCart = () => {

    const opacityImg = Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.circle
    })
    const mtImgAnim = Animated.timing(marginTopImg,{
        toValue:-220,
        duration:1000,
        useNativeDriver:false,
        easing:Easing.circle
    })
    const mrImgAnim =Animated.timing(marginRightImg,{
        toValue:-150,
        duration:1000,
        useNativeDriver:false,
        easing:Easing.circle
    })
    const heightImgAnim = Animated.timing(heightImg,{
        toValue:1,
        duration:1000,
        useNativeDriver:false,
        easing:Easing.circle
    })
    const widthImgAnim = Animated.timing(widthImg,{
        toValue:1,
        duration:1000,
        useNativeDriver:false,
        easing:Easing.circle
    })
    const finalImg = Animated.parallel([opacityImg,mtImgAnim,mrImgAnim,heightImgAnim,widthImgAnim]).start()
}