import React from 'react'
import styles from './days.module.scss'

const Days = () => {

  const days : string[] = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]

  return (
    <div className={styles.container}>
      {days.map((day,count) => {
        return(
          <div key={count} className={styles.single}>
            {day}
          </div>
        )
      })}
    </div>
  )
}

export default Days