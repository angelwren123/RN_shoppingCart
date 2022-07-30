import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { persistReducer, persistStore } from "redux-persist";
import rootEpic from "./epics/rootEpic";
import rootReducer from './reducers/rootReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const epicMiddleware = createEpicMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(epicMiddleware)
);

const persistor = persistStore(store)

epicMiddleware.run(rootEpic)

export default store;
export { persistor}