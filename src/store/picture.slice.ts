import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { call, put, takeLatest } from "redux-saga/effects";
import { getPictureAPI } from "../apis/pictureApi";
import { Picture } from "../models/picture"


interface PictureState {
    pic: Picture,
    isLoading: boolean,
}

const initialState: PictureState = {
    pic: new Picture(),
    isLoading: false,
}

const pictureSlice = createSlice({
    name: "pictureSlice",
    initialState,
    reducers: {
        setPicture: (state: PictureState, action: PayloadAction<Picture>) => {
            state.pic = action.payload;
        },
        setLoading: (s: PictureState, action: PayloadAction<boolean>) => {
            s.isLoading = action.payload;
        },
        fetchPicture() {},
    },
});


function* fetchPictureSaga() {
    console.log("fetchPictureSaga called!");
    try {
        yield put(setLoading(true));
        const picture: Picture = yield call(getPictureAPI);
        yield put(setPicture(picture));
        yield put(setLoading(false));
    } catch (error) {
        console.log("Err")
        console.log(error);
    }
}

export function* pictureSaga() {
    yield takeLatest(fetchPicture, fetchPictureSaga);
}

export default pictureSlice;

export const {
    setPicture,
    setLoading,
    fetchPicture,
} = pictureSlice.actions