import React from 'react'
import { TbAntennaBars1 } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import Ticket from './Ticket';
function Column() {
  return (
    <div className='w-full flex flex-col gap-2 '>
    {/* Heading  */}
        <div>
            <div className='flex items-center justify-between px-2'>
                {/* Left  */}
                <div className='flex items-center gap-2'>
                    <TbAntennaBars1 />
                    <span>No Priority</span>
                    <span>1</span>
                </div>
                {/* Right  */}
                <div className='flex items-center gap-2'>
                    <GoPlus/>
                    <BsThreeDots />
                </div>
            </div>  
        </div>
        <Ticket/>
    </div>
  )
}

export default Column
