import React from 'react';
import { View, Text, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import NotificationItemComponent from './NotificationItemComponent'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function ContentNotificationComponent() {
    // console.log(props);
    const dataNotification = useSelector(state => state.notificationReducer)
    const renderItem = item => {
        return <NotificationItemComponent item={item.item} />
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dataNotification}
                renderItem={renderItem}
                keyExtractor={(item, idx) => item.id}
                style={{ elevation: 10, width: 95 + '%' }}
                showsVerticalScrollIndicator={false}
                
            />
            
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // flex:1,
        maxHeight: height / 2,
        backgroundColor: 'violet',
        position: 'absolute',
        // top:2,
        right: 2,
        left: 2,
        zIndex: 100,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10

    },
})
