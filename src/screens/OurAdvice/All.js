import React from 'react'
import { View, TextInput, SafeAreaView, Image, ImageBackground, ScrollView, Dimensions, Text,FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProductItem from '../../components/Products/ProductItem';
const All = () => {
  const [text, setOnChangeText] = React.useState('');
  const data = [
    {
      id: 1,
      title: 'Nike 1',
      images: ['https://i.imgur.com/5zQ2Y5m.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg'],
      price: 321,
      description:'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors:['red', 'brown', 'violet']
    },
    {
      id: 2,
      title: 'Nike 2',
      images: ['https://i.imgur.com/JKmP8R8.jpg','https://i.imgur.com/fgb5TPg.jpg','https://i.imgur.com/nDSI1rU.jpg'],
      price: 322,
      description:'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors:['red', 'brown', 'violet']
    },
    {
      id: 3,
      title: 'Nike 3',
      images: ['https://i.imgur.com/fgb5TPg.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg'],
      price: 323,
      description:'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors:['red', 'brown', 'violet']
    },
    {
      id: 4,
      title: 'Nike 4',
      images: ['https://i.imgur.com/nDSI1rU.jpg','https://i.imgur.com/JKmP8R8.jpg','https://i.imgur.com/5zQ2Y5m.jpg'],
      price: 324,
      description:'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors:['red', 'brown', 'violet']
    },
  ];
  const renderProduct = item => {
    return <ProductItem item={item.item} />;
  };
  const headerComponent = () => {
    return <><ImageBackground source={require('../../assets/bg2.jpg')} style={{ width: 100+'%', height:180 }}>
        
    </ImageBackground>    

  <ImageBackground source={require('../../assets/bg.jpg')} style={{ width: 100+'%', height:180, marginTop:-1 }}>
        
  </ImageBackground>    
  {/* </View> */}
  <View
      style={{
        height: 50,
        marginVertical: 20,
        marginHorizontal: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,

      }}>
      <MaterialIcons
        name="search"
        size={25}
        color="gray"
        style={{ marginHorizontal: 25, alignSelf: 'center', flex: 1 }}
      />
      <TextInput
        style={{
          height: 40,
          paddingHorizontal: 10,
          alignSelf: 'center',
          color: 'black',
          flex: 15,
          fontSize: 15,
        }}
        placeholder="Search a item..."
        value={text}
        onChangeText={event => {
          setOnChangeText(event);
        }}
      />
    </View></>
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
        
          <SafeAreaView style={{
            flex: 1,
            // marginTop:10
          }}>
            <FlatList
              data={data}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              numColumns={2}
              ListHeaderComponent={headerComponent}
              
            />
          </SafeAreaView>
    </SafeAreaView>
  )
}

export default All