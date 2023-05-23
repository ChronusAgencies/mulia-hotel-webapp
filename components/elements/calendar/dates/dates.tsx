'use client';

import React, { useEffect } from 'react'
import styles from './dates.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ROOT_STATE } from '@/utils/redux/store/reduxStore'
import { setCheckInDate, setCheckOutDate } from '@/utils/redux/slice/bookingDataSlice';

const Dates = () => {

  const dropdownState = useSelector((state : ROOT_STATE) => state.dropdown.checkIn);
  const bookingData = useSelector((state : ROOT_STATE) => state.bookingData);
  const dispatch = useDispatch();


  const date : Date = new Date();
  const daysCountInCalendar = 42;
  
  let dateInCalendar : number[] = [];

  const getDaysInMonth = (year : number, month : number) : number => {
    return new Date(year,month + 1,0).getDate();
  }

  const getLastDay = (year : number, month : number, daysCount : number) : number => {
    return new Date(year,month,daysCount).getDay();
  }


  // function to get prev month last week
  const getPrevMonthDate = () : number[] => {

    let daysInPrevMonth = getDaysInMonth(bookingData.checkIn.year, bookingData.checkIn.month - 1);
  
    let lastDayOfPrevMonth = (getLastDay(bookingData.checkIn.year, bookingData.checkIn.month - 1, daysInPrevMonth)) + 1;
  
    if(lastDayOfPrevMonth !== 0){
      return [...new Array(lastDayOfPrevMonth)]
    } else {
      return [...new Array(lastDayOfPrevMonth + 1)]
    }
  }

  // function to get selected month date
  const getSelectedMonthDate = () : number [] => {
    const dateOfSelectedMonth : number[] = [];

    let dayinSelectedMonth = getDaysInMonth(bookingData.checkIn.year, bookingData.checkIn.month);

    [...new Array(dayinSelectedMonth)].map((n, days) => {
      dateOfSelectedMonth.push(days + 1);
    })

    return dateOfSelectedMonth
  }

  // function to get next month date
  const getNextMonthDate = () : number[] => {

    let dayInNextMonth = 42 - (getPrevMonthDate().length + getSelectedMonthDate().length);

    return [...new Array(dayInNextMonth)]
  }



  dateInCalendar = [...getPrevMonthDate(),...getSelectedMonthDate(),...getNextMonthDate()];

  const handleSetDate = (event : React.MouseEvent<HTMLDivElement>) => {
    if(dropdownState !== false){
      dispatch(setCheckInDate(parseInt(event.currentTarget.innerHTML)));
    } else {
      dispatch(setCheckOutDate(parseInt(event.currentTarget.innerHTML)));
    }
  }

  return (
    <div className={styles.container}>
      {dateInCalendar.map((date, days) => {
        return(
          <div key={days} className={styles.single} onClick={handleSetDate}>
            {date}
          </div>
        )
      })}
    </div>
  )
}

export default Dates