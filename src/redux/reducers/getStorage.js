import AsyncStorage from "@react-native-async-storage/async-storage"
export const getStorage = async () => {
   const dataString = await AsyncStorage.getItem('CART')
   const data = JSON.parse(dataString)
   return data;
}