import React from 'react'
import { Text,TouchableWithoutFeedback,View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SizeComponent = (props) => {

    const [sizeXXS, setSizeXXS] = React.useState(false);
    const [sizeXS, setSizeXS] = React.useState(false);
    const [sizeS, setSizeS] = React.useState(false);
    const [sizeM, setSizeM] = React.useState(false);
    const [sizeL, setSizeL] = React.useState(false);
    const [sizeXL, setSizeXL] = React.useState(false);
    const [sizeXXL, setSizeXXL] = React.useState(false);
    const [size3XL, setSize3XL] = React.useState(false);
  return (
    <>
    <View style={{ flexDirection: 'row', marginLeft: 2 }}>
                    <MaterialCommunityIcons name='hanger' size={20} color={'black'} style={{ alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', marginLeft: 15, fontWeight: '700', color: 'black', fontSize: 16 }}>Size</Text>
                </View>
                <View style={{ marginVertical: 10, flexWrap: 'wrap', flexDirection: 'row', }}>
                    <TouchableWithoutFeedback onPress={() => {
                        setSizeXXS(true)
                        setSizeXS(false)
                        setSizeS(false)
                        setSizeM(false)
                        setSizeL(false)
                        setSizeXL(false)
                        setSizeXXL(false)
                        setSize3XL(false)
                        const check = props?.dataFilters.every((filter, idx) => {
                            return filter !== 'size: xxs'
                        })
                        if (check) {
                            props?.setDataFilters([...props?.dataFilters, 'size: xxs'])
                        }
                    }}>
                        <View style={{ backgroundColor: sizeXXS ? '#85c9e8' : '#dcdcdc', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 2, }}>
                            <Text style={{ fontWeight: '700', color: 'black' }}>XXS</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        setSizeXXS(false)
                        setSizeXS(true)
                        setSizeS(false)
                        setSizeM(false)
                        setSizeL(false)
                        setSizeXL(false)
                        setSizeXXL(false)
                        setSize3XL(false)
                        const check = props?.dataFilters.every((filter, idx) => {
                            return filter !== 'size: xs'
                        })
                        if (check) {
                            props?.setDataFilters([...props?.dataFilters, 'size: xs'])
                        }
                    }}>
                        <View style={{ backgroundColor: sizeXS ? '#85c9e8' : '#dcdcdc', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 2 }}>
                            <Text style={{ fontWeight: '700', color: 'black' }}>XS</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        setSizeXXS(false)
                        setSizeXS(false)
                        setSizeS(true)
                        setSizeM(false)
                        setSizeL(false)
                        setSizeXL(false)
                        setSizeXXL(false)
                        setSize3XL(false)
                    }}>
                        <View style={{ backgroundColor: sizeS ? '#85c9e8' : '#dcdcdc', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 2 }}>
                            <Text style={{ fontWeight: '700', color: 'black' }}>S</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => {
                        setSizeXXS(false)
                        setSizeXS(false)
                        setSizeS(false)
                        setSizeM(true)
                        setSizeL(false)
                        setSizeXL(false)
                        setSizeXXL(false)
                        setSize3XL(false)
                    }}>
                        <View style={{ backgroundColor: sizeM ? '#85c9e8' : '#dcdcdc', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 2 }}>
                            <Text style={{ fontWeight: '700', color: 'black' }}>M</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        setSizeXXS(false)
                        setSizeXS(false)
                        setSizeS(false)
                        setSizeM(false)
                        setSizeL(true)
                        setSizeXL(false)
                        setSizeXXL(false)
                        setSize3XL(false)
                    }}>
                        <View style={{ backgroundColor: sizeL ? '#85c9e8' : '#dcdcdc', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 2 }}>
                            <Text style={{ fontWeight: '700', color: 'black' }}>L</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        setSizeXXS(false)
                        setSizeXS(false)
                        setSizeS(false)
                        setSizeM(false)
                        setSizeL(false)
                        setSizeXL(true)
                        setSizeXXL(false)
                        setSize3XL(false)
                    }}>
                        <View style={{ backgroundColor: sizeXL ? '#85c9e8' : '#dcdcdc', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 2 }}>
                            <Text style={{ fontWeight: '700', color: 'black' }}>XL</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        setSizeXXS(false)
                        setSizeXS(false)
                        setSizeS(false)
                        setSizeM(false)
                        setSizeL(false)
                        setSizeXL(false)
                        setSizeXXL(true)
                        setSize3XL(false)
                    }}>
                        <View style={{ backgroundColor: sizeXXL ? '#85c9e8' : '#dcdcdc', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 2 }}>
                            <Text style={{ fontWeight: '700', color: 'black' }}>XXL</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        setSizeXXS(false)
                        setSizeXS(false)
                        setSizeS(false)
                        setSizeM(false)
                        setSizeL(false)
                        setSizeXL(false)
                        setSizeXXL(false)
                        setSize3XL(true)
                    }}>
                        <View style={{ backgroundColor: size3XL ? '#85c9e8' : '#dcdcdc', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', margin: 5, borderRadius: 2 }}>
                            <Text style={{ fontWeight: '700', color: 'black' }}>3XL</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
    </>
  )
}

export default SizeComponent