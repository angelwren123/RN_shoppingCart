import { ofType } from "redux-observable"
import { mergeMap } from "rxjs";
import * as Types from '../constants/constants';
import { actAddToCartSuccess, actDecreaseItemCartSuccess, actDeleteItemCartSuccess, actIncreaseItemCartSuccess, actLoadDataCartSuccess } from "../actions/ActionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

// load
export const cartEpic = action$ => action$.pipe(
    ofType(Types.LOAD_DATA_CART),
    mergeMap(async action => {
        try {
            // map(res=>console.log(res))
            const cartString = await AsyncStorage.getItem('CART')
            const cart = JSON.parse(cartString)
            if (cart !== undefined || cart !== null)
                return actLoadDataCartSuccess(cart)
            else { console.log(cart) }
        } catch (error) {
            console.log(error.message);
        }
    })

)
// add

export const addToCartEpic = action$ => action$.pipe(
    ofType(Types.ADD_TO_CART),
    mergeMap(async action => {
        try {
            const newProduct = {
                id: action.payload.product.id,
                name: action.payload.product.name,
                price: action.payload.product.price,
                img: action.payload.product.img,
                color: action.payload.color,
                quantity: 0
            }
            const cartString = await AsyncStorage.getItem('CART')
            const cart = JSON.parse(cartString)
            var flag = false;
            if (cart === null || cart.length === 0) {
                flag = false;
            } else {
                cart.forEach((product, idx) => {
                    if (newProduct.id === product.id && newProduct.color === product.color) {
                        flag = true
                    }
                })
            }

            if (!flag) {
                newProduct.quantity = 1
                cart.push(newProduct)
            } else {
                cart.forEach((product, idx) => {
                    if (product.id === newProduct.id && newProduct.color === product.color) {
                        product.quantity += 1
                    }
                })
            }

            await AsyncStorage.setItem('CART', JSON.stringify([...cart]))

            return actAddToCartSuccess(newProduct)
        } catch (error) {
            console.log(error.message);
        }
    })
)

// delete
export const deleteItemCartEpic = action$ => action$.pipe(
    ofType(Types.DELETE_ITEM_CART),
    mergeMap(async action => {
        try {
            console.log(action);
            const cartString = await AsyncStorage.getItem('CART')
            const cart = JSON.parse(cartString)
            cart.forEach((product, idx) => {
                if (product.id === action.payload.id && product.color === action.payload.color) {
                    cart.splice(idx, 1);
                }
            })
            await AsyncStorage.setItem('CART', JSON.stringify([...cart]))
            return actDeleteItemCartSuccess(action.payload)
        } catch (error) {
            console.log(error.message);
        }
    })
)

// increase
export const increaseItemCartEpic = action$ => action$.pipe(
    ofType(Types.INCREASE_ITEM_CART),
    mergeMap(async action => {
        try {
            const cartString = await AsyncStorage.getItem('CART')
            const cart = JSON.parse(cartString)
            cart.forEach((product, idx) => {
                if (product.id === action.payload.id && product.color === action.payload.color && product.quantity < 99) {
                    product.quantity += 1;
                }
            })
            await AsyncStorage.setItem('CART', JSON.stringify([...cart]))
            return actIncreaseItemCartSuccess(action.payload)
        } catch (error) {
            console.log(error.message);
        }
    })
)

// decrease

export const decreaseItemCartEpic = action$ => action$.pipe(
    ofType(Types.DECREASE_ITEM_CART),
    mergeMap(async action => {
        try {
            const cartString = await AsyncStorage.getItem('CART')
            const cart = JSON.parse(cartString)
            cart.forEach((product, idx) => {
                if (product.id === action.payload.id && product.color === action.payload.color && product.quantity > 1) {
                    product.quantity -= 1;
                }
            })
            await AsyncStorage.setItem('CART', JSON.stringify([...cart]))
            return actDecreaseItemCartSuccess(action.payload)
        } catch (error) {
            console.log(error.message);
        }
    })
)