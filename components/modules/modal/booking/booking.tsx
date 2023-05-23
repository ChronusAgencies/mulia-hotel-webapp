'use client';

import React, { useState } from 'react'
import styles from './booking.module.scss'
import Select from '@/components/elements/select/select'
import CustomInput from '@/components/elements/input/customInput/customInput'
import { useSelector, useDispatch } from 'react-redux'
import { ROOT_STATE } from '@/utils/redux/store/reduxStore'
import Icon from '@/components/elements/icon/icon'
import Options from '@/components/elements/options/options'
import { setCheckInMonth, setProperty } from '@/utils/redux/slice/bookingDataSlice'
import DatePicker from '../../datePicker/datePicker'
import { openCheckIn, openCheckOut } from '@/utils/redux/slice/dropdownSlice';


const Booking = () => {

  const [propertyIsShow, setPropertyIsShow] = useState(false);
  const bookingData = useSelector((state :ROOT_STATE) => state.bookingData);
  const dateDropdown = useSelector((state : ROOT_STATE) => state.dropdown);
  const dispatch = useDispatch();

  const properties : string[] = [
    'Hotel Mulia Jakarta',
    'The Suites Mulia',
    'Mulia Resort Bali'
  ]

  const date : Date = new Date();

  const handlerProperty = (event : React.MouseEvent<HTMLDivElement>) => {
    setPropertyIsShow(!propertyIsShow);
  }; // function to handle property dropdown

  const handlePropertyInput = (event : React.MouseEvent<HTMLDivElement>) => {
    dispatch(setProperty(event.currentTarget.innerHTML));
    setPropertyIsShow(!propertyIsShow)
  }; //handle property select input

  const handleCheckin = (event : React.MouseEvent<HTMLDivElement>) => {
    dispatch(openCheckIn());
  };
  const handleCheckOut = (event : React.MouseEvent<HTMLDivElement>) => {
    dispatch(openCheckOut());
  };

  return (
    <>
    <aside className={`${styles.wrapper}`}>
      <form className={`${styles.container}`}>
        <div className={`${styles.input_container}`}>
          <label htmlFor="properties">Choose Our Properties : </label>
          <div className={styles.input}>
            <CustomInput onClick={handlerProperty}>
              <p>
                {bookingData.property !== null ? bookingData.property : '--Select Properties--'}
              </p>
               <Icon className={styles.icon}>
                <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.37071 0.862488L8.50022 6.59999L14.6297 0.862488L16.5126 2.63749L8.50022 10.1375L0.487793 2.63749L2.37071 0.862488Z" fill="black" fillOpacity="0.46"/>
                </svg>
               </Icon>
            </CustomInput>
            <Select className={`${propertyIsShow && 'isShow'}`} reuseStyle='fixed_opts'>
              {properties.map((property,index) => {
                return(
                  <Options key={index} onClick={handlePropertyInput}>
                    {property}
                  </Options>
                )
              })}
            </Select>
          </div>
        </div>
        <div className={`${styles.input_container}`}>
          <label htmlFor="properties">Set Check In Date :</label>
          <div className={styles.input}>
            <CustomInput onClick={handleCheckin}>
              <p>
                {
                  `${bookingData.checkIn.date}/${bookingData.checkIn.month + 1}/${bookingData.checkIn.year}`
                }
              </p>
              <Icon className={styles.icon}>
                <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.2174 17.6111H29L23.9565 22.5L18.913 17.6111H22.6957V0.5H25.2174V17.6111ZM8.82609 16.3889H12.6087V12.7222H8.82609V16.3889ZM15.1304 2.94444H13.8696V0.5H11.3478V2.94444H6.30435V0.5H3.78261V2.94444H2.52174C1.12217 2.94444 0 4.03222 0 5.38889V18.8333C0 20.19 1.12217 21.2778 2.52174 21.2778H15.1304C16.53 21.2778 17.6522 20.19 17.6522 18.8333V5.38889C17.6522 4.03222 16.53 2.94444 15.1304 2.94444ZM2.52174 18.8333V10.2778H15.1304V18.8333H2.52174Z" fill="#999999"/>
                </svg>
              </Icon>
            </CustomInput>
            <DatePicker
              initialMonth={bookingData.checkIn.month}
              initialYear={bookingData.checkIn.year}
              className={dateDropdown.checkIn ? 'isShow' : ''}
            />
          </div>
        </div>
        <div className={`${styles.input_container}`}>
          <label htmlFor="properties">Set Check Out Date :</label>
          <div className={styles.input}>
            <CustomInput onClick={handleCheckOut}>
              <p>
                {
                  `${bookingData.checkOut.date}/${bookingData.checkOut.month + 1}/${bookingData.checkOut.year}`
                }
              </p>
              <Icon className={styles.icon}>
                <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.6957 5.38889H18.913L23.9565 0.5L29 5.38889H25.2174V22.5H22.6957V5.38889ZM8.82609 16.3889H12.6087V12.7222H8.82609V16.3889ZM15.1304 2.94444H13.8696V0.5H11.3478V2.94444H6.30435V0.5H3.78261V2.94444H2.52174C1.12217 2.94444 0 4.03222 0 5.38889V18.8333C0 20.19 1.12217 21.2778 2.52174 21.2778H15.1304C16.53 21.2778 17.6522 20.19 17.6522 18.8333V5.38889C17.6522 4.03222 16.53 2.94444 15.1304 2.94444ZM2.52174 18.8333V10.2778H15.1304V18.8333H2.52174Z" fill="#999999"/>
                </svg>
              </Icon>
            </CustomInput>
            <DatePicker
              initialMonth={bookingData.checkOut.month}
              initialYear={bookingData.checkOut.year}
              className={dateDropdown.checkOut ? 'isShow' : ''}
            />
          </div>
        </div>
      </form>
    </aside>
  </>
  )
}

export default Booking