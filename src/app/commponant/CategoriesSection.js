'use client'

import CategoryCard from './CategoryCard'

export default function CategoriesSection() {
  const categories = [
    {
     img: "/sm.svg",       title: "سماعات",
      desc: "أحدث صيحات الموضة",
    },
    {
    img: "/sa2.png",   title: "ساعات ذكية",
      desc: "أجهزة بتقنيات متطورة",
    },
  
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-4 text-indigo-600 relative inline-block">
          اكتشف <span className="text-pink-500">الفئات</span> المميزة
          <span className="absolute -bottom-2.5 right-0 w-1/2 h-1 bg-gradient-to-r from-indigo-600 to-pink-500 rounded"></span>
        </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}