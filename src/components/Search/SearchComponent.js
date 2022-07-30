import React from 'react'
import { View,TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const SearchComponent = () => {
    const [text, setOnChangeText] = React.useState('');
  return (
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
  </View>
  )
}

export default SearchComponent