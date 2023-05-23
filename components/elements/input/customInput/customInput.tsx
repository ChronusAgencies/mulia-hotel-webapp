import { TGeneralProps } from '@/utils/types/type/type'
import React, { HTMLProps } from 'react'
import styles from './customInput.module.scss'

type TCustomInput = TGeneralProps & HTMLProps<HTMLDivElement>

const CustomInput = ({className, children, ...rest} : TCustomInput) => {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  )
}

export default CustomInput