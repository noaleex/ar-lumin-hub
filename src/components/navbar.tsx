"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        {name: 'HOME', href: '/'},
        {name: 'ILLUSTRATION', href: '/design'},
        {name: 'PROGRAMMING', href: '/dev'},
        {name: 'TALES', href: '/escrita'},
        {name: 'ABOUT', href: '/sobre'},
    ];

    return (
        <nav className='w-full py-8 px-6 md:px-12 flex items-center justify-between bg-transparent'>
            <div className='flex-shrink-0 crusor-pionter'>
                <Link href='/'>
                    <Image
                        src='logotipo.svg'
                        alt='Logotipo AR LUMIN'
                        width={40}
                        height={40}
                        className='md:hidden'
                    />
                    <Image
                        src='logo-completa.svg'
                        alt='Logotipo AR LUMIN'
                        width={220}
                        height={30}
                        className='hidden md:block'
                    />
                </Link>
            </div>

            <div className='hidden lg:flex items-center gap-8'>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className='text-lumin-blue-muted hover:text-lumin-blue-deep transition-colors text-[15px] font-bold tracking-[0.15em]'
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className='flex items-center'>
                <div className='relative group hidden sm:block'>
                    <input
                        type="text"
                        className='bg-transparent border-2 border-lumin-blue-deep/30 rounded-full py-1 px-4 pr-10 outiline-none w-48 focus:w-64 focus:border-lumin-blue-deep transition-all text-xs'
                        placeholder='SEARCH...' 
                    />
                    <div className='absolute right-3 top-1/2 -translate-y-1/2 text-lumin-blue-deep/60 group focus-within:text-lumin-blue-deep pointer-events-none'>
                        <Image
                            src='/icon-search.svg'
                            alt='Search'
                            width={18}
                            height={18}
                            className='opacity-60 group-focus-within:opacity-100 transition-opacity' 
                        />
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className='ml-4 lg:hidden text-lumin-blue-deep'>
                        <svg>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-76h7'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}