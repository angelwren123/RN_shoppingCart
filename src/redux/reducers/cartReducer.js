
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Types from '../constants/constants'


const InitialState = []
const cartReducer = (state = InitialState, action) => {
    // console.log(state);
    switch (action.type) {
        case Types.LOAD_DATA_CART:

            return [...state]

        case Types.LOAD_DATA_CART_SUCCESS:

            return [...action.payload]

        case Types.ADD_TO_CART:

            return [...state]

        case Types.ADD_TO_CART_SUCCESS:
            const cart = [...state]

            var flag = false;
            if (cart === null || cart.length === 0) {
                flag = false;
            } else {
                cart.forEach((product, idx) => {
                    if (action.payload.product.id === product.id && action.payload.product.color === product.color) {
                        flag = true
                    }
                })
            }

            if (!flag) {
                action.payload.product.quantity = 1
                cart.push(action.payload.product)
            } else {
                cart.forEach((product, idx) => {
                    if (product.id === action.payload.product.id && action.payload.product.color === product.color) {
                        product.quantity += 1
                    }
                })
            }
            return [...cart]

        case Types.DELETE_ITEM_CART:

            return [...state]

        case Types.DELETE_ITEM_CART_SUCCESS:

            const cart2 = [...state]
            cart2.forEach((product, idx) => {
                if (product.id === action.payload.id && product.color === action.payload.color) {
                    cart2.splice(idx, 1);
                }
            })
            return [...cart2]

        case Types.INCREASE_ITEM_CART:

            return [...state]

        case Types.INCREASE_ITEM_CART_SUCCESS:
            const cart3 = [...state]
            cart3.forEach((product, idx) => {
                if (product.id === action.payload.id && product.color === action.payload.color && product.quantity < 99) {
                    product.quantity += 1
                }
            })
            return [...cart3]

        case Types.DECREASE_ITEM_CART:
            return [...state]

        case Types.DECREASE_ITEM_CART_SUCCESS:
            const cart4 = [...state]
            cart4.forEach((product, idx) => {
                if (product.id === action.payload.id && product.color === action.payload.color && product.quantity > 1) {
                    product.quantity -= 1
                }
            })
            return [...cart4]
        default:
            return state
    }
}
export default cartReducer


