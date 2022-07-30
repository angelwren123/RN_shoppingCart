import React from 'react'
import { View, Text, Image, } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
const CartItem = () => {
  return (
    <>
                <View style={{ paddingHorizontal: 25, paddingVertical: 20, backgroundColor: 'white', marginHorizontal: 15, marginBottom:15, elevation:5, borderRadius:5 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignSelf: 'center',marginHorizontal:10 }}>
                      <Image source={{ uri: 'https://i.imgur.com/32tC6qg.png' }}
                        style={{ width: 60, height: 60, borderRadius: 50 }} />
                    </View>
                    <View style={{ flex: 3, justifyContent:'center' }}>
                      <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <View style={{}}>
                          <Text style={{ fontWeight: 'bold', fontSize: 18, color:'black' }}>Muffin Dress</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <View style={{ backgroundColor: '#d3cedf', height:25, width:60, justifyContent:'center', alignItems:'center' }}>
                            <Text style={{paddingHorizontal:5, paddingVertical:2}}>SIZE: S</Text>
                          </View>
                          <View style={{ backgroundColor: '#d3cedf',height:25, width:60, justifyContent:'center', alignItems:'center', marginLeft:10 }}>
                            <Text style={{paddingHorizontal:5, paddingVertical:2}}>x1</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{ flex: 1,justifyContent:'center', alignItems:'center' }}>
                        <Text>$25.00</Text>   
                    </View>
                  </View>
                  <View style={{position:'absolute', right:10,top:10}}>
                    <Fontisto name='close-a' />
                  </View>
                </View>
    </>
  )
}

export default CartItem