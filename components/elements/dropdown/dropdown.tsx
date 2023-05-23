import React from 'react'
import styles from './dropdown.module.scss'

const Dropdown = ({children, className} : {children : React.ReactNode, className : string}) => {
  return (
    <div className={`${styles.container} ${styles[className]}`}>
      {children}
    </div>
  )
}

export default Dropdown