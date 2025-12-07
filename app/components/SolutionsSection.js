"use client";

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { 
  Code, 
  Palette, 
  Instagram, 
  Building2, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

// Swiper CSS'leri globals.css'te import edildi

export default function SolutionsSection() {
  const swiperRef = useRef(null);

  const solutions = [
    {
      id: 'software',
      icon: <Code className="w-16 h-16" />,
      title: 'Yazılım Geliştirme',
      subtitle: 'Modern Teknolojiler',
      description: 'Web uygulamaları, mobil uygulamalar, masaüstü yazılımları ve özel çözümler geliştiriyoruz. En güncel teknolojileri kullanarak İşletmenizin dijital dönüşümünü hızlandırıyoruz.',
      features: [
        'Web Uygulamaları',
        'Mobil Uygulamalar',
        'Masaüstü Yazılımları',
        'API Geliştirme',
        'Veritabanı Tasarımı',
        'Sistem Entegrasyonu'
      ],
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      id: 'web-design',
      icon: <Palette className="w-16 h-16" />,
      title: 'Web Tasarım',
      subtitle: 'Kullanıcı Odaklı',
      description: 'Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz. SEO uyumlu, hızlı ve güvenli web siteleri ile online varlığınızı güçlendiriyoruz.',
      features: [
        'Responsive Tasarım',
        'UI/UX Tasarımı',
        'E-ticaret Siteleri',
        'Kurumsal Web Siteleri',
        'Landing Page Tasarımı',
        'SEO Optimizasyonu'
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      id: 'social-media',
      icon: <Instagram className="w-16 h-16" />,
      title: 'Sosyal Medya Tasarımı',
      subtitle: 'Görsel İletişim',
      description: 'Markanızı sosyal medyada öne çıkaracak görsel tasarımlar oluşturuyoruz. Instagram, Facebook, LinkedIn ve diğer platformlar için özel içerik tasarımları.',
      features: [
        'Instagram Post Tasarımı',
        'Facebook Banner Tasarımı',
        'LinkedIn Görselleri',
        'Story Tasarımları',
        'Carousel Post Tasarımı',
        'Marka Kimliği Uyumlu'
      ],
      color: 'from-pink-600 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      id: 'corporate-identity',
      icon: <Building2 className="w-16 h-16" />,
      title: 'Kurumsal Kimlik Oluşturma',
      subtitle: 'Marka Kimliği',
      description: 'İşletmenizin profesyonel kimliğini oluşturuyoruz. Logo tasarımından kurumsal kimlik kılavuzuna kadar tüm marka kimliği süreçlerini yönetiyoruz.',
      features: [
        'Logo Tasarımı',
        'Kurumsal Kimlik Kılavuzu',
        'Kartvizit Tasarımı',
        'Antetli Kağıt Tasarımı',
        'Broşür Tasarımı',
        'Marka Stratejisi'
      ],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50'
    },
    {
      id: 'meta-ads',
      icon: <TrendingUp className="w-16 h-16" />,
      title: 'Meta Reklamları',
      subtitle: 'Dijital Pazarlama',
      description: 'Facebook, Instagram ve diğer Meta platformlarında etkili reklam kampanyaları oluşturuyoruz. Hedef kitle analizi ve performans takibi ile sonuç odaklı reklamlar.',
      features: [
        'Facebook Reklamları',
        'Instagram Reklamları',
        'Hedef Kitle Analizi',
        'Reklam Optimizasyonu',
        'Performans Takibi',
        'ROI Analizi'
      ],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 md:opacity-40 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 md:opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 md:opacity-40 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-15 md:opacity-35 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            Çözümlerimiz
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kapsamlı Dijital
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İşletmenizin dijital dönüşümü için ihtiyaç duyduğunuz tüm hizmetleri tek platformda sunuyoruz. 
            Modern teknolojiler ve yaratıcı tasarımlarla markanızı öne çıkarıyoruz.
          </p>
        </div>

        {/* Solutions Slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            }}
            className="solutions-swiper"
          >
            {solutions.map((solution, index) => (
              <SwiperSlide key={solution.id}>
                <div className={`bg-gradient-to-br ${solution.bgColor} rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.color} rounded-full opacity-10 -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${solution.color} rounded-full opacity-10 translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Left Side - Content */}
                      <div className="space-y-6">
                        <div className="flex flex-col lg:flex-row lg:items-center space-x-4 mb-6">
                          <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                            {solution.icon}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mt-3.5 lg:mt-0">{solution.title}</h3>
                            <p className="text-lg text-gray-600">{solution.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {solution.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {solution.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className={`w-5 h-5 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="pt-4">
                          <button 
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${solution.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 group`}
                          >
                            Detaylı Bilgi Al
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Right Side - Visual */}
                      <div className="relative">
                        <div className={`w-full h-80 bg-gradient-to-br ${solution.color} rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                          <div className="relative z-10 text-center text-white">
                            <div className="text-6xl mb-4 opacity-80">
                              {solution.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-2">{solution.title}</h4>
                            <p className="text-lg opacity-90">{solution.subtitle}</p>
                          </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className={`w-8 h-8 bg-gradient-to-r ${solution.color} rounded-full`}></div>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className={`w-6 h-6 bg-gradient-to-r ${solution.color} rounded-full`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !w-12 !h-12 !bg-white/80 backdrop-blur-sm !rounded-full !text-gray-700 hover:!bg-white transition-all duration-200 shadow-lg border border-white/20"></div>
          <div className="swiper-button-next !w-12 !h-12 !bg-white/80 backdrop-blur-sm !rounded-full !text-gray-700 hover:!bg-white transition-all duration-200 shadow-lg border border-white/20"></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Projelerinizi Hayata Geçirelim
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hangi alanda hizmet almak istiyorsunuz? Uzman ekibimiz ile detaylı bilgi alın ve 
            projelerinizi birlikte planlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Hemen Teklif Al
            </button>
            <a 
              href="https://wa.me/905455620432" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .solutions-swiper .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.3;
        }
        .solutions-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #3b82f6;
        }
        .solutions-swiper .swiper-button-prev::after,
        .solutions-swiper .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
} 