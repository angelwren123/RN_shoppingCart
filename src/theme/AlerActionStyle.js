import {
    StyleSheet
} from 'react-native';
const AlertActionStyle = StyleSheet.create({
    container:{
        backgroundColor: '#282c34',
        padding: 10 
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        paddingVertical: 10,
        marginHorizontal:5
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    btn__man:{
        flex:1
    },
    btn__woman:{
        flex:1
    },
    View__Warraper__btn:{
        flexDirection: 'row',
        alignSelf:'center',
        marginBottom: 5
    },
    Text__ylk:{
        color: 'white',
        marginVertical: 15,
        fontSize:15,
        marginLeft:5
    }

});
export default AlertActionStyle;