'use client'

import Image from 'next/image'

export default function CategoryCard({ img, title, desc }) {
  return (
    <div className="group h-64  rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition-all duration-300 cursor-pointer relative">
      <Image
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        width={400}
        height={256}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 right-0 left-0 p-5 z-10 text-white">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-200">{desc}</p>
      </div>
    </div>
  )
}