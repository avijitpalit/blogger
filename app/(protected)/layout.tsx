import React from 'react'
import Auth from '@/components/Auth'

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Auth>
      { children }
    </Auth>
  )
}

export default ProtectedLayout
