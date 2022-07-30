import * as Types from '../constants/constants';


export const actLoadDataCart = (product) => {
    return {
        type: Types.LOAD_DATA_CART,
        payload:product
    }
}

export const actLoadDataCartSuccess = (product) => {
    return {
        type: Types.LOAD_DATA_CART_SUCCESS,
        payload: product
    }
}

export const actAddToCart = (product, color) => {
    return {
        type: Types.ADD_TO_CART,
        payload: {
            product,
            color
        },
    };
};

export const actAddToCartSuccess = (product) => {
    return {
        type: Types.ADD_TO_CART_SUCCESS,
        payload: {
            product,
        },
    };
};

export const actDeleteItemCart = (product) => {
    return {
        type: Types.DELETE_ITEM_CART,
        payload:product
    }
}

export const actDeleteItemCartSuccess = (product) => {
    return {
        type: Types.DELETE_ITEM_CART_SUCCESS,
        payload:product
    }
}

export const actIncreaseItemCart = (product) => {
    return {
        type: Types.INCREASE_ITEM_CART,
        payload:product
    }
}

export const actIncreaseItemCartSuccess = (product) => {
    return {
        type: Types.INCREASE_ITEM_CART_SUCCESS,
        payload:product
    }
}

export const actDecreaseItemCart = (product) => {
    return {
        type: Types.DECREASE_ITEM_CART,
        payload:product
    }
}

export const actDecreaseItemCartSuccess = (product) => {
    return {
        type: Types.DECREASE_ITEM_CART_SUCCESS,
        payload:product
    }
}

export const actSetDataNotification = (data) => {
    return {
        type:'SET_DATA_NOTIFICATION',
        payload:data
    }
}

export const actDeleteDataNotification = (id) => {
    return {
        type:'DELETE_DATA_NOTIFICATION',
        payload:id
    }
}

export const actLogin = (username,password) => {
    return {
        type:'LOGIN',
        payload:{
            username,
            password
        }
    }
}

export const actRegister = (username,email, password) => {
    return {
        type:'REGISTER',
        payload:{
            username,
            email,
            password
        }
    }
}

