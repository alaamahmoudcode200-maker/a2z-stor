'use client'

import Link from 'next/link'
import {FaTwitter , FaInstagram, FaSnapchat} from 'react-icons/fa'
export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-black mb-4 text-indigo-600">A2Z</h3>
            <p className="text-gray-600 mb-4">متجرك الأول للتسوق الإلكتروني بأسعار لا تقارن</p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="bg-indigo-300 hover:bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                <FaTwitter/>
              </Link>
              <Link href="#" className="bg-indigo-300 hover:bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                <FaInstagram/>
              </Link>
              <Link href="#" className="bg-indigo-300 hover:bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition">
               <FaSnapchat/>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-600">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 transition">عن المتجر</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 transition">الأسئلة الشائعة</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 transition">سياسة الخصوصية</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 transition">شروط الخدمة</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-600">خدمة العملاء</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 transition">اتصل بنا</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 transition">إرجاع المنتجات</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 transition">تتبع الطلب</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500 transition">الدعم الفني</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-600">اشترك في النشرة البريدية</h3>
            <p className="text-gray-600 mb-4">اشترك لتحصل على آخر العروض والتخفيضات.</p>
            <div className="flex">
              <button className="bg-pink-500 hover:bg-pink-400 px-4 rounded-r-lg transition font-bold text-white">
                اشترك
              </button>
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-gray-100 text-gray-700 py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500 w-full placeholder-gray-500"
              />
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>© 2024 جميع الحقوق محفوظة. متجر A2Z</p>
        </div>
      </div>
    </footer>
  )
}