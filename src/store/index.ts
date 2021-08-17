import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { all } from "redux-saga/effects";
import pictureSlice, { pictureSaga } from './picture.slice';

const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
  yield all([pictureSaga()]);
}

export const store = configureStore({
  reducer: {
    picture: pictureSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware);
  },

});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
