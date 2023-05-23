'use client';

import React from 'react'
import styles from './navToggle.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import type { ROOT_STATE } from '@/utils/redux/store/reduxStore';
import { openSideNav } from '@/utils/redux/slice/toggleSlice';

const NavToggle = () => {

    const sideNav = useSelector((state : ROOT_STATE) => state.toggle.nav);
    const dispatch = useDispatch();

  return (
    <div className={`${styles.container} ${sideNav && styles.isActive}`} onClick={() => dispatch(openSideNav())}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default NavToggle