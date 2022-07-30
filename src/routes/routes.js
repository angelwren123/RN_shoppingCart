import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CustomDrawer from '../components/Navbar/CustomDrawer';
import ECommerceScreen from '../screens/eCommerce/ECommerceScreen';
import OurAdviceScreen from '../screens/OurAdvice/OurAdviceScreen';
import WomanDressesScreen from '../screens/Woman&Dresses/WomanDressesScreen';
import CartScreen from '../screens/Cart/CartScreen';
import DetailScreen from '../screens/DetailProduct/DetailScreen';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import BillingDetailsScreen from '../screens/BillingDetails/BillingDetailsScreen';
import { useDispatch } from 'react-redux';
import { actLoadDataCart, actSetDataNotification } from '../redux/actions/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import messaging from '@react-native-firebase/messaging';
import { requestUserPermission } from '../firebase/pushnotification_helper'
import uuid from 'react-native-uuid';
import QRCodeScanScreen from '../screens/QRCode/QRCodeScanScreen';
import QRCodeScreen from '../screens/QRCode/QRCodeScreen';

export default function Routes() {

  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
  const [initialRoute, setInitialRoute] = React.useState('eCommerce');
  const dispatch = useDispatch()
  async function fetchCart() {
    const existData = await AsyncStorage.getItem('CART')
    if (!existData) {
      await AsyncStorage.setItem('CART', JSON.stringify([]))
    } else {
      const data = JSON.parse(existData)
      dispatch(actLoadDataCart(data))
    }
  }

  React.useEffect(() => {
    fetchCart()
  }, [dispatch])

  React.useEffect(() => {
    requestUserPermission();
    // NotificationListner();
    messaging().onMessage(remoteMessage => {
      // Alert.alert('Thông báo!', JSON.stringify(remoteMessage.data.title));
      const newNotification = {
        id: uuid.v4(),
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body
      };
      dispatch(actSetDataNotification(newNotification))
    });

    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
      if (!remoteMessage.data.type) {
        setInitialRoute("eCommerce")
      } else {
        navigation.navigate(remoteMessage.data?.type);
      }
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log(remoteMessage);
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.data,
          );
          if (!remoteMessage.data.type) {
            setInitialRoute("eCommerce")
          } else {
            navigation.navigate(remoteMessage.data?.type);
          }
        }

      });
  }, []);


  return (
    <Drawer.Navigator
      initialRouteName={initialRoute}
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      backBehavior='history'
      
    >
      <Drawer.Screen
        name='eCommerce'
        component={ECommerceScreen}
        options={{ title: 'eCommerce' }}

      />
      <Drawer.Screen
        name="OurAdvice"
        component={OurAdviceScreen}
        options={{ title: 'OurAdvice' }}

      />
      <Drawer.Screen
        name="Woman&Dresses"
        component={WomanDressesScreen}
        options={{ title: 'Woman&Dresses' }}


      />
      <Drawer.Screen
        name="cart"
        component={CartScreen}
        options={{ title: 'cart' }}


      />
      <Drawer.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Detail' }}

      />
      <Drawer.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ title: 'Checkout' }}
      />
      <Drawer.Screen
        name="Billing Details"
        component={BillingDetailsScreen}
        options={{ title: 'Billing Details' }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Register' }}
      />
      <Drawer.Screen
        name="QRCodeScan"
        component={QRCodeScanScreen}
        options={{ title: 'QRCodeScan' }}
      />
      <Drawer.Screen
        name="QRCode"
        component={QRCodeScreen}
        options={{ title: 'QRCode' }}
      />
    </Drawer.Navigator>
  );
}