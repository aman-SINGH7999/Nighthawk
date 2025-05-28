import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // uses localStorage
import { combineReducers } from 'redux';
import userReducer from '../redux/userSlice';

// Combine all reducers if needed
const rootReducer = combineReducers({
  user: userReducer,
});

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
