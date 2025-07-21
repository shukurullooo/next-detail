"use client"
import React from 'react'
import { useRouter } from 'next/navigation' 

const NotFound = () => {
  const router = useRouter()
  return (
    <div className='text-center'>
      <h2 className='text-9xl '>404</h2>
      <button onClick={() => router.push("/")}>go home</button>
      <button onClick={() => router.back()}>go back</button>
    </div>
  )
}

export default NotFound