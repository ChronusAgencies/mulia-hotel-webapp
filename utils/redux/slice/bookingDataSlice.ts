import { IBookingData } from "@/utils/types/interface/interface";
import { createSlice } from "@reduxjs/toolkit";

const date = new Date();

const initialState : IBookingData = {
    property : null,
    checkIn : {
        date : date.getDate(),
        month : date.getMonth(),
        year : date.getFullYear()
    },
    checkOut : {
        date : date.getDate(),
        month : date.getMonth(),
        year : date.getFullYear()
    },
    person : {
        adult : null,
        child : null
    },
    refCode : null
}

const BookingDataSlice = createSlice({
    name : 'bookingData',
    initialState,
    reducers : {
        setProperty(state,action){
            state.property = action.payload
        },
        setCheckInDate(state,action){
            state.checkIn.date = action.payload
        },
        setCheckInMonth(state,action){
            state.checkIn.month = action.payload
        },
        setCheckInYear(state,action){
            state.checkIn.year = action.payload
        },
        setCheckOutDate(state,action){
            state.checkOut.date = action.payload
        },
        setCheckOutMonth(state,action){
            state.checkOut.month = action.payload
        },
        setCheckOutYear(state,action){
            state.checkOut.year = action.payload
        },
        setAdult(state, action){
            state.person.adult = action.payload
        },
        setChild(state, action){
            state.person.child = action.payload
        },
        setRefCode(state, action){
            state.refCode = action.payload
        }
    }
})

export const {setProperty,setRefCode,setAdult,setChild,setCheckInDate,setCheckInMonth,setCheckInYear,setCheckOutDate,setCheckOutMonth,setCheckOutYear} = BookingDataSlice.actions;
export default BookingDataSlice.reducer;