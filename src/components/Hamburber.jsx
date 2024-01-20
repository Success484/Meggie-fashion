import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { navigation } from './Navbar';
import Link from 'next/link';

export default function Hamburber() {
const [Change, setChange] = useState(false)
const handleClick = ()=> {
    setChange(!Change)
}
  return (
    <div>
    <div onClick={handleClick} className='cursor-pointer'>
        {Change ? <GrClose size={25} /> : <RxHamburgerMenu size={25}/> }
    </div>
    <div className={Change ? 'fixed left-0 w-[65%] h-screen bg-[#ecf0f3] p-10 ease-in sm:hidden duration-500 rounded-sm' : 'fixed w-[65%] h-screen bg-[#ecf0f3] p-10 rounded-sm ease-in duration-500 left-[-100%]'}>
    {navigation.map((link, index) => (
            <section key={index}>
              <Link href={link.href}>{link.label}</Link>
            </section>
          ))}
    </div>
    </div>
  )
}
