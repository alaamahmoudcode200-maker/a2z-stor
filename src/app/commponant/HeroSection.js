'use client'
import { FaTruck, FaShieldAlt } from 'react-icons/fa'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-300 via-cyan-400 to-pink-300 text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-20 rounded-full -mt-48 -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200 opacity-30 rounded-full -mb-40 -ml-40"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 mb-12 md:mb-0 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            تجربة تسوق <span className="text-white">مشرقة</span>
          </h1>
          <p className="text-xl mb-8 text-white">
            اكتشف عالمًا من المنتجات المميزة بعروض حصرية وتوصيل فائق السرعة
          </p>
          <div className="flex space-x-4 space-x-reverse flex-wrap gap-4">
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-3 px-7 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
            >
              <span>تسوق الآن</span>
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-pink-500 to-pink-300 text-white py-3 px-7 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              استكشف العروض
            </a>
          </div>
          <div className="flex space-x-6 space-x-reverse mt-10">
            <div className="flex items-center">
              <div className="bg-white/30 p-3 rounded-full ml-3">
                <FaTruck/>
              </div>
              <div>
                <p className="font-bold">توصيل سريع</p>
                <p className="text-sm text-white">خلال 24 ساعة</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white/30 p-3 rounded-full ml-3">
               <FaShieldAlt/>
              </div>
              <div>
                <p className="font-bold">دفع آمن</p>
                <p className="text-sm text-white">حماية كاملة</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 opacity-0 animate-fade-in" >
          <div className="relative">
            <Image
              src="/sa2.png"      
              alt="تسوق إلكتروني"
              className="rounded-3xl  w-full "style={{ animation: 'bounce 10s ease-in-out infinite' }}
              width={500}
              height={500}
            />
            <div className="absolute -bottom-5 -left-5 bg-indigo-600 p-4 rounded-2xl shadow-lg">
              <p className="font-black text-2xl">
                50%<span className="text-sm font-normal"> خصم</span>
              </p>
              <p className="text-sm">على جميع المنتجات</p>
            </div>
            <div className="absolute -top-5 -right-5 bg-pink-500 p-4 rounded-2xl shadow-lg">
              <p className="font-bold">عروض محدودة</p>
              <p className="text-sm">لمدة 3 أيام فقط</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}