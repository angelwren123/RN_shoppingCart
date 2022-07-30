import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Animated, SafeAreaView, FlatList, Dimensions, input } from 'react-native'
import CartItem from '../../components/Cart/CartItem';
import HeaderComponent from '../../components/Header/HeaderComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { actDecreaseItemCart, actDeleteItemCart, actIncreaseItemCart } from '../../redux/actions/ActionTypes';



const CartScreen = () => {
  const dispatch = useDispatch()
    const route = useRoute();
    const navigation = useNavigation()
    const item = useSelector(state=>state.cart2Reducer)
    // console.log(item);
    const handleDelete = (product)=>{
      dispatch(actDeleteItemCart(product))
    }
    const handleIncreaseItem = (product)=>{
      dispatch(actIncreaseItemCart(product))
    }
    const handleDecreaseItem = (product)=>{
      dispatch(actDecreaseItemCart(product))
    }
    const renderItem = item => {
      return <CartItem item={item.item} handleDelete={handleDelete} handleIncreaseItem={handleIncreaseItem} handleDecreaseItem={handleDecreaseItem} />;
    };
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderComponent routeName={route.name} />
        <View
          style={{
            flex: 1,
            backgroundColor: '#85c9e8',
          }}>
          <FlatList
            data={item}
            renderItem={renderItem}
            keyExtractor={(item,idx) => idx}
            style={{ elevation: 10 }}
            showsVerticalScrollIndicator={false}
          />

          <View style={{ marginHorizontal: 18, marginVertical: 10 }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 20,
                alignSelf: 'center',
              }}>
              $ 327.00
            </Text>

            <TouchableOpacity onPress={()=>navigation.navigate('Checkout')}>
            <View style={{ marginHorizontal: 18, marginVertical: 10 }}>
              <Text
                style={{
                  borderRadius: 5,
                  fontWeight: 'bold',
                  padding: 15,
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: 15,
                  alignSelf: 'center',
                }}>
                PROCEED TO CHECKOUT
              </Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default CartScreen
