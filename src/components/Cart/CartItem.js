import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Image,Pressable, TouchableOpacity } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler';
const CartItem = (props) => {
  const { item } = props

  const leftSwipeToDelete = () => {
      return <TouchableOpacity style={{backgroundColor:'black', width:120, justifyContent:'center', alignItems:'center'}} onPress={()=>props?.handleDelete(item)}>
        <View style={{backgroundColor:'black', width:120, height:100+'%', justifyContent:'center', alignItems:'center'}}>
        <Text><MaterialCommunityIcons name='trash-can-outline' size={28} color={'white'} /></Text>
      </View>
      </TouchableOpacity>
  }
  return (

    <View style={{ borderRadius: 5, backgroundColor: 'white', marginHorizontal: 18, marginVertical: 8, shadowColor: 'black', elevation: 10 }}>
      {/* <Swipeout left={swipeoutBtns} buttonWidth={150}> */}
      <Swipeable renderLeftActions={leftSwipeToDelete} >
      <View style={{ paddingHorizontal: 25, paddingVertical: 13, backgroundColor:'white'}}>
        <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignSelf: 'center' }}>
            <Image source={{ uri: `${item?.images}` }}
              style={{ width: 60, height: 60, borderRadius: 50 }} />
          </View>
          <View style={{ flex: 3 }}>
            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item?.title}</Text>
              </View>
              {/* <View style={{flexDirection:'row', marginTop:5}}>
                <Text>Color: </Text><Text style={{backgroundColor:`${item.color}`, width: 20, height: 20, borderRadius: 2, marginHorizontal: 8}}></Text>
              </View> */}
              <View style={{ marginTop: 10 }}>
                <Text>${item?.price}.00</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, alignSelf: 'center' }}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Text style={{ alignSelf: 'center' }}>{item?.quantity}</Text>
              <View style={{ alignSelf: 'center' }}>
                <MaterialCommunityIcons name="chevron-up" size={28} color="black" onPress={()=>props?.handleIncreaseItem(item)} />
                <MaterialCommunityIcons name="chevron-down" size={28} color="black" onPress={()=>props?.handleDecreaseItem(item)} />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* </Swipeout> */}
      </Swipeable>
    </View>
  )
}

export default CartItem
