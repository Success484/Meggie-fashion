import Image from 'next/image'
import React from 'react'
import style from './style.module.css'

export default function Header() {
  const date = new Date().getFullYear()
  return (
    <div className='bg-pink-200'>
      <div className='flex items-center justify-center'>
        <div className='p-10'>
          <p className='font-bold mb-[-23px]'>NEW TREND {date}</p><br />
          <h2 className='font-extrabold text-[40px] tracking-widest'>Meggie <span className='text-green-500'>Appeal</span></h2>
          <button className='bg-gray-100 px-2 py-2 mt-2 rounded-sm font-medium text-[12px] hover:bg-black hover:text-gray-100 duration-500 ease-in-out'>SHOP NOW</button>
        </div>
        <div>
        <Image src={'/header.png'} height={300} loading='lazy' quality={100} width={300} alt='' className={style.image}/>
        </div>
      </div>
    </div>
  )
}
