import { TGeneralProps } from '@/utils/types/type/type'
import React, { HTMLProps } from 'react'
import styles from './options.module.scss'

type TOptions = TGeneralProps & HTMLProps<HTMLDivElement>;

const Options = ({className,children, ...rest} : TOptions) => {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  )
}

export default Options