import React from 'react';
import { View, Text, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux';
import { actDeleteDataNotification } from '../../redux/actions/ActionTypes';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function NotificationItemComponent(props) {
    const dispatch = useDispatch()
  const  deleteDataNotification = (id) => {
    console.log(id);
    dispatch(actDeleteDataNotification(id))
  }

  return (
    <View key={props?.item?.id} style={{flex:1, backgroundColor:'white', borderRadius:10,  padding:5, marginVertical:3}}>
        <View style={{flexDirection:'row',  justifyContent:'space-between',padding:5 }}>
            <View style={{}}>
                <AntDesign name='message1' size={18} color={'black'} />
            </View>
            <View style={{ }}>
                <Text style={{ fontSize:15 }}>MESSAGE</Text>
            </View>
            <TouchableOpacity style={{}} onPress={()=>deleteDataNotification(props?.item?.id)}>
                <FontAwesome5 name='times' size={18} color={'black'} />
            </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal:15}}>
            <View style={{ padding:3}}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>{props?.item?.title}</Text>
            </View>
            <View style={{ height:50, padding:5}}>
                <Text>{props?.item?.body}</Text>
            </View>
        </View>
        
    </View>
  );
}
