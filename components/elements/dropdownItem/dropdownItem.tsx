import Link, {LinkProps} from 'next/link'
import React from 'react'

type TDropdownItem = LinkProps & {
  children : React.ReactNode,
  className : string
}

const DropdownItem = ({children, href, className} : TDropdownItem) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default DropdownItem