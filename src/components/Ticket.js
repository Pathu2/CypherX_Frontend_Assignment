import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaRegCircle } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
function Ticket() {
  return (
    <div className='w-full bg-[#ffff] border-2 border-[e6e7eb] rounded-md px-5 py-3 flex flex-col gap-2 '>
        {/* Top line */}
        <div className='w-full flex items-center justify-between'>
            <span>CAM-0</span>
            <CgProfile/>
        </div>
        {/* Middle line */}
        <div className='w-full flex items-center gap-2'>
            <FaRegCircle />
            <p>Jo hai yahi hai</p>
        </div>
        {/* Bottom line */}
        <div className='w-full flex items-center'>
            <div className=' text-[#8D8D8D] text-sm px-1 border-2'>
                <div className='flex items-center gap-2'>
                 <FaCircle />
                 <span>Feature Request</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ticket
