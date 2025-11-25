import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useReducer } from './user/userSlice';
import { version } from 'mongoose';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({user: useReducer});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  serializerCheck: false,
});

export const persistor = persistStore(store);



