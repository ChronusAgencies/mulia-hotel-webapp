'use client';

import { createSlice } from "@reduxjs/toolkit";

export interface IToggle{
    nav : boolean,
    sideChat : boolean
}

const initialState : IToggle = {
    nav : false,
    sideChat : false
}

const ToggleSlice = createSlice({
    name : 'toggle',
    initialState,
    reducers : {
        openSideNav(state){
            state.nav = !state.nav;
            state.sideChat = false
        },
        openChat(state){
            state.sideChat = !state.sideChat;
            state.nav = false
        }
    }
})

export const {openSideNav, openChat} = ToggleSlice.actions;
export default ToggleSlice.reducer;