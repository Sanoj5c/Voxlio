import React from 'react'
import Link from 'next/link' // 1. Must import Link from next/link
import Image from 'next/image' // 2. Optional but recommended for Next.js

const Navbar = () => {
  return (
    <header className="w-full fixed z-50 bg-[var(--bg-primary)]">
      <div className='wrapper navbar-height py-4 flex justify-between items-center'>
        {/* 3. Changed <link> to <Link> (Uppercase) */}
        <Link href="/" className='flex gap-0.5 items-center'>
          <img 
            src="app/public/Assets/logo.png" 
            alt="Voxlio"
            width={42} 
            height={26}
            className="rounded-full" 
          />
        </Link>
      </div>
    </header>
  )
}

export default Navbar