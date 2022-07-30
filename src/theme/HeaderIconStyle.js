import {
    StyleSheet
} from 'react-native';
const HeaderIconStyle = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    container__cart:{
        flexDirection: 'row'
    },
    cart__view:{
        position: 'absolute',
        top: 0,
        right: 2,
        borderColor: '#FF3D00',
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: 'red',
        width: 18,
        height: 18
    },
    cart__view__text:{
        position: 'absolute', 
        top: -1, 
        right: 1, 
        color: 'white', 
        fontSize: 12
    },
    icon:{
        marginHorizontal:5,
    },
    icon__tag:{
        transform: [
            { rotateZ: "90deg" }
          ]
    }
});
export default HeaderIconStyle;