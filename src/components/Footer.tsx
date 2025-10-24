import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Facebook, Send } from 'lucide-react'
import EmailBar from './EmailBar'


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Grid layout với 4 cột đều nhau */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Subscribe Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Ecommerce</h3>
            <p className="text-base font-medium mb-4">Subscribe</p>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-transparent border border-white rounded px-4 py-3 text-sm w-full pr-12"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 rotate-90 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <div className="space-y-3 text-sm">
              <p>Ho Chi Minh City, Viet Nam</p>
              <p className="break-all">ecommerce@gmail.com</p>
              <p>+84934-888-999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Account</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline transition-all">My Account</a></li>
              <li><a href="#" className="hover:underline transition-all">Login / Register</a></li>
              <li><a href="#" className="hover:underline transition-all">Cart</a></li>
              <li><a href="#" className="hover:underline transition-all">Wishlist</a></li>
              <li><a href="#" className="hover:underline transition-all">Shop</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Help</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline transition-all">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline transition-all">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline transition-all">FAQ</a></li>
              <li><a href="#" className="hover:underline transition-all">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">© Copyright all right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer