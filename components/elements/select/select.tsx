import React, { HTMLProps } from 'react'
import styles from './select.module.scss'

type TSelect = HTMLProps<HTMLDivElement> & {
  children : React.ReactNode,
  className : string,
  reuseStyle : string
}

const Select = ({children, className, reuseStyle, ...rest} : TSelect) => {

  return (
    <div className={`${styles.container} ${styles[className]} ${styles[reuseStyle]}`} {...rest}>
      {children}
    </div>
  )
}

export default Select