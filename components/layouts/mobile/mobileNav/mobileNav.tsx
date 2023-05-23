"use client";

import React from 'react'
import styles from './mobileNav.module.scss'
import Icon from '@/components/elements/icon/icon'
import Dropdown from '@/components/elements/dropdown/dropdown'
import DropdownItem from '@/components/elements/dropdownItem/dropdownItem'
import { useSelector, useDispatch } from 'react-redux';
import { ROOT_STATE } from '@/utils/redux/store/reduxStore';
import { openAccomodation, openActivity, openEvents, openPrivilage } from '@/utils/redux/slice/dropdownSlice';

const MobileNav = () => {

  const dropdown = useSelector((state : ROOT_STATE) => state.dropdown);
  const navIsOpen = useSelector((state : ROOT_STATE) => state.toggle.nav);
  const dispatch = useDispatch();

  return (
    <nav className={`${styles.wrapper} ${navIsOpen && styles.isOpen}`}>
      <ul>
        <li onClick={() => dispatch(openAccomodation())}>
          <div className={styles.controller}>
            <Icon className={styles.main_icon}>
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1Z" stroke="#D7B865" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 15L6.348 14.76C7.813 13.747 10.188 13.747 11.652 14.76L12 15M5 6H5.01M13 6H13.01M9 6H9.01M9 10H9.01M13 10H13.01M5 10H5.01M7 21V14.5M11 14.5V21" stroke="#D7B865" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Icon>
            <p>
              ACCOMODATIONS
            </p>
            <Icon className={`${styles.sec_icon} ${dropdown.accomodation && styles.isOpen}`}>
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.37071 0.862488L8.50022 6.59999L14.6297 0.862488L16.5126 2.63749L8.50022 10.1375L0.487793 2.63749L2.37071 0.862488Z" fill="black" fillOpacity="0.46"/>
              </svg>
            </Icon>
          </div>
          <Dropdown className={`${dropdown.accomodation && 'isOpen'}`}>
            <DropdownItem className={styles.dropdown_item} href={'/'}>
              Rooms
            </DropdownItem>
            <DropdownItem className={styles.dropdown_item} href={'/'}>
              Dinings
            </DropdownItem>
          </Dropdown>
        </li>
        <li onClick={() => dispatch(openEvents())}>
          <div className={styles.controller}>
            <Icon className={styles.main_icon}>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M7.95 16.35L4.4 12.8L5.85 11.35L7.95 13.45L12.15 9.25L13.6 10.7L7.95 16.35ZM2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V4C1.69779e-06 3.45 0.196002 2.979 0.588002 2.587C0.980002 2.195 1.45067 1.99933 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.021 2.196 17.413 2.588C17.805 2.98 18.0007 3.45067 18 4V18C18 18.55 17.804 19.021 17.412 19.413C17.02 19.805 16.5493 20.0007 16 20H2ZM2 18H16V8H2V18Z" fill="#D7B865"/>
              </svg>
            </Icon>
            <p>
              EVENTS
            </p>
            <Icon className={`${styles.sec_icon} ${dropdown.events && styles.isOpen}`}>
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.37071 0.862488L8.50022 6.59999L14.6297 0.862488L16.5126 2.63749L8.50022 10.1375L0.487793 2.63749L2.37071 0.862488Z" fill="black" fillOpacity="0.46"/>
              </svg>
            </Icon>
          </div>
          <Dropdown className={`${dropdown.events && 'isOpen'}`}>
            <DropdownItem className={styles.dropdown_item} href={'/'}>
              Meeting
            </DropdownItem>
            <DropdownItem className={styles.dropdown_item} href={'/'}>
              Wedding
            </DropdownItem>
          </Dropdown>
        </li>
        <li onClick={() => dispatch(openActivity())}>
          <div className={styles.controller}>
            <Icon className={styles.main_icon}>
              <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5001 4.5C8.9501 4.5 8.4791 4.304 8.0871 3.912C7.6951 3.52 7.49943 3.04934 7.5001 2.5C7.5001 1.95 7.6961 1.479 8.0881 1.087C8.4801 0.695002 8.95076 0.499335 9.5001 0.500002C10.0501 0.500002 10.5211 0.696002 10.9131 1.088C11.3051 1.48 11.5008 1.95067 11.5001 2.5C11.5001 3.05 11.3041 3.521 10.9121 3.913C10.5201 4.305 10.0494 4.50067 9.5001 4.5ZM4.3001 22C3.93343 22 3.64576 21.875 3.4371 21.625C3.22843 21.375 3.1661 21.075 3.2501 20.725L6.0751 6.45C6.1751 5.96667 6.4001 5.60434 6.7501 5.363C7.1001 5.12167 7.46676 5.00067 7.8501 5C8.23343 5 8.58776 5.08334 8.9131 5.25C9.23843 5.41667 9.50076 5.66667 9.7001 6L10.7001 7.6C11.0001 8.08334 11.3878 8.521 11.8631 8.913C12.3384 9.305 12.8841 9.59233 13.5001 9.775V8.75C13.5001 8.53334 13.5711 8.35434 13.7131 8.213C13.8551 8.07167 14.0341 8.00067 14.2501 8C14.4668 8 14.6458 8.071 14.7871 8.213C14.9284 8.355 14.9994 8.534 15.0001 8.75V21.25C15.0001 21.4667 14.9291 21.6457 14.7871 21.787C14.6451 21.9283 14.4661 21.9993 14.2501 22C14.0334 22 13.8544 21.929 13.7131 21.787C13.5718 21.645 13.5008 21.466 13.5001 21.25V11.85C12.7001 11.6667 11.9584 11.375 11.2751 10.975C10.5918 10.575 10.0001 10.0833 9.5001 9.5L8.9001 12.5L10.3751 13.9C10.5751 14.1 10.7294 14.321 10.8381 14.563C10.9468 14.805 11.0008 15.0673 11.0001 15.35V21C11.0001 21.2833 10.9041 21.521 10.7121 21.713C10.5201 21.905 10.2828 22.0007 10.0001 22C9.71676 22 9.4791 21.904 9.2871 21.712C9.0951 21.52 8.99943 21.2827 9.0001 21V16L6.9001 14L5.2751 21.25C5.2251 21.4667 5.10843 21.6457 4.9251 21.787C4.74176 21.9283 4.53343 21.9993 4.3001 22ZM3.4251 12.125L4.7751 5.275L3.6251 5.05C3.09176 4.95 2.59176 5.05434 2.1251 5.363C1.65843 5.67167 1.3751 6.09234 1.2751 6.625L0.525098 10.55C0.475098 10.8333 0.525098 11.0877 0.675098 11.313C0.825098 11.5383 1.03343 11.6757 1.3001 11.725L3.4251 12.125Z" fill="#D7B865"/>
              </svg>
            </Icon>
            <p>
              ACTIVITY
            </p>
            <Icon className={`${styles.sec_icon} ${dropdown.activity && styles.isOpen}`}>
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.37071 0.862488L8.50022 6.59999L14.6297 0.862488L16.5126 2.63749L8.50022 10.1375L0.487793 2.63749L2.37071 0.862488Z" fill="black" fillOpacity="0.46"/>
              </svg>
            </Icon>
          </div>
          <Dropdown className={`${dropdown.activity && 'isOpen'}`}>
            <DropdownItem className={styles.dropdown_item} href={'/'}>
              Tours
            </DropdownItem>
            <DropdownItem className={styles.dropdown_item} href={'/'}>
              Destinations
            </DropdownItem>
          </Dropdown>
        </li>
        <li onClick={() => dispatch(openPrivilage())}>
          <div className={styles.controller}>
            <Icon className={styles.main_icon}>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.06 0.929973C6.17 0.919973 4.33 2.73997 5.17 4.99997H2C1.46957 4.99997 0.960859 5.21069 0.585786 5.58576C0.210714 5.96083 0 6.46954 0 6.99997V8.99997C0 9.26519 0.105357 9.51954 0.292893 9.70708C0.48043 9.89462 0.734784 9.99997 1 9.99997H10V6.99997H12V9.99997H21C21.2652 9.99997 21.5196 9.89462 21.7071 9.70708C21.8946 9.51954 22 9.26519 22 8.99997V6.99997C22 6.46954 21.7893 5.96083 21.4142 5.58576C21.0391 5.21069 20.5304 4.99997 20 4.99997H16.83C18 1.72997 13.6 -0.580027 11.57 2.23997L11 2.99997L10.43 2.21997C9.8 1.32997 8.93 0.939973 8.06 0.929973ZM8 2.99997C8.89 2.99997 9.34 4.07997 8.71 4.70997C8.08 5.33997 7 4.88997 7 3.99997C7 3.73476 7.10536 3.4804 7.29289 3.29287C7.48043 3.10533 7.73478 2.99997 8 2.99997ZM14 2.99997C14.89 2.99997 15.34 4.07997 14.71 4.70997C14.08 5.33997 13 4.88997 13 3.99997C13 3.73476 13.1054 3.4804 13.2929 3.29287C13.4804 3.10533 13.7348 2.99997 14 2.99997ZM1 11V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V11H12V19H10V11H1Z" fill="#D7B865"/>
              </svg>
            </Icon>
            <p>
              PRIVILAGES
            </p>
            <Icon className={`${styles.sec_icon} ${dropdown.privilage && styles.isOpen}`}>
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.37071 0.862488L8.50022 6.59999L14.6297 0.862488L16.5126 2.63749L8.50022 10.1375L0.487793 2.63749L2.37071 0.862488Z" fill="black" fillOpacity="0.46"/>
              </svg>
            </Icon>
          </div>
          <Dropdown className={`${dropdown.privilage && 'isOpen'}`}>
            <DropdownItem className={styles.dropdown_item} href={'/'}>
              Mulia Gifts
            </DropdownItem>
            <DropdownItem className={styles.dropdown_item} href={'/'}>
              Special Offers
            </DropdownItem>
          </Dropdown>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav