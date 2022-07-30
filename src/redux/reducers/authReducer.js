import Realm from "realm";
import uuid from 'react-native-uuid';
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
import { openRealmUsers } from "../../../Schema/allSchema";
const initialState = []
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      // console.log(action.payload);
      (async () => {
        const realm = await Realm.open({
          path: 'myrealm',
          schema: [UsersSchema],
        })
        .then((realm)=>{
          realm.write(() => {
            realm.create('Users', {
              _id: uuid.v4(),
              username: action.payload.username,
              email: action.payload.email,
              password: action.payload.password,
            })
          });
          realm.close();
        })
      })()
      return state

    case 'LOGIN':
      (async () => {
        const realm  = await Realm.open({
          path:'myrealm',
          schema:[UsersSchema],
        }).then(realm=>{
          const users = realm.objects('Users')
          console.log(realm.objects('Users').map(user=>user._id));
          realm.close()
        })
      })()
      return state;
    default:
      return state
  }
}
export default authReducer;