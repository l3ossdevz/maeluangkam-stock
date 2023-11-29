import React from 'react'

type Props = { children: React.ReactNode }

export default function DefaultLayout({ children }: Props) {
  return <div>{children}</div>
}
