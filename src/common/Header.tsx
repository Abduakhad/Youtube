'use client'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RxAvatar} from "react-icons/rx";
import {TfiBell} from "react-icons/tfi";

const Header: React.FC = () => {

  return (
    <header id='header'>
      <div className="container">
        <div className='row'>
          <Link href='/'>
            <Image src='/logo.jpeg' width={130} height={65} alt='Youtube'/>
          </Link>
          <SearchBar/>
          <div className='wrapper'>
            <TfiBell size='30px'/>
            <Link href='https://www.youtube.com/channel/UCMsKF4a_2puF-5oS1EEHS2A'>
              <RxAvatar size='30px'/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header