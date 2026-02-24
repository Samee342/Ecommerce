"use client";

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage"; // ✅ FIX

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "userpreference", "cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 🔥 THIS FIXES YOUR ERROR
    }),
});

const persistor = persistStore(store);

export { store, persistor };
