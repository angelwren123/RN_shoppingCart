import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux'
import Realm from 'realm'
import { actLogin } from '../../redux/actions/ActionTypes'
const LoginScreen = () => {
    const UsersSchema = {
        name: 'Users',
        properties: {
          _id: 'string',
          username: 'string',
          email: 'string',
          password: 'string?',
        },
        primaryKey: '_id',
      };
    const dispatch = useDispatch()
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    const [textUserName, setTextUserName] = React.useState('');
    const [textPassword, setTextPassword] = React.useState('');
    const login = () => {
        // dispatch(actLogin(textUserName,textPassword))
        (async () => {
            await Realm.open({
              path:'myrealm',
              schema:[UsersSchema],
            }).then(realm=>{
              const users = realm.objects('Users')
              console.log(users);
              realm.close()
            })
          })()
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper_img_icon}>
                <Image source={require('../../assets/user_icon.png')} style={styles.img_icon} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.text_wcb}>Welcome Back!</Text>
                <Text style={styles.text_login}>Login to your account!</Text>
            </View>
            <View style={[styles.wrapper_input_icon, { marginTop: 25, }]}>
                <View style={styles.wrapper_icon}>
                    <FontAwesome5 name='user' size={22} color={'blue'} />
                </View>
                <View style={styles.wrapper_input}>
                    <TextInput
                        placeholder='Username'
                        value={textUserName}
                        onChangeText={event => {
                            setTextUserName(event);
                        }}
                    />
                </View>
            </View>
            <View style={[styles.wrapper_input_icon, { marginTop: 15 }]}>
                <View style={styles.wrapper_icon}>
                    <FontAwesome5 name='key' size={22} color={'blue'} />
                </View>
                <View style={styles.wrapper_input}>
                    <TextInput
                        placeholder='Password'
                        value={textPassword}
                        onChangeText={event => {
                            setTextPassword(event);
                        }}
                    />
                </View>
            </View>
            <View style={{ marginHorizontal: 60, marginTop: 15, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{ justifyContent: 'flex-end', opacity: 0.5 }}> Forgot Password?</Text>
            </View>
            <TouchableOpacity onPress={login}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={{ backgroundColor: 'blue', paddingHorizontal: 40, paddingVertical: 15, fontSize: 18, color: 'white', fontWeight: 'bold', borderRadius: 50 }}> Login</Text>
                </View>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 60, marginTop: 15, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ opacity: 0.5 }}>Or sign in with</Text>
            </View>
            <View style={{ marginHorizontal: 60, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={styles.item_social}>
                    <FontAwesome name='google' size={22} color={'blue'} />
                </View>
                <View style={styles.item_social}>
                    <FontAwesome name='facebook' size={22} color={'blue'} />
                </View>
                <View style={styles.item_social}>
                    <FontAwesome name='twitter' size={22} color={'blue'} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red',
        // alignItems:'center',

    },
    wrapper_img_icon: {
        flex: 0.8,
        // backgroundColor:'yellow', 
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    img_icon: {
        width: 180,
        height: 180,
    },
    text_wcb: {
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 0.8
    },
    text_login: {
        fontSize: 15,
        letterSpacing: 0.2,
        opacity: 0.5
    },
    item_social: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
        width: 80,
        elevation: 10,
        borderRadius: 10
    },
    wrapper_input_icon: {
        flexDirection: 'row',
        marginHorizontal: 60,
        justifyContent: 'space-between'
    },
    wrapper_icon: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        zIndex: 1,
        width: 65,
        height: 65,
        elevation: 10,
        shadowColor: 'blue',
        backgroundColor: 'white',
    },
    wrapper_input: {
        flex: 0.9,
        borderRadius: 50,
        marginLeft: -40,
        height: 50,
        alignSelf: 'center',
        elevation: 10,
        backgroundColor: 'white',
        paddingHorizontal: 30
    }
})