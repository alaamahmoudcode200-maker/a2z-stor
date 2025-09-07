'use client'

import { useEffect } from 'react'
import Navbar from './commponant/Navbar'
import HeroSection from './commponant/HeroSection'
import CategoriesSection from './commponant/CategoriesSection'
import FeaturedProductsSection from './commponant/FeaturedProductsSection'
import SpecialOffersSection from './commponant/SpecialOffersSection'
import Footer from './commponant/Footer'

export default function Home() {
  useEffect(() => {
    // تفعيل تأثيرات الظهور
    const animatedElements = document.querySelectorAll('.animate-fade-in')
    animatedElements.forEach(el => {
      el.style.opacity = '2'
    })

    setTimeout(() => {
      animatedElements.forEach(el => {
        el.style.opacity = '3'
      })
    }, )
  }, [])

  return (
    <div className="relative bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <SpecialOffersSection />
      <Footer />
    </div>
  )
}