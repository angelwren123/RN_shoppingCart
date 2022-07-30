import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderIcon from '../../components/Header/HeaderIcon';
import CartItem from '../../components/Cart/CartItem';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Man from './Man';
import Woman from './Woman';
import All from './All';
import Kid from './Kid';
import HeaderComponent from '../../components/Header/HeaderComponent';

const Tab = createMaterialTopTabNavigator();
const OurAdvice = () => {
  const route = useRoute()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* header */}
      <HeaderComponent routeName={route.name} />
      {/* body */}
      <View style={{ flex: 1 }}>
        <Tab.Navigator screenOptions={{
          tabBarLabelStyle: { fontSize: 12, fontWeight: '800', color: 'white' },
          tabBarStyle: {
            backgroundColor: '#85c9e8',
            elevation: 0,
          },
          tabBarIndicatorStyle: {
            borderBottomWidth: 5,
            borderColor: 'white'
          }
        }}
          style={{ backgroundColor: '#85c9e8', elevation: 0 }}
        >
          <Tab.Screen name="All" component={All} />
          <Tab.Screen name="Man" component={Man} />
          <Tab.Screen name="Woman" component={Woman} />
          <Tab.Screen name="Kid" component={Kid} />
        </Tab.Navigator>
      </View>

    </SafeAreaView>
  )
}

export default OurAdvice