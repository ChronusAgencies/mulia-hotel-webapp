import React from 'react'
import styles from './datePicker.module.scss'
import MonthInput from '@/components/elements/input/monthInput/monthInput'
import YearInput from '@/components/elements/input/yearInput/yearInput'
import Calendar from '@/components/elements/calendar/calendar'


const DatePicker = ({initialMonth, initialYear, className} : {initialMonth : number, initialYear : number, className : string}) => {

  return (
    <div className={`${styles.wrapper} ${styles[className]}`}>
      <section className={styles.header}>
        <MonthInput initialMonth={initialMonth}/>
        <YearInput initialYear={initialYear}/>
      </section>
      <Calendar/>
    </div>
  )
}

export default DatePicker