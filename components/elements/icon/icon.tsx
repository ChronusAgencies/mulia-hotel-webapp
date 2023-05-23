import React from 'react'

type TIcon = {
    className : string,
    children : React.ReactNode
}

const Icon = ({className, children} : TIcon) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Icon