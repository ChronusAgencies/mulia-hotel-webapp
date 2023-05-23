import React from "react"

export interface IBookingData{
    property : string | null,
    checkIn : IDate,
    checkOut : IDate,
    person : IPersonCount,
    refCode : string | null
}

export interface IDate{
    date : number,
    month : number,
    year : number
}

export interface IPersonCount{
    adult : string | number | null,
    child : string | number | null
}
