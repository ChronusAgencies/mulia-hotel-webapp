import React, {useState} from 'react'
import styles from './yearInput.module.scss'
import CustomInput from '../customInput/customInput'
import Icon from '../../icon/icon'
import Select from '../../select/select'
import Options from '../../options/options'
import { useDispatch, useSelector } from 'react-redux'
import { ROOT_STATE } from '@/utils/redux/store/reduxStore'
import { setCheckInYear, setCheckOutYear } from '@/utils/redux/slice/bookingDataSlice'

const YearInput = ({initialYear} : {initialYear : number}) => {

  const [isShow, setIsShow] = useState(false);
  const dropdownState = useSelector((state : ROOT_STATE) => state.dropdown.checkIn);
  const dispatch = useDispatch();

  const date = new Date();

  const year : number[] = [
    date.getFullYear(),
    (date.getFullYear()) + 1
  ];

  const handleYearShow = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsShow(!isShow)
  };

  const handleSetYear = (event : React.MouseEvent<HTMLDivElement>) => {
    if(dropdownState !== false){
      dispatch(setCheckInYear(parseInt(event.currentTarget.innerHTML)))
    } else {
      dispatch(setCheckOutYear(parseInt(event.currentTarget.innerHTML)))
    };
    setIsShow(!isShow);
  };


  return (
    <div className={styles.container}>
      <CustomInput onClick={handleYearShow}>
        <p>{initialYear}</p>
        <Icon className={styles.icon}>
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.37071 0.862488L8.50022 6.59999L14.6297 0.862488L16.5126 2.63749L8.50022 10.1375L0.487793 2.63749L2.37071 0.862488Z" fill="black" fillOpacity="0.46"/>
          </svg>
        </Icon>
      </CustomInput>
      <Select className={`${isShow && 'isShow'}`} reuseStyle='dynamic_opts'>
        {year.map((year, index) => {
          return(
            <Options key={index} onClick={handleSetYear}>
              {year}
            </Options>
          )
        })}
      </Select>
    </div>
  )
}

export default YearInput