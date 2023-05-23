import React from 'react'
import styles from './calendar.module.scss'
import Days from './days/days'
import Dates from './dates/dates'

const Calendar = () => {
  return (
    <div className={styles.container}>
      <Days/>
      <Dates/>
    </div>
  )
}

export default Calendar