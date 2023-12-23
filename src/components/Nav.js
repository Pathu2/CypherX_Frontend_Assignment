import React from "react";
import Select from "react-select";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
const options1 = [
  { value: "priority", label: "Priority" },
  { value: "user", label: "User" },
  { value: "status", label: "Status" },
];

const options2 = [
  { value: "title", label: "Title" },
  { value: "priority", label: "Priority" },
];

function Nav({group, order, setGroup, setOrder}) {

  const handlegroupchange=(selected)=>{
    console.log(selected);
    setGroup(selected.value);
  }

  const handleorderchange=(selected)=>{
    console.log(selected);
    setOrder(selected.value);
  }

  return (
    <div className="flex items-center justify-center h-[10vh] bg-[#ffff]">
      <div className="flex items-center justify-between mx-3 w-[97%] h-[8vh]">
        <div className="flex items-center gap-2">
          <div className=" px-2 py-1 shadow-[#0000001a] cursor-pointer">
            <Select
              defaultValue={group}
              onChange={handlegroupchange}
              options={options1}
              placeholder="Group"
            />
          </div>
          <div className=" px-2 py-1 shadow-[#0000001a] cursor-pointer">
            <Select
              defaultValue={order}
              onChange={handleorderchange}
              options={options2}
              placeholder="Order"
            />
          </div>
        </div>

        <div>
          <MdDarkMode className=" cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
