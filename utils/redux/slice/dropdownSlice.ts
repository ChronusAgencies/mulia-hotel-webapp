'use client';

import { createSlice } from "@reduxjs/toolkit";

export interface IDropdown {
    accomodation : boolean,
    events : boolean,
    activity : boolean,
    privilage : boolean,
    checkIn : boolean,
    checkOut : boolean
}

const initialState : IDropdown = {
    accomodation : false,
    events : false,
    activity : false,
    privilage : false,
    checkIn : false,
    checkOut : false
}

const DropdownSlice = createSlice({
    name : 'dropdown',
    initialState,
    reducers : {
        openAccomodation(state){
            state.accomodation = !state.accomodation,
            state.activity = false,
            state.events = false,
            state.privilage = false
        },
        openActivity(state){
            state.accomodation = false,
            state.activity = !state.activity,
            state.events = false,
            state.privilage = false
        },
        openEvents(state){
            state.accomodation = false,
            state.activity = false,
            state.events = !state.events,
            state.privilage = false
        },
        openPrivilage(state){
            state.accomodation = false,
            state.activity = false,
            state.events = false,
            state.privilage = !state.privilage
        },
        openCheckIn(state){
            state.checkIn = !state.checkIn,
            state.checkOut = false
        },
        openCheckOut(state){
            state.checkOut = !state.checkOut,
            state.checkIn = false
        }
    }
})

export const {openAccomodation, openActivity, openEvents, openPrivilage, openCheckIn, openCheckOut} = DropdownSlice.actions;
export default DropdownSlice.reducer;