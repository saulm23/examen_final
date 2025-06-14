'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const route = useRouter();
  return (
    <div className="flex items-center">
        
        <Link href="">
        about
        </Link>
        <Link href ="/Dashboard">
            dashboard
        </Link>
        <Link href = "/">
        home
        </Link>

        
    </div>
  )
}

export default Header