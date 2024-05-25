'use client'
import React from 'react'
import Link from 'next/link'
import logoimg from '@/assets/logo.png'
import Image from 'next/image'
import classes from '@/components/main-header.module.css'
import Navlink from './nav-link'
export default function MainHeader() {

  return (
    <header className={classes.header}>
        <Link className={classes.logo} href='/'>
            <Image priority src={logoimg} alt='A plate with food in it'></Image>
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li><Navlink href='/meals'>Browse Meals</Navlink></li>
                <li><Navlink href='/community'>Foodies Community</Navlink></li>
            </ul>
        </nav>
    </header>
  )
}
