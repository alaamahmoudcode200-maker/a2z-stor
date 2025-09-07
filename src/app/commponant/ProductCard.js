'use client'
import { FaHeart, FaEye , FaShoppingCart,  } from 'react-icons/fa'
import Image from 'next/image'

export default function ProductCard({ badge, img, title, stars, price, oldPrice }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <i key={i} className="fas fa-star text-yellow-400"></i>
          } else if (i === fullStars && hasHalfStar) {
            return <i key={i} className="fas fa-star-half-alt text-yellow-400"></i>
          } else {
            return <i key={i} className="far fa-star text-yellow-400"></i>
          }
        })}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 transition-all duration-300 group">
      <div className="relative overflow-hidden h-56">
        {badge && (
          <span className="absolute top-4 left-4 bg-pink-500 text-white py-1 px-3 rounded-full text-xs font-bold shadow">
            {badge}
          </span>
        )}
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={224}
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-10 group-hover:translate-y-0">
          <button className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-1 hover:bg-indigo-700 transition">
            <FaEye className="text-white" />
          </button>
          <button className="bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-1 hover:bg-pink-600 transition">
            <FaHeart className="text-white" />
          </button>
          <button className="bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-1 hover:bg-cyan-600 transition">
            <FaShoppingCart className="text-white" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-1">{title}</h3>
        <div className="flex items-center mb-2">
          {renderStars(stars)}
          <span className="text-gray-400 text-sm mr-2">({stars})</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-pink-500 font-bold text-lg">{price}</span>
            {oldPrice && <span className="text-gray-400 text-sm line-through mr-2">{oldPrice}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}