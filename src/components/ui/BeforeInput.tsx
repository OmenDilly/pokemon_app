import React, { FC } from 'react'

type BeforeInputProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string
}

const BeforeInput: FC<BeforeInputProps> = ({name, children, ...props}) => {
  return (
    <div
      {...props}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '.3rem'
      }}
    >
      <span style={{minWidth: '3.5rem'}}>{name}</span>
      {children}
    </div>
  )
}

export default BeforeInput