
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/routes/routes';
import { StatusBar } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/redux/store';
import { persistor } from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';
import { View, Text } from 'react-native';
import CodePush from 'react-native-code-push';
import Realm from 'realm';
const UsersSchema = {
  name: 'Users',
  properties: {
    _id: 'string',
    username: 'string',
    email: 'string',
    password: 'string?',
  },
  primaryKey: '_id',
};
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  React.useEffect(()=>{
    (async () => {
      // initialize realm...
      const realm = await Realm.open({
        path: 'myrealm',
        schema: [UsersSchema],
      }).then(realm => {
        // load data in the database...
        const tasks = realm.objects('Users');
       console.log(tasks.map(user=>user));
      });
    })();
  },[])
  const linking = {
    prefixes: ['https://shoppingcart'],
    config: {
      screens: {
        eCommerce: 'ecommerce',
        OurAdvice: 'ouradvice',
        cart: 'cart',
        Detail: {
          path: "detail/:id",
          parse: {
            id: (id) => `${id}`,
          },
        },
      },
    },
  };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer linking={linking} >
          {/* <StatusBar backgroundColor={'black'} hidden={true} /> */}
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

// export default CodePush(App);
export default App