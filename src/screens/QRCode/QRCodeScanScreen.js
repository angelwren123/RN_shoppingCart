import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Alert, Button, View
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { LogBox } from "react-native";
import { Link, useNavigation, useRoute } from '@react-navigation/native';
LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])
export default function QRCodeScanScreen() {
  const [detailApi, setDetailApi] = React.useState()
  const navi = useNavigation()
  const url = "https://shoppingcart";

  const onSuccess = async (e) => {
    const supported = await Linking.canOpenURL(e.data);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      Linking.openURL(e.data)

    } else {
      navi.navigate('Detail', { idqr: JSON.parse(e.data) })//{idqr:{id:1}}
    }
  };
  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this url: ${url}`);
    }
  }
  return (

    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.on}
      topContent={
        <Text style={styles.centerText}>
          <Text style={styles.textBold}>QR CODE</Text>
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
      reactivate={true}
      reactivateTimeout={5000}
    />
    // <View style={styles.buttonContainer}>
    //     <Button title="Open Url" onPress={() => {
    //         openUrl(url)
    //     }} color="steelblue" />

    // </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  buttonContainer: {
    margin: 10
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
