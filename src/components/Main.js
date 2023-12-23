import React from 'react'
import Ticket from './Ticket'
import Column from './Column'

function Main() {
  return (
    <div className='bg-[#F4F5F8] h-auto'>
      <div className='w-[97%] py-3 mx-auto gap-2 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1'>
        <Column/>
        <Column/>
        <Column/>
        <Column/>
        <Column/>
      </div>
    </div>
  )
}

export default Main
