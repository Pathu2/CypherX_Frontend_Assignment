import React from 'react';
import { TbAntennaBars1 } from 'react-icons/tb';
import { GoPlus } from 'react-icons/go';
import { BsThreeDots } from 'react-icons/bs';
import Ticket from './Ticket';

function Column({ items, group }) {
  console.log(items);

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Heading  */}
      <div>
        <div className="flex items-center justify-between px-2">
          {/* Left  */}
          <div className="flex items-center gap-2">
            <TbAntennaBars1 />
            <span>{group}</span>
            <span>{items.length}</span>
          </div>
          {/* Right  */}
          <div className="flex items-center gap-2">
            <GoPlus />
            <BsThreeDots />
          </div>
        </div>
      </div>
      {/* Tickets  */}
      {items.length !== 0 ? (
        items.map((item, index) => (
          <Ticket key={index} item={item} group={group} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Column;
