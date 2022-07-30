import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AlertAction from './AlertAction';
import Style from '../../theme';
const CustomDrawer = props => {
  const [toggleClothing, setToggleClothing] = React.useState(false);
  const [toggleShoes, setToggleShoes] = React.useState(false);
  const [touchECommerce, setTouchECommerce] = React.useState(false);
  const [touchShoes, setTouchShoes] = React.useState(false);
  const [touchSport, setTouchSport] = React.useState(false);
  const [touchBA, setTouchBA] = React.useState(false);
  const [touchAcc, setTouchAcc] = React.useState(false);
  const [touchSettings, setTouchSettings] = React.useState(false);


  const navi = useNavigation();
  const types = [
    {
      id: 1,
      name: 'QRCodeScan',
    },
    {
      id: 2,
      name: 'QRCode',
    },
  ];
  const typesClothing = [
    {
      id: 1,
      name: 'Woman & Dresses',
    },
    {
      id: 2,
      name: 'Man',
    }
  ];
  const typesAccount = [
    {
      id: 1,
      name: 'Login',
    },
    {
      id: 2,
      name: 'Register',
    }
  ]
  const navigateTypes = (type) => {
    switch (type.name) {
      case 'QRCodeScan':
        setTouchECommerce(false)
        setTouchShoes(true);
        setTouchSport(false);
        setTouchBA(false);
        setTouchAcc(false);
        setTouchSettings(false);
        navi.navigate('QRCodeScan');
        break;
      case 'QRCode':
        setTouchECommerce(false)
        setTouchShoes(true);
        setTouchSport(false);
        setTouchBA(false);
        setTouchAcc(false);
        setTouchSettings(false);
        navi.navigate('QRCode');
        break;
      default:
        break;
    }
  }
  const navigateClothing = (type) => {
    switch (type.name) {
      case 'Woman & Dresses':
        setTouchECommerce(true)
        setTouchShoes(false);
        setTouchSport(false);
        setTouchBA(false);
        setTouchAcc(false);
        setTouchSettings(false);
        navi.navigate('Woman&Dresses');
        break;

      default:
        break;
    }
  }
  const navigateAccount = (type) => {
    switch (type.name) {
      case 'Login':
        setTouchShoes(false);
        setTouchECommerce(false);
        setTouchSport(false);
        setTouchBA(false);
        setTouchAcc(true);
        setTouchSettings(false);
        navi.navigate('Login')
        break;
      case 'Register':
        setTouchShoes(false);
        setTouchECommerce(false);
        setTouchSport(false);
        setTouchBA(false);
        setTouchAcc(true);
        setTouchSettings(false);
        navi.navigate('Register')
        break;

      default:
        break;
    }
  }
  return (
    <>
      <AlertAction />
      <DrawerContentScrollView showsVerticalScrollIndicator={false}>
        <View
          style={
            touchECommerce
              ? { backgroundColor: '#e8e8e8' }
              : { backgroundColor: 'white' }
          }>
          <DrawerItem
            label={({ focused, color }) => (
              <View style={Style.CustomDrawerStyle.DrawerItem__View}>
                <Text style={Style.CustomDrawerStyle.DrawerItem__View__Text}>
                  CLOTHINGS
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={28}
                  color={touchECommerce ? 'red' : '#e8e8e8'}
                  style={Style.CustomDrawerStyle.DrawerItem__View__Icon}
                />
              </View>
            )}
            activeTintColor="white"
            // focused={
            //   props.state.index ===
            //   props.state.routes.findIndex(e => e.name === 'eCommerce')
            // }
            icon={({ color }) =>
            (
              <MaterialCommunityIcons
                name="tshirt-crew"
                size={28}
                color="red"
              />
            )
            }
            onPress={() => {
              setTouchECommerce(true);
              setTouchShoes(false);
              setTouchSport(false);
              setTouchBA(false);
              setTouchAcc(false);
              setTouchSettings(false);
              // setToggleShoes(false);
              setToggleClothing(!toggleClothing)
            }}
          />
          <View style={Style.CustomDrawerStyle.Types__View}>
            {toggleClothing &&
              typesClothing.map((type, idx) => {
                return (
                  <Text
                    key={idx}
                    style={Style.CustomDrawerStyle.Types__View__Text}
                    onPress={() => navigateClothing(type)}
                  >
                    {type.name}
                  </Text>
                );
              })}
          </View>
        </View>
        <View
          style={
            touchShoes
              ? { backgroundColor: '#e8e8e8' }
              : { backgroundColor: 'white' }
          }>
          <DrawerItem
            label={({ focused, color }) => (
              <View style={Style.CustomDrawerStyle.DrawerItem__View}>
                <Text style={Style.CustomDrawerStyle.DrawerItem__View__Text}>
                  QR CODE
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={28}
                  color={touchShoes ? 'red' : '#e8e8e8'}
                  style={Style.CustomDrawerStyle.DrawerItem__View__Icon}
                />
              </View>
            )}
            activeTintColor="#e8e8e8"
            activeBackgroundColor="#e8e8e8"
            // focused={
            //   props.state.index ===
            //   props.state.routes.findIndex(e => e.name === 'Shoes')
            // }
            icon={({ color }) =>
            (
              <MaterialCommunityIcons
                name="shoe-cleat"
                size={28}
                color="red"
              />
            )
            }
            onPress={() => {
              setTouchECommerce(false);
              setTouchShoes(true);
              setTouchSport(false);
              setTouchBA(false);
              setTouchAcc(false);
              setTouchSettings(false);
              setToggleShoes(!toggleShoes);
            }}
          />
          <View style={Style.CustomDrawerStyle.Types__View}>
            {toggleShoes &&
              types.map((type, idx) => {
                return (
                  <Text
                    key={idx}
                    style={Style.CustomDrawerStyle.Types__View__Text}
                    onPress={() => navigateTypes(type)}
                  >
                    {type.name}

                  </Text>
                );
              })}
          </View>
        </View>
        <View
          style={
            touchSport
              ? { backgroundColor: '#e8e8e8' }
              : { backgroundColor: 'white' }
          }>
          <DrawerItem
            label={({ focused, color }) => (
              <View style={Style.CustomDrawerStyle.DrawerItem__View}>
                <Text style={Style.CustomDrawerStyle.DrawerItem__View__Text}>
                  ECOMMERCE
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={28}
                  color={touchSport ? 'red' : '#e8e8e8'}
                  style={Style.CustomDrawerStyle.DrawerItem__View__Icon}
                />
              </View>
            )}
            activeTintColor="white"
            // focused={
            //   props.state.index ===
            //   props.state.routes.findIndex(e => e.name === 'Sports')
            // }
            icon={({ color }) =>
            (
              <MaterialCommunityIcons
                name="snowboard"
                size={28}
                color="red"
              />
            )
            }
            onPress={() => {
              setTouchShoes(false);
              setTouchECommerce(false);
              setTouchSport(true);
              setTouchBA(false);
              setTouchAcc(false);
              setTouchSettings(false);
              // setToggleShoes(false);
              navi.navigate('eCommerce');
            }}
          />
          {/* {toggleShoes&&
  <Text onPress={()=>navi.navigate('Shoes')}>Hi</Text>} */}
        </View>
        <View
          style={
            touchBA ? { backgroundColor: '#e8e8e8' } : { backgroundColor: 'white' }
          }>
          <DrawerItem
            label={({ focused, color }) => (
              <View style={Style.CustomDrawerStyle.DrawerItem__View}>
                <Text style={Style.CustomDrawerStyle.DrawerItem__View__Text}>
                  BAGS & ACCESSORY
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={28}
                  color={touchBA ? 'red' : '#e8e8e8'}
                  style={Style.CustomDrawerStyle.DrawerItem__View__Icon}
                />
              </View>
            )}
            activeTintColor="white"
            // focused={
            //   props.state.index ===
            //   props.state.routes.findIndex(e => e.name === 'Sports')
            // }
            icon={({ color }) =>
            (
              <MaterialCommunityIcons
                name="clock-outline"
                size={28}
                color="red"
              />
            )
            }
            onPress={() => {
              setTouchShoes(false);
              setTouchECommerce(false);
              setTouchSport(false);
              setTouchBA(true);
              setTouchAcc(false);
              setTouchSettings(false);
              // setToggleShoes(false);
            }}
          />
          {/* {toggleShoes&&
  <Text onPress={()=>navi.navigate('Shoes')}>Hi</Text>} */}
        </View>
        <View style={Style.CustomDrawerStyle.border} />
        <View
          style={
            touchAcc ? { backgroundColor: '#e8e8e8' } : { backgroundColor: 'white' }
          }>
          <DrawerItem
            label={({ focused, color }) => (
              <View style={Style.CustomDrawerStyle.DrawerItem__View}>
                <Text style={Style.CustomDrawerStyle.DrawerItem__View__Text}>
                  ACCOUNT
                </Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={28}
                  color={touchAcc ? 'red' : '#e8e8e8'}
                  style={Style.CustomDrawerStyle.DrawerItem__View__Icon}
                />
              </View>
            )}
            activeTintColor="white"
            // focused={
            //   props.state.index ===
            //   props.state.routes.findIndex(e => e.name === 'Sports')
            // }
            icon={({ color }) =>
            (
              <MaterialCommunityIcons
                name="account-circle"
                size={28}
                color="red"
              />
            )
            }
            onPress={() => {
              setTouchShoes(false);
              setTouchECommerce(false);
              setTouchSport(false);
              setTouchBA(false);
              setTouchAcc(true);
              setTouchSettings(false);
              // setToggleShoes(false);
            }}
          />
          <View style={Style.CustomDrawerStyle.Types__View}>
            {touchAcc &&
              typesAccount.map((type, idx) => {
                return (
                  <Text
                    key={idx}
                    style={Style.CustomDrawerStyle.Types__View__Text}
                    onPress={() => navigateAccount(type)}>
                    {type.name}
                  </Text>
                );
              })}
          </View>
        </View>
        <View
          style={
            touchSettings ? { backgroundColor: '#e8e8e8' } : { backgroundColor: 'white' }
          }>
          <DrawerItem
            label={({ focused, color }) => (
              <View style={Style.CustomDrawerStyle.DrawerItem__View}>
                <Text style={Style.CustomDrawerStyle.DrawerItem__View__Text}>
                  SETTINGS
                </Text>
                {/* <MaterialCommunityIcons
                  name="chevron-down"
                  size={28}
                  color={!touchShoes && !touchECommerce && !touchSport && !touchBA ?'red':'#e8e8e8'}
                  style={Style.CustomDrawerStyle.DrawerItem__View__Icon}
                /> */}
              </View>
            )}
            activeTintColor="white"
            // focused={
            //   props.state.index ===
            //   props.state.routes.findIndex(e => e.name === 'Sports')
            // }
            icon={({ color }) =>
            (
              <MaterialIcons
                name="settings"
                size={28}
                color="red"
              />
            )
            }
            onPress={() => {
              setTouchShoes(false);
              setTouchECommerce(false);
              setTouchSport(false);
              setTouchBA(false);
              setTouchAcc(false);
              setTouchSettings(true);
              // setToggleShoes(false);
            }}
          />
          {/* {toggleShoes&&
  <Text onPress={()=>navi.navigate('Shoes')}>Hi</Text>} */}
        </View>
      </DrawerContentScrollView>
    </>
  );
};

export default CustomDrawer;
