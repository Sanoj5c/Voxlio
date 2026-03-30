'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NaviItems = [
  { label: "Library", href: "/" },
  { label: "Add new", href: "/books/new" },
]

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="w-full fixed z-50 bg-[var(--bg-primary)]">
      <div className='wrapper navbar-height py-4 flex justify-between items-center'>
        <Link href="/" className='flex gap-0.5 items-center'>
          <Image src="/logo.png" alt="Voxlio Logo" width={42} height={26} />
          <span className="logo-text">Voxlio</span>
        </Link>
        <nav className='w-fit flex gap-7.5 items-center'>
          {NaviItems.map(({ label, href }) => {
            const isActive = pathName === href ||
              (href !== "/" && pathName.startsWith(href));
            return (
              <Link href={href} key={label} className={isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"}>
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Navbar