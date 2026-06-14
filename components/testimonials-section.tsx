"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
const testimonials = [
  {
    name: "A.K.M Fahim Mashroor",
    role: "CEO, BDJobs.com",
    image: "https://futurestartup.com/wp-content/uploads/2018/04/Fahim-Mashroor.jpg",
    rating: 5,
    text: "Kami membutuhkan seorang perawat untuk ibu kami yang sudah lanjut usia. Karena jadwal kerja yang sibuk, kami tidak dapat memberikan waktu dan perhatian yang cukup seperti yang beliau butuhkan. Memantau kondisi medis dan memberikan obat tepat waktu juga menjadi kekhawatiran. Jadi kami menghubungi ParentsCare dan mereka menyediakan tenaga profesional yang luar biasa dan penuh perhatian, yang sangat membantu kami melalui layanan mereka.",
  },
  {
    name: "Dr. Mahfuz Ashraf",
    role: "Profesor & Dekan, Universitas Australia",
    image: "/client2.jpeg",
    rating: 5,
    text: "Saya menghubungi ParentsCare untuk ibu saya yang sedang sakit, dan para perawat mereka memberikan layanan yang sangat baik kepada ibu saya. Layanan mereka benar-benar sangat membantu!",
  },
  {
    name: "Shah Rafiul Kabir",
    role: "Kepala Operasional, Perusahaan Teknologi",
    image: "https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/wipmcctm9ly5ygseojb0",
    rating: 5,
    text: "Karena jadwal kerja harian saya yang sibuk, saya sering khawatir tentang perawatan kesehatan ayah saya yang sedang sakit. ParentsCare menghilangkan semua kekhawatiran saya, seperti apakah ayah saya sudah makan, apakah beliau sudah minum obat dengan benar, apakah tekanan darahnya diperiksa, apakah diabetesnya dipantau, dan apakah beliau dirawat dengan baik setiap saat.",
  },
]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-20 relative scroll-mt-20 bg-[#FFF4EC]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
        Apa Kata{" "}
        <span className="text-pink">Pelanggan Kami</span>
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
        Kisah sukses nyata dari orang-orang yang menemukan ketenangan pikiran
        dengan layanan perawatan kami
      </p>
      
      <div className="inline-block bg-white border border-[#E7E5E4] rounded-lg px-4 py-2">
        <p className="text-sm text-[#6B6666]">
          <span className="font-semibold">Catatan:</span> Testimoni berikut adalah dari pelanggan setia kami di Bangladesh yang telah merasakan keunggulan layanan Parents Care sejak 2020. Pengalaman terbukti ini menunjukkan komitmen kami terhadap kualitas layanan perawatan profesional.
        </p>
      </div>
    </div>

    {/* User Avatars */}
    <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
      {testimonials.map((testimonial, index) => (
        <button
          key={index}
          onClick={() => setCurrentTestimonial(index)}
          className={`flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${
            currentTestimonial === index
              ? "border-pink scale-110"
              : "border-red hover:border-pink/50"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${testimonial.image})` }}
          ></div>
        </button>
      ))}
    </div>

    {/* Testimonial Content */}
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#18181B] backdrop-blur-sm rounded-xl border border-[#2B2B2F] p-8 lg:p-12 relative shadow-2xl">
        
        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink/20 hover:bg-pink/40 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink/20 hover:bg-pink/40 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="text-center">
          
          {/* Stars */}
          <div className="flex justify-center space-x-1 mb-6">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 text-yellow-400 fill-current"
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8 italic">
            "{testimonials[currentTestimonial].text}"
          </blockquote>

          {/* User Info */}
          <div className="flex flex-col items-center">
            <div
              className="w-20 h-20 rounded-full bg-cover bg-center mb-4 border-4 border-pink"
              style={{
                backgroundImage: `url(${testimonials[currentTestimonial].image})`,
              }}
            ></div>

            <h4 className="text-xl font-semibold text-white">
              {testimonials[currentTestimonial].name}
            </h4>

            <p className="text-white">
              {testimonials[currentTestimonial].role}
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Testimonial Indicators */}
    <div className="flex justify-center space-x-3 mt-8">
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentTestimonial(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentTestimonial
              ? "bg-pink w-8"
              : "bg-white/30 hover:bg-white/50"
          }`}
        />
      ))}
    </div>
  </div>
</section>
  )
}
