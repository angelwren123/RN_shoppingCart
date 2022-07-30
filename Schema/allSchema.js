import Realm from "realm";
const UsersSchema = {
  name: 'Users',
  properties: {
    _id: 'string',
    username: 'string',
    password: 'string?',
  },
  primaryKey: '_id',
};
export const openRealmUsers = async () => {
  return await Realm.open({
    path: 'myrealm',
    schema: [UsersSchema],
  })
} 