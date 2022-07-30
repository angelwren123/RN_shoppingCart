import { View, Text, SafeAreaView, StyleSheet, Alert } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'
const QRCodeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <QRCode
                value="https://shoppingcart/detail/12"
                size={300}
            />
            {/* <QRCode
                value={JSON.stringify({
                    id: 4,
                    type:'PRODUCT_DETAIL'
                })}
                size={300}
            /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default QRCodeScreen