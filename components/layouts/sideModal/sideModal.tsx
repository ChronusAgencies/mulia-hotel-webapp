import Booking from '@/components/modules/modal/booking/booking'
import { Providers } from '@/utils/redux/provider/provider'
import React from 'react'

const SideModal = () => {
  return (
    <>
      <Providers>
        <Booking/>
      </Providers>
    </>
  )
}

export default SideModal