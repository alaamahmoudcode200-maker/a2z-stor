'use client'

import ProductCard from './ProductCard'
import Link from 'next/link'

export default function FeaturedProductsSection() {
  const products = [
    {
      badge: "50% خصم",
      img: "/sa1.png", title: "ساعة ذكية فاخرة",
      stars: 4.5,
      price: "299 جنيه",
      oldPrice: "599 جنيه",
    },
    {
      badge: "30% خصم",
            img: "/sa1.png",title: "حذاء رياضي مريح",
      stars: 4.0,
      price: "210 جنيه",
      oldPrice: "300 جنيه",
    },
    {
      badge: "جديد",
            img: "/sa1.png", title: "سماعات لاسلكية",
      stars: 5.0,
      price: "450 جنيه",
      oldPrice: null,
    },
    {
      badge: "25% خصم",
      img: "/sa1.png",
      title: "نظارات شمسية",
      stars: 4.5,
      price: "150 جنيه",
      oldPrice: "200 جنيه",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-black text-indigo-600 relative inline-block">
            المنتجات <span className="text-pink-500">المميزة</span>
            <span className="absolute -bottom-2.5 right-0 w-1/2 h-1 bg-gradient-to-r from-indigo-600 to-pink-500 rounded"></span>
          </h2>
          <Link href="#" className="text-pink-500 hover:text-pink-400 flex items-center font-bold">
            مشاهدة الكل
            <i className="fas fa-arrow-left mr-2"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}