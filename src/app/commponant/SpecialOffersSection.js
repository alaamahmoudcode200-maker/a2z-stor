'use client'

export default function SpecialOffersSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-300 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-20 rounded-full -mt-36 -mr-36"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 opacity-30 rounded-full -mb-32 -ml-32"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-black mb-6">
          عروض <span className="text-white">لا تُعوض</span>
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          استفد من عروضنا الحصرية على مجموعة واسعة من المنتجات لفترة محدودة فقط
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/20 backdrop-blur-md bg-opacity-20 border border-white/30 rounded-2xl p-6">
            <div className="text-5xl font-black mb-4 text-white">50%</div>
            <h3 className="font-bold mb-2">خصم على الملابس</h3>
            <p className="text-gray-100">خصم نصف السعر على جميع منتجات الملابس</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md bg-opacity-20 border border-white/30 rounded-2xl p-6">
            <div className="text-5xl font-black mb-4 text-white">30%</div>
            <h3 className="font-bold mb-2">خصم على الإلكترونيات</h3>
            <p className="text-gray-100">خصم 30% على أحدث الأجهزة الإلكترونية</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md bg-opacity-20 border border-white/30 rounded-2xl p-6">
            <div className="text-4xl font-black mb-4 text-white">توصيل مجاني</div>
            <h3 className="font-bold mb-2">لطلبات فوق 200 ر.س</h3>
            <p className="text-gray-100">احصل على توصيل مجاني لجميع الطلبات فوق 200 ريال</p>
          </div>
        </div>

        <a
          href="#"
          className="bg-gradient-to-r from-pink-500 to-pink-300 text-white py-3 px-7 rounded-full font-bold mt-12 inline-block transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          استفد من العروض الآن
        </a>
      </div>
    </section>
  )
}