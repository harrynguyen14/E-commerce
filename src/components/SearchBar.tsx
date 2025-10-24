import { Search } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'

const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center grap rounded-md ring-1 ring-gray-300 px-2 py-1 shadow-md'>
       <Search className='w-4 h-4 text-gray-500 cursor-pointer'/> 
       <Input 
        id='search' 
        placeholder='What are you looking for...' 
        className='text-sm outline-0 border-0 shadow-none'
        />
    </div>
  )
}

export default SearchBar