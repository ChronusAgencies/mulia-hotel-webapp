import React from 'react'
import NavToggle from '@/components/elements/toggle/navToggle/navToggle'
import { Providers } from '@/utils/redux/provider/provider'
import styles from './mobileHeader.module.scss'
import MobileNav from '../mobileNav/mobileNav'

const MobileHeader = () => {
  return (
    <>
        <header className={styles.wrapper}>
            <Providers>
                <NavToggle/>
            </Providers>
        </header>
        <Providers>
          <MobileNav/>
        </Providers>
    </>
  )
}

export default MobileHeader