import React, { useState } from 'react';
import Hamburber from './Hamburber';
import Link from 'next/link';

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {

  return (
    <div className='bg-white py-4 px-6'>
      <div className='flex justify-between px-9 items-center text-center'>
        <h2 className='font-bold'>Meggie Appeal</h2>
        
        <div className='hidden md:block sm:block'>
          <ul className='space-x-10 flex justify-center items-center'>
          {navigation.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          </ul>
        </div>

        <div className='block md:hidden sm:hidden'>
          <Hamburber />
        </div>
      </div>
      {/* <div className={change}></div> */}
    </div>
  );
}
