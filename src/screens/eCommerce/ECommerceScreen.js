import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  TextInput,
  Animated,

} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderIcon from '../../components/Header/HeaderIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartItem from '../../components/Cart/CartItem';
import ProductItem from '../../components/Products/ProductItem';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../components/Header/HeaderComponent';
import { useRoute } from '@react-navigation/native';
import HeaderTag from '../../components/Header/HeaderTag';
import SearchComponent from '../../components/Search/SearchComponent';
import ContentNotificationComponent from '../../components/Notification/ContentNotificationComponent';
import { FlatGrid } from 'react-native-super-grid';
const listHeader = () => {
  const navi = useNavigation()
  return <><ImageBackground
    source={require('../../assets/bg.jpg')}
    style={{
      height: 180,
      width: Dimensions.get('window').width,
      flexDirection: 'row',
      resizeMode: 'cover',
      justifyContent: 'flex-end',
      borderBottomWidth: 1,
      shadowColor: 'black',
      // elevation: 1,
    }}
  >
    <View
      style={{ position: 'absolute', bottom: 15, right: 35, flex: 1 }}>
      <Text
        style={{
          backgroundColor: 'orange',
          color: 'white',
          paddingHorizontal: 22,
          paddingVertical: 15,
          fontSize: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'orange',
          shadowColor: 'black',
        }}
        onPress={() => navi.navigate('OurAdvice')}
      >
        DISCOVER
      </Text>
    </View>
  </ImageBackground>

    {/* search */}
    <SearchComponent />
    <View
      style={{
        backgroundColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 170,
        opacity: 1,
      }}
    />
    <View
      style={{
        flexDirection: 'row',
        color: 'black',
        alignSelf: 'center',
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '800',
          letterSpacing: 1.3,
          paddingVertical: 10,
          color: 'black',
        }}>
        OUR POPULAR PRODUCTS
      </Text>
    </View>
    <View
      style={{
        backgroundColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 170,
        opacity: 1,
      }}
    />
  </>
}



const ECommerceScreen = (props) => {


  const { width, height } = Dimensions.get('window');
  // console.log(height);
  const route = useRoute();
  const [toggleTag, setToggleTag] = React.useState(false);
  const tag = () => {
    setToggleTag(!toggleTag)
  }
  const data = [
    {
      id: 1,
      title: 'Nike 1',
      images: ['https://i.imgur.com/5zQ2Y5m.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg'],
      price: 321,
      description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors: ['red', 'brown', 'violet']
    },
    {
      id: 2,
      title: 'Nike 2',
      images: ['https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg', 'https://i.imgur.com/nDSI1rU.jpg'],
      price: 322,
      description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors: ['red', 'brown', 'violet']
    },
    {
      id: 3,
      title: 'Nike 3',
      images: ['https://i.imgur.com/fgb5TPg.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg'],
      price: 323,
      description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors: ['red', 'brown', 'violet']
    },
    {
      id: 4,
      title: 'Nike 4',
      images: ['https://i.imgur.com/nDSI1rU.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/5zQ2Y5m.jpg'],
      price: 324,
      description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors: ['red', 'brown', 'violet']
    },
    {
      id: 5,
      title: 'Nike 5',
      images: ['https://i.imgur.com/5zQ2Y5m.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg'],
      price: 321,
      description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors: ['red', 'brown', 'violet']
    },
    {
      id: 6,
      title: 'Nike 6',
      images: ['https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg', 'https://i.imgur.com/nDSI1rU.jpg'],
      price: 322,
      description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors: ['red', 'brown', 'violet']
    },
    {
      id: 7,
      title: 'Nike 7',
      images: ['https://i.imgur.com/fgb5TPg.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/fgb5TPg.jpg'],
      price: 323,
      description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors: ['red', 'brown', 'violet']
    },
    {
      id: 8,
      title: 'Nike 8',
      images: ['https://i.imgur.com/nDSI1rU.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/5zQ2Y5m.jpg'],
      price: 324,
      description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors: ['red', 'brown', 'violet'],
    },
    {
      id: 9,
      title: 'Nike 9',
      images: ['https://i.imgur.com/nDSI1rU.jpg', 'https://i.imgur.com/JKmP8R8.jpg', 'https://i.imgur.com/5zQ2Y5m.jpg'],
      price: 324,
      description: 'What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors: ['red', 'brown', 'violet']
    }
  ];
  const renderProduct = item => {
    return <><ProductItem item={item.item} /></>;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* header */}
      <ContentNotificationComponent contentNotification={props?.contentNotification} />
      <HeaderComponent routeName={route.name} tag={tag} toggleTag={toggleTag} />
      <View
        style={{
          flex: 1,
        }}>

        {/* tag */}
        {toggleTag && (
          <HeaderTag toggleTag={toggleTag} />
        )}
        <View style={{ flex: 1 }}>
          <View style={{
            flex: 1,
            // marginTop:-10
          }}>
            <FlatList
              data={data}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{ justifyContent: 'space-between' }}//,
              numColumns={2}
              // initialNumToRender={2}
              // onMomentumScrollBegin={(e)=>onMomentumScrollBegin(e)}
              ListHeaderComponent={listHeader}
            />
            {/* <FlatGrid
              ListHeaderComponent={listHeader}
              keyExtractor={item => item.id}
              itemDimension={120}
              data={data}
              renderItem={renderProduct}
              showsVerticalScrollIndicator={false}
              initialNumToRender={4}
              // style={{marginTop:-10}}
            /> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ECommerceScreen;
