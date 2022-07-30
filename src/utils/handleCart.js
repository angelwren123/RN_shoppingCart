export const handleAddToCart = (cartState,newProduct) => {
    var flag = false;
            if (cartState === null || cartState.length === 0) {
                flag = false;
            } else {
                cartState.forEach((product, idx) => {
                    if (newProduct.id === product.id ) {
                        flag = true
                    }
                })
            }
            if (!flag) {
                newProduct.quantity = 1
                cartState.push(newProduct)
            } else {
                cartState.forEach((product, idx) => {
                    if (product.id === newProduct.id ) {
                        // && newProduct.color === product.color
                        product.quantity += 1
                    }
                })
            }
    return cartState
}

export const handleDeleteItemCart = (cartState,productDelete)=>{
    cartState.forEach((product, idx) => {
        if (product.id === productDelete.id && product.color === productDelete.color) {
            cartState.splice(idx, 1);
        }
    })
    return cartState
}

export const handleIncreaseItemCart = (cartState, productIncrease) => {
    cartState.forEach((product, idx) => {
        if (product.id === productIncrease.id && product.color === productIncrease.color && product.quantity < 99) {
            product.quantity += 1;
        }
    })
    return cartState
}

export const handleDecreaseItemCart = (cartState, productDecrease) => {
    cartState.forEach((product, idx) => {
        if (product.id === productDecrease.id && product.color === productDecrease.color ) {
            if(product.quantity <= 1){
                handleDeleteItemCart(cartState, productDecrease)
            }else{
                product.quantity -= 1;
            }
        }
    })
    return cartState
}