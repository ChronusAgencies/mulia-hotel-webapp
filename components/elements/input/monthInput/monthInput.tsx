import React, { useEffect, useState } from 'react'
import styles from './monthInput.module.scss'
import CustomInput from '../customInput/customInput'
import Icon from '../../icon/icon'
import Select from '../../select/select'
import Options from '../../options/options'
import { setCheckInMonth, setCheckOutMonth } from '@/utils/redux/slice/bookingDataSlice'
import { ROOT_STATE } from '@/utils/redux/store/reduxStore'
import { useDispatch, useSelector } from 'react-redux'

const MonthInput = ({initialMonth} : {initialMonth : number}) => {

  const [isShow, setIsShow] = useState(false);
  const dropdownState = useSelector((state : ROOT_STATE) => state.dropdown.checkIn);
  const dispatch = useDispatch();


  const month : string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const handleMonthShow = (event : React.MouseEvent) => {
    setIsShow(!isShow)
  };

  const handleSetMonth = (event : React.MouseEvent<HTMLDivElement>) => {
    if(dropdownState !== false){
      dispatch(setCheckInMonth(month.indexOf(event.currentTarget.innerHTML)))
    } else {
      dispatch(setCheckOutMonth(month.indexOf(event.currentTarget.innerHTML)))
    }

    setIsShow(!isShow);
  };

  return (
    <div className={styles.container}>
      <CustomInput onClick={handleMonthShow}>
        <p>{month[initialMonth]}</p>
        <Icon className={styles.icon}>
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.37071 0.862488L8.50022 6.59999L14.6297 0.862488L16.5126 2.63749L8.50022 10.1375L0.487793 2.63749L2.37071 0.862488Z" fill="black" fillOpacity="0.46"/>
          </svg>
        </Icon>
      </CustomInput>
      <Select className={`${isShow && 'isShow'}`} reuseStyle='dynamic_opts'>
        {month.map((month, index) => {
          return(
            <Options key={index} onClick={handleSetMonth}>
              {month}
            </Options>
          )
        })}
      </Select>
    </div>
  )
}

export default MonthInput