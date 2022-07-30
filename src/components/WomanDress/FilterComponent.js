import React from 'react'
import { Text, View, SafeAreaView, FlatList, DrawerLayoutAndroid, TextInput, TouchableOpacity, Animated, Dimensions, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Style from '../../theme';
import BrandComponent from './BrandComponent';
import OccasionComponent from './OccasionComponent';
import ColourComponent from './ColourComponent';
import PriceComponent from './PriceComponent';
import SizeComponent from './SizeComponent';
const FilterComponent = (props) => {
    const { dataFilters, setDataFilters,changeModalVisibility } = props
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', margin:30 }}
        showsVerticalScrollIndicator={false}>
            <View style={{ padding: 15, backgroundColor: 'black', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 15 }}>Filters</Text>
                <MaterialCommunityIcons name='close' size={28} style={[Style.HeaderIconStyle.icon, Style.HeaderIconStyle.icon__tag, { color: 'white', transform: [{ rotateZ: "180deg" }] }]}
                    onPress={() => changeModalVisibility(false)} />
            </View>
            <View style={{ marginVertical: 20, marginHorizontal: 25, backgroundColor: '#dcdcdc', }}>
                <BrandComponent />
            </View>
            <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
                <ColourComponent />
            </View>
            <View style={{ marginVertical: 5, marginHorizontal: 25 }}>
                <PriceComponent />
            </View>
            <View style={{ marginVertical: 30, marginHorizontal: 25, }}>
                <SizeComponent dataFilters={dataFilters} setDataFilters={setDataFilters} />
            </View>
            <View style={{ marginHorizontal: 25, backgroundColor: '#dcdcdc',marginBottom:15 }}>
                <OccasionComponent dataFilters={dataFilters} setDataFilters={setDataFilters} />
            </View>
        </ScrollView>

    )
}

export default FilterComponent