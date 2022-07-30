import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import HeaderComponent from '../../components/Header/HeaderComponent'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import CartItem from '../../components/BillingDetails/CartItem'

const BillingDetailsScreen = () => {
  const width = Dimensions.get('window').width
  const route = useRoute()
  const Item = [
    {
      id: 1,
      name: 'Dress',
      price: 25,
      size: 'S',
      qty: 1,
    },
    {
      id: 2,
      name: 'Dress 2',
      price: 250,
      size: 'L',
      qty: 1,
    },
    {
      id: 3,
      name: 'Dress 3',
      price: 25,
      size: 'S',
      qty: 1,
    },
    {
      id: 4,
      name: 'Dress 4',
      price: 250,
      size: 'L',
      qty: 1,
    },
    {
      id: 5,
      name: 'Dress 5',
      price: 25,
      size: 'S',
      qty: 1,
    },
    {
      id: 6,
      name: 'Dress 6',
      price: 250,
      size: 'L',
      qty: 1,
    },
  ];
  const renderItem = item => {
    return <CartItem item={item.item} />;
  };
  const listHeader = () => {
    return <View style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
      <Text style={{ color: 'white', paddingVertical: 20, fontSize: 18, fontWeight: 'bold' }}>Your Order</Text>
    </View>
  }
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {/* header */}
        <HeaderComponent routeName={route.name} />
        {/*  */}
        <View style={{ flex: 1, }}>
          {/*  */}
          <View
            style={{
              flex: 1,
            }}>
            <FlatList
              data={Item}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={listHeader}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: 15, marginTop: 10, backgroundColor: 'white', elevation: 5, borderRadius:5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginLeft: 15, alignSelf: 'center' }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>SHIPPING AND HANDING</Text>
            </View>
            <View style={{ marginRight: 15, backgroundColor: 'green', marginVertical: 15, borderRadius: 5 }}>
              <Text style={{ color: 'white', paddingHorizontal: 30, paddingVertical: 10, fontSize: 10 }}>FREE SHIPPING</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              borderBottomWidth: 1,
              marginHorizontal: 15,
            }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginLeft: 15, alignSelf: 'center' }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>ORDER TOTAL</Text>
            </View>
            <View style={{ margin: 15}}>
              <Text style={{ color: 'red', }}>$ 327.00</Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 15, marginVertical:15, backgroundColor: 'black'}}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white', paddingVertical:15, fontSize:18}}>SELECT A PAY METHOD</Text>
          </View>
        </View>

      </SafeAreaView>
    </>
  )
}

export default BillingDetailsScreen