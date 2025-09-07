'use client'
import { FaHeart, FaUser, FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa'            
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white/70 backdrop-blur-md bg-opacity-70 border border-white/50 rounded-2xl py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 space-x-reverse">
          <Link href="/" className="text-2xl font-black text-indigo-600">A2Z</Link>
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <Link href="/" className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 transition">
              الرئيسية
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-pink-500 transition-all"></span>
            </Link>
            <Link href="/products" className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 transition">
              المنتجات
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-pink-500 transition-all"></span>
            </Link>
            <Link href="/categories" className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 transition">
              الفئات
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-pink-500 transition-all"></span>
            </Link>
            <Link href="/offers" className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 transition">
              العروض
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-pink-500 transition-all"></span>
            </Link>
            <Link href="/contact" className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 transition">
              اتصل بنا
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-pink-500 transition-all"></span>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-5 space-x-reverse">
          <div className="hidden md:block relative">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن منتج..."
                className="bg-gray-100 text-gray-700 rounded-full py-2 px-4 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
              />
              <FaSearch className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
            </div>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link href="/wishlist" className="text-gray-700 hover:text-indigo-600 relative">
              <FaHeart className="text-xl" />
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-indigo-600 relative">
             <FaUser className="text-xl" />
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-indigo-600 relative">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-1 -left-1 w-5 h-5 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow">3</span>
            </Link>
          </div>
          <button className="lg:hidden text-gray-700 hover:text-indigo-600">
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  )
}