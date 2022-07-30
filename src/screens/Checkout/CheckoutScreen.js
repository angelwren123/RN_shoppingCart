import React from 'react'
import { View, Text, SafeAreaView, ImageBackground, Dimensions, TextInput, Pressable, StyleSheet, Modal } from 'react-native'
import HeaderComponent from '../../components/Header/HeaderComponent'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import FormComponent from '../../components/Checkout/FormComponent'
const CheckoutScreen = () => {
    const route = useRoute()
    const width = Dimensions.get('window').width;
    const [text, setOnChangeText] = React.useState('');

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent routeName={route.name} typeOnPressBack={true} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', paddingVertical: 20, fontSize: 18, fontWeight: 'bold' }}>Billing Details</Text>
                        </View>

                        <View style={{ height: 180, backgroundColor: 'black' }}>
                            <ImageBackground
                                source={require('../../assets/bg2.jpg')}
                                style={{
                                    flex: 1,
                                    width: width,
                                    resizeMode: 'cover',
                                    borderBottomWidth: 1,
                                }}
                                imageStyle={{ opacity: 0.5 }}
                            >
                                <View style={{ flex: 1, alignItems: 'center', zIndex: 1 }}>
                                    <View style={{ marginVertical: 30 }}>
                                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', zIndex: 2 }}>Have a Coupon?</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', height: 40, marginTop: 8 }}>
                                        <View style={{ flex: 3, width: 100 + '%', marginHorizontal: 10 }}>
                                            <TextInput
                                                style={{
                                                    paddingHorizontal: 30,
                                                    fontSize: 15,
                                                    backgroundColor: 'white',
                                                    opacity: 0.5,
                                                    borderRadius: 2
                                                }}
                                                placeholder="Coupon Code here..."
                                                value={text}
                                                onChangeText={event => {
                                                    setOnChangeText(event);
                                                }}
                                            />
                                        </View>
                                        <View style={{
                                            flex: 1,
                                            backgroundColor: 'white',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginRight: 15,
                                            borderRadius: 2
                                        }}>
                                            <Text style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Apply</Text>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        {/* form */}
                        <FormComponent />
                    </View>

                </ScrollView>
                
            </SafeAreaView>
        </>
    )
}

export default CheckoutScreen
