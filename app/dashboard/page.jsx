import { auth } from '@clerk/nextjs'
import React from 'react'

const DashboardPage = () => {
  const { userId } = auth()
  return (
    <div>
      <h1 className='text-2xl font-bold mb-5'>Dashboard (대시보드)</h1>
      <p className='mb-5'>
        Welcome to Dashboard. 로그인된 사용자의 정보를 보여줍니다.
      </p>
      <p>UserID : {userId}</p>
    </div>
  )
}

export default DashboardPage
