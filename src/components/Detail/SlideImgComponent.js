import React from 'react'
import { View, ScrollView, Text, Dimensions, Image } from 'react-native'
import FontAweSome from 'react-native-vector-icons/FontAwesome'

const SlideImgComponent = (props) => {
    const { images,title,price } = props
    const width = Dimensions.get('window').width;
    const [imgActive, setImgActive] = React.useState(0);

    const onChange = (nativeEvent) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide != imgActive) {
            setImgActive(slide)
        }
    }
    return (
        <>
            <View style={{
                backgroundColor: 'white', margin: 15, height: 360, width: width - 30,
                elevation: 2, shadowColor: 'black', borderRadius: 5
            }}>
                <View style={{ flex: 0.98, width: width - 30 }} >
                    <ScrollView
                        onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        style={{
                            flex: 1,
                            width: width - 30,
                        }}
                    >
                        {images?.map((i, idx) => {
                            return <Image
                                key={idx}
                                source={{ uri: `${i}` }}
                                style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, width: width - 30, flex: 1 }}
                                resizeMode='cover'
                            />
                        })}
                    </ScrollView>
                    <View style={{ position: 'absolute', bottom: 8, left: 10, flexDirection: 'row', alignSelf: 'flex-start' }}>
                        {images?.map((i, idx) => {
                            return <FontAweSome key={idx} name='minus' size={25} style={imgActive === idx ? { color: 'red', marginHorizontal: 3 } : { color: 'black', marginHorizontal: 3 }} />
                        })}
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginVertical: 5 }}>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', }}>
                        <Text style={{ paddingHorizontal: 5, fontWeight: '900', fontSize: 15 }}>{title}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignSelf: 'center', backgroundColor: '#9cb4cc', marginRight: 25 }}>
                        <Text style={{ paddingHorizontal: 28, paddingVertical: 10, color: 'white' }}>$ {price}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default SlideImgComponent