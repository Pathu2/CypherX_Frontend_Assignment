import React from 'react'

import Column from './Column'

function Main({result}) {
  return (
    <div className='bg-[#F4F5F8] h-auto'>
      <div className='w-[97%] py-3 mx-auto gap-2 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1'>
      {Object.keys(result).length !== 0 ?
          Object.keys(result).map((group, key) => (
            <Column key={key} items={result[group]} group = {group}/>
          ))
        :
        <>
        </>}
      </div>
    </div>
  )
}

export default Main
