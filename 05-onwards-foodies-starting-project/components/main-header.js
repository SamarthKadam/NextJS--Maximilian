import React from 'react'
import Link from 'next/link'
import logoimg from '@/assets/logo.png'

export default function MainHeader() {
  return (
    <header>
        <Link href='/'>
            <img src={logoimg.src} alt='A plate with food in it'></img>
            NextLevel Food
        </Link>
        <nav>
            <ul>
                <li><Link href='/meals'>Browse Meals</Link></li>
                <li><Link href='/community'>Community</Link></li>
            </ul>
        </nav>
    </header>
  )
}
