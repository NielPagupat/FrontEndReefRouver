import React from 'react'
import { useSelector } from 'react-redux'
export default function Mydata() {
  const {email, token} = useSelector((state) => state.auth_token)
  return (
    <div>
      {token}
    </div>
  )
}
