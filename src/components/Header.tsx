import { Bell, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {

    return (
        <header className='bg-white border-b border-gray-200 px-6 py-4'>
            <nav className='flex items-center justify-between max-w-[1400px] mx-auto'>
                <div className='flex items-center'>
                    <Link href={'/'} className='text-2xl font-black text-gray-900 tracking-tight hover:opacity-80 transition-opacity'>Ecommerce</Link>
                </div>

                <div className='flex items-center gap-6'>
                    <SearchBar/>
                    <ShoppingCart className='w-4 h-4 text-gray-600'/>
                    <Bell className='w-4 h-4 text-gray-600'/>
                    <Link href={'/login'} className='text-gray-600'>Sign in</Link>
                </div>

            </nav>
        </header>
    )
}

export default Header
