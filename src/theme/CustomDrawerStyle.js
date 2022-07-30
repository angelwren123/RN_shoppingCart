import {
    StyleSheet
} from 'react-native';
const CustomDrawerStyle = StyleSheet.create({
    DrawerItem__View: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    DrawerItem__View__Text: {
        fontSize: 12,
        fontWeight: '500',
        color: 'black',
        alignSelf:'center'
    },
    DrawerItem__View__Icon: {
        marginRight: -30,
    },
    Types__View: {
        flexDirection: 'column',
        marginLeft: 100
    },
    Types__View__Text: {
        marginBottom: 18,
        fontSize: 12
    },
    border: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 15,
        opacity: 0.5,
        marginHorizontal:20
    }
});
export default CustomDrawerStyle;