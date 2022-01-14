import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import linksReducer from "./features/linkSlice";

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, linksReducer)

 
export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware:any) => getDefaultMiddleware({
    serializableCheck: false
})
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;