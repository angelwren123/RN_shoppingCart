import React from 'react'
import { View, Text, SafeAreaView, ImageBackground, Dimensions, TextInput, Pressable, StyleSheet, Modal } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import ModalCheckoutComponent from './ModalCheckoutComponent'


const FormComponent = () => {
    const navigation = useNavigation()


    const [textFullName, setTextFullName] = React.useState('');
    const [textAddress1, setTextAddress1] = React.useState('');
    const [textAddress2, setTextAddress2] = React.useState('');
    const [textTownCity, setTextTownCity] = React.useState('');
    const [textPostZip, setTextPostZip] = React.useState('');
    const [textPhone, setTextPhone] = React.useState('');

    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState('Country');

    const width = Dimensions.get('window').width;

    const changeModalVisibility = (bool) => {
        setModalVisible(bool)
    }
    return (
        <>
            <View style={{ flex: 1, flexDirection: 'row', margin: 15, borderRadius: 5, }}>
                <View style={{ backgroundColor: 'white', flex: 6, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, elevation: 5 }}>
                    <TextInput
                        style={{
                            paddingHorizontal: 30,
                            fontSize: 15,
                            borderRadius: 2,
                            color: 'black'
                        }}
                        placeholder="Select a Country"
                        value={selectedData}
                        editable={false}
                        onChangeText={event => {
                            setOnChangeText(event);
                        }} />

                </View>
                <Pressable style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'center', }}
                    onPress={() => setModalVisible(true)}>
                    <Entypo name='chevron-down' size={20} color={'white'} />
                </Pressable>

            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 15, marginBottom: 15, borderRadius: 5 }}>
                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 5, flexDirection: 'row', elevation: 5 }}>
                    <TextInput
                        style={{
                            paddingHorizontal: 30,
                            fontSize: 15,
                            borderRadius: 2,
                            color: 'black',
                            flex: 1
                        }}
                        placeholder="FullName"
                        value={textFullName}
                        onChangeText={event => {
                            setTextFullName(event);
                        }} />
                    <Text style={{ alignSelf: 'center', marginRight: 15 }} >
                        {(typeof textFullName === 'string' && textFullName) && <AntDesign name='checkcircle' color={'green'} size={15} />}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 15, marginBottom: 15, borderRadius: 5 }}>
                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 5, flexDirection: 'row', elevation: 5 }}>
                    <TextInput
                        style={{
                            paddingHorizontal: 30,
                            fontSize: 15,
                            borderRadius: 2,
                            color: 'black',
                            flex: 1,
                            // backgroundColor:'red'
                        }}
                        placeholder="Address line one"
                        value={textAddress1}
                        onChangeText={event => {
                            setTextAddress1(event);

                        }} />
                    <Text style={{ alignSelf: 'center', marginRight: 15 }} >
                        {(typeof textAddress1 === 'string' && textAddress1) && <AntDesign name='checkcircle' color={'green'} size={15} />}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 15, marginBottom: 15, borderRadius: 5 }}>
                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 5, flexDirection: 'row', elevation: 5 }}>
                    <TextInput
                        style={{
                            paddingHorizontal: 30,
                            fontSize: 15,
                            borderRadius: 2,
                            color: 'black',
                            flex: 1,
                            // backgroundColor:'red'
                        }}
                        placeholder="Address line two"
                        value={textAddress2}
                        onChangeText={event => {
                            setTextAddress2(event);

                        }} />
                    <Text style={{ alignSelf: 'center', marginRight: 15 }} >
                        {(typeof textAddress2 === 'string' && textAddress2) && <AntDesign name='checkcircle' color={'green'} size={15} />}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 15, marginBottom: 15, borderRadius: 5 }}>
                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 5, flexDirection: 'row', elevation: 5 }}>
                    <TextInput
                        style={{
                            paddingHorizontal: 30,
                            fontSize: 15,
                            borderRadius: 2,
                            color: 'black',
                            flex: 1,
                            // backgroundColor:'red'
                        }}
                        placeholder="Town / City"
                        value={textTownCity}
                        onChangeText={event => {
                            setTextTownCity(event);

                        }} />
                    <Text style={{ alignSelf: 'center', marginRight: 15 }} >
                        {(typeof textTownCity === 'string' && textTownCity) && <AntDesign name='checkcircle' color={'green'} size={15} />}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 15, marginBottom: 15, borderRadius: 5, }}>
                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 5, flexDirection: 'row', marginRight: 5, elevation: 5 }}>
                    <TextInput
                        style={{
                            paddingHorizontal: 30,
                            fontSize: 15,
                            borderRadius: 2,
                            color: 'black',
                            flex: 1,
                            // backgroundColor:'red'
                        }}
                        placeholder="Post / Zip"
                        value={textPostZip}
                        onChangeText={event => {
                            setTextPostZip(event);

                        }} />
                    <Text style={{ alignSelf: 'center', marginRight: 15 }} >
                        {(typeof textPostZip === 'string' && textPostZip) && <AntDesign name='checkcircle' color={'green'} size={15} />}
                    </Text>
                </View>
                <View style={{ backgroundColor: 'white', flex: 1, borderRadius: 5, marginLeft: 5, flexDirection: 'row', elevation: 5 }}>
                    <TextInput
                        style={{
                            paddingHorizontal: 30,
                            fontSize: 15,
                            borderRadius: 2,
                            color: 'black',
                            flex: 1,
                            // backgroundColor:'red'
                        }}
                        placeholder="Phone"
                        value={textPhone}
                        onChangeText={event => {
                            setTextPhone(event);
                        }} />
                    <Text style={{ alignSelf: 'center', marginRight: 15 }} >
                        {(Number(textPhone)) ? <AntDesign name='checkcircle' color={'green'} size={15} /> : <AntDesign name='closecircle' color={'red'} size={15} />}
                    </Text>

                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 15, marginBottom: 15, borderRadius: 5, }}>
                <Pressable
                    style={{
                        backgroundColor: 'black', flex: 1, borderRadius: 5, elevation: 5, justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={()=>navigation.navigate('Billing Details')}
                >
                    <Text style={{
                        paddingHorizontal: 30,
                        fontSize: 15,
                        borderRadius: 2,
                        color: 'white',
                        flex: 1,
                        paddingVertical: 15
                    }}>OK</Text>
                </Pressable>
            </View>
            {/* modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    changeModalVisibility(false);
                }}
            >
                <ModalCheckoutComponent
                    changeModalVisibility={changeModalVisibility}
                    setSelectedData={setSelectedData}
                />
            </Modal>
        </>
    )
}

export default FormComponent