import React from 'react'
import { Text, View, SafeAreaView, FlatList, DrawerLayoutAndroid, TextInput, TouchableOpacity, Animated, Dimensions, Modal, StatusBar } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartItem from '../../components/Cart/CartItem';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProductItem from '../../components/Products/ProductItem';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderComponent from '../../components/Header/HeaderComponent';
import FilterComponent from '../../components/WomanDress/FilterComponent';
const WomanDressesScreen = (props) => {
    const route= useRoute()

    const [modalVisible, setModalVisible] = React.useState(false);
    
    const drawer = React.useRef(null);

    const [sizeXXS, setSizeXXS] = React.useState(false);
    const [sizeXS, setSizeXS] = React.useState(false);
    const [sizeS, setSizeS] = React.useState(false);
    const [sizeM, setSizeM] = React.useState(false);
    const [sizeL, setSizeL] = React.useState(false);
    const [sizeXL, setSizeXL] = React.useState(false);
    const [sizeXXL, setSizeXXL] = React.useState(false);
    const [size3XL, setSize3XL] = React.useState(false);

    const [menu, setMenu] = React.useState(false)

    const [value, setValue] = React.useState([48, 677]);

    const [text, setOnChangeText] = React.useState('');

    const [dataFilters, setDataFilters] = React.useState(['spring'])
    
    const deleteFilter = (dataFilter, idx) => {
        const newDataFilters = [...dataFilters]
        dataFilters.forEach((filter, index) => {
            if (index === idx) {
                newDataFilters.splice(index, 1)
            }
        })
        setDataFilters(newDataFilters)
        switch (dataFilter) {
            case 'size: xxs':
                setSizeXXS(false)
                break;
            case 'size: xs':
                setSizeXS(false)
                break;
            default:
                break;
        }
    }
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
    
    // const navigationView = () => {
    //     return <DrawerFilterComponent dataFilters={dataFilters} setDataFilters={setDataFilters} />
    // };
    const changeModalVisibility = (bool) => {
        setModalVisible(bool)
    }
    const renderItem = item => {
        return <CartItem item={item.item} />;
    };
    const toggleDrawer = () => {
        // drawer.current.openDrawer();
        setModalVisible(true)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition={'right'}
                renderNavigationView={navigationView}
                drawerBackgroundColor="white"
            > */}
            <StatusBar 
                hidden={true}
                
            />
                <HeaderComponent routeName = {route.name} toggleDrawer={toggleDrawer} menuWD = {menu} />
                <View style={{ flex: 1 }}>
                    
                    <View style={{ backgroundColor: menu ? "#404f50" : '#85c9e8', zIndex: 98 }}>
                        <View style={{ marginVertical: 12, position: 'relative' }}>
                            <TouchableWithoutFeedback onPress={() => {
                                setMenu(!menu)
                            }} style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ color: 'white', fontWeight: '600', marginLeft: 20, }}>Casual Dresses</Text>
                                {!menu ? (<MaterialCommunityIcons name='chevron-right' size={20} color={'white'} style={{ marginRight: 20, }} />) : <MaterialCommunityIcons name='chevron-down' size={20} color={'white'} style={{ marginRight: 20, }} />}
                            </TouchableWithoutFeedback>
                            {menu && (
                                <View style={{ paddingBottom: 15, position: 'absolute', right: 0, left: 0, top: 30, backgroundColor: '#404f50' }}>
                                    <View style={{ backgroundColor: '#282c34', marginHorizontal: 20, marginVertical: 3, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ color: 'white', paddingVertical: 10 }}>Shirt Dresses</Text>
                                    </View>
                                    <View style={{ backgroundColor: '#282c34', marginHorizontal: 20, marginVertical: 3, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ color: 'white', paddingVertical: 10 }}>Work Dresses</Text>
                                    </View>
                                    <View style={{ backgroundColor: '#282c34', marginHorizontal: 20, marginVertical: 3, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ color: 'white', paddingVertical: 10 }}>Cocktail Dresses</Text>
                                    </View>
                                    <View style={{ backgroundColor: '#282c34', marginHorizontal: 20, marginVertical: 3, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ color: 'white', paddingVertical: 10 }}>Maxi Dresses</Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
                    <View
                        style={{
                            height: 55,
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            borderBottomWidth: 1,
                            borderColor: 'gray',

                        }}>
                        <MaterialIcons
                            name="search"
                            size={25}
                            color="gray"
                            style={{ marginHorizontal: 15, alignSelf: 'center', flex: 1 }}
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
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', }}>
                        {dataFilters.map((filter, idx) => {
                            return <View key={idx} style={{ backgroundColor: '#9cb4cc', marginHorizontal: 10, marginVertical: 15, width: 80, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 5, position: 'relative' }}>
                                <TouchableOpacity onPress={() => { deleteFilter(filter, idx) }} style={{ position: 'absolute', top: -5, right: -5, width: 18, height: 18, backgroundColor: 'black', borderRadius: 50 }} >
                                    <FontAwesome5 name='times' color={'white'} style={{ position: 'absolute', top: 3, right: 5, color: 'white' }} />
                                </TouchableOpacity>
                                <Text style={{ textTransform: 'uppercase', fontSize: 12, color: 'white', flexDirection: 'row', fontWeight: '700' }}>{filter}</Text>
                            </View>
                        })}
                    </View>
                    <View style={{ flex: 1, }}>
                        <FlatList
                            data={data}
                            renderItem={renderProduct}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            numColumns={2}

                        />
                    </View>
                </View>

            {/* </DrawerLayoutAndroid> */}
            {/* modal */}
            <Modal
               animationType="none"
               transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    changeModalVisibility(false);
                }}
                style={{flex:1}}
                statusBarTranslucent={false}
            >
                <FilterComponent changeModalVisibility={changeModalVisibility} dataFilters={dataFilters} setDataFilters={setDataFilters} />
            </Modal>

        </SafeAreaView>
    )
}

export default WomanDressesScreen
