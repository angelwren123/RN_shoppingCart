import AsyncStorage from "@react-native-async-storage/async-storage"
export const setStorage = async (products) => {
    return await AsyncStorage.setItem('CART', JSON.stringify(products))
}