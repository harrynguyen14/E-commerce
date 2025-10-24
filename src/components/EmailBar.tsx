import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

const EmailBar = () => {
  return (
    <div className='relative'>
        <Input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent border border-white text-white placeholder:text-gray-400 pr-12 h-11 focus-visible:ring-1 focus-visible:ring-white"
        />
        <Button
            size="icon"
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 hover:bg-transparent"
            >
            <Send className="w-5 h-5" />
        </Button> 
    </div>
  )
}

export default EmailBar