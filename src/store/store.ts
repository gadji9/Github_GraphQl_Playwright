import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import pageReducer from "./features/page/page.slice";
import searchReducer from "./features/search/search.slice";
import repositoriesReducer from "./features/repositories/repositories.slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["search", "page", "repositories"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    page: pageReducer,
    search: searchReducer,
    repositories: repositoriesReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
