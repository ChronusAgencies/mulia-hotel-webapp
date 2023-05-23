'use client';

import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../slice/toggleSlice";
import dropdownReducer from "../slice/dropdownSlice";
import bookingDataReducer from "../slice/bookingDataSlice";

export const Store = configureStore({
    reducer : {
        toggle : toggleReducer,
        dropdown : dropdownReducer,
        bookingData : bookingDataReducer
    },
    devTools: false
});

export type ROOT_STATE = ReturnType <typeof Store["getState"]>;
export type APP_DISPATCH = typeof Store["dispatch"];
