"use client";
import { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SolutionsSection from './components/SolutionsSection';
import ProjectsSection from './components/ProjectsSection';
import DynastyPricing from './components/DynastyPricing';
import PricingSection from './components/PricingSection';
import PartnershipSection from './components/PartnershipSection';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-[100] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="cursor-pointer">
                <Image 
                  src="/digilogo.png" 
                  alt="DigiTrail Logo" 
                  width={65} 
                  height={65} 
                  className="mr-3 rounded-lg"
                />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-500 hover:scale-105 transition-all duration-200 font-medium">Ana Sayfa</a>
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-200 font-medium">Hizmetler</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 hover:scale-105 transition-all duration-200 font-medium">Projelerimiz</a>
              <a href="#dynasty-pricing" className="text-gray-700 hover:text-green-600 hover:scale-105 transition-all duration-200 font-medium">Fiyatlandırma</a>
              <a href="#partnership" className="text-gray-700 hover:text-indigo-600 hover:scale-105 transition-all duration-200 font-medium">Ortaklık</a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 hover:scale-105 transition-all duration-200 font-medium">Hakkımızda</a>
              <a href="#contact" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:from-pink-600 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg">İletişim</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed top-16 left-0 right-0 bottom-0 bg-black/30 backdrop-blur-sm lg:hidden z-[80] animate-fade-in"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu Panel */}
              <div className="fixed top-16 left-0 right-0 lg:hidden z-[90] animate-slide-down">
                <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-b-3xl max-h-[calc(100vh-4rem)] overflow-hidden">
                  <div className="px-4 pt-4 pb-6 space-y-1 overflow-y-auto">
                    <a 
                      href="#home" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="animate-menu-item flex items-center space-x-4 px-4 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-100/50 hover:text-pink-600 rounded-xl transition-all duration-300 font-medium group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-pink-100 group-hover:bg-pink-600 rounded-lg transition-colors duration-300">
                        <svg className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <span className="flex-1">Ana Sayfa</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    
                    <a 
                      href="#solutions" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="animate-menu-item flex items-center space-x-4 px-4 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/50 hover:text-blue-600 rounded-xl transition-all duration-300 font-medium group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 group-hover:bg-blue-600 rounded-lg transition-colors duration-300">
                        <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <span className="flex-1">Hizmetler</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    
                    <a 
                      href="#projects" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="animate-menu-item flex items-center space-x-4 px-4 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100/50 hover:text-purple-600 rounded-xl transition-all duration-300 font-medium group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-purple-100 group-hover:bg-purple-600 rounded-lg transition-colors duration-300">
                        <svg className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <span className="flex-1">Projelerimiz</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    
                    <a 
                      href="#dynasty-pricing" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="animate-menu-item flex items-center space-x-4 px-4 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-100/50 hover:text-green-600 rounded-xl transition-all duration-300 font-medium group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-green-100 group-hover:bg-green-600 rounded-lg transition-colors duration-300">
                        <svg className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="flex-1">Fiyatlandırma</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    
                    <a 
                      href="#partnership" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="animate-menu-item flex items-center space-x-4 px-4 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100/50 hover:text-indigo-600 rounded-xl transition-all duration-300 font-medium group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 group-hover:bg-indigo-600 rounded-lg transition-colors duration-300">
                        <svg className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="flex-1">Ortaklık</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    
                    <a 
                      href="#about" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="animate-menu-item flex items-center space-x-4 px-4 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100/50 hover:text-pink-600 rounded-xl transition-all duration-300 font-medium group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-pink-100 group-hover:bg-pink-600 rounded-lg transition-colors duration-300">
                        <svg className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="flex-1">Hakkımızda</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    
                    <a 
                      href="#contact" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="animate-menu-item flex items-center space-x-4 px-4 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl transition-all duration-300 font-medium group hover:from-pink-600 hover:to-purple-700 shadow-lg"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="flex-1">İletişim</span>
                      <svg className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 md:opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 md:opacity-40 animate-blob animation-delay-2000"></div>
       
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 md:opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 md:opacity-40 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            Dijital Dönüşüm Uzmanları
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4">
            Dijital Dünyada
            <span className="block bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              İzinizi Bırakın
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Modern web teknolojileri ile işinizi dijital dünyaya taşıyoruz. 
            <span className="font-semibold text-gray-800"> Profesyonel web siteleri</span>, 
            <span className="font-semibold text-gray-800"> Özel yazılım çözümleri</span> ve 
            <span className="font-semibold text-gray-800"> dijital pazarlama stratejileri</span> ile 
            markanızı büyütün.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 px-4">
            <button 
              onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:from-pink-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 cursor-pointer"
            >
              <span className="flex items-center justify-center">
                <span>Kapsamlı Dijital Hizmetlerimiz</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 cursor-pointer"
            >
              <span className="flex items-center justify-center">
                <span>İletişime Geçin</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7+ Yıl Deneyim</h3>
              <p className="text-gray-600 text-sm">Sektörde kanıtlanmış uzmanlık</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600 text-sm">Zamanında proje tamamlama</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7/24 Destek</h3>
              <p className="text-gray-600 text-sm">Kesintisiz teknik destek</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Moved up for better flow */}
      <AboutSection />

      {/* Solutions Section - New Modern Component */}
      <SolutionsSection />

      {/* Projects Section - New Modern Component */}
      <ProjectsSection />

      {/* Dynasty Port Pricing Section */}
      <DynastyPricing />

      {/* Pricing Section - Repavent Oto Servis */}
      <PricingSection />

      {/* Partnership Section - Bayilik & Partnerlik */}
      <PartnershipSection />

      {/* Contact Form Section - New Modern Component */}
      <ContactForm />

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <Image 
                  src="/digilogo.png" 
                  alt="DigiTrail Logo" 
                  width={50} 
                  height={50} 
                  className="mr-3 rounded-lg"
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digitrail</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dijital dünyada izinizi bırakın. Modern teknolojiler ve yaratıcı çözümlerle işinizi büyütün.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/digitrail.agency/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg cursor-pointer"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/905455620432" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg cursor-pointer"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Hizmetlerimiz</h4>
              <ul className="space-y-3">
                <li><a href="#solutions" className="text-gray-300 hover:text-blue-400 transition-all duration-200 cursor-pointer flex items-center group"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>Yazılım Geliştirme</a></li>
                <li><a href="#solutions" className="text-gray-300 hover:text-purple-400 transition-all duration-200 cursor-pointer flex items-center group"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>Web Tasarım</a></li>
                <li><a href="#solutions" className="text-gray-300 hover:text-pink-400 transition-all duration-200 cursor-pointer flex items-center group"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>Sosyal Medya</a></li>
                <li><a href="#solutions" className="text-gray-300 hover:text-indigo-400 transition-all duration-200 cursor-pointer flex items-center group"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>Dijital Pazarlama</a></li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Hızlı Linkler</h4>
              <ul className="space-y-3">
                <li><a href="#projects" className="text-gray-300 hover:text-purple-400 transition-all duration-200 cursor-pointer flex items-center group"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>Projelerimiz</a></li>
                <li><a href="#dynasty-pricing" className="text-gray-300 hover:text-green-400 transition-all duration-200 cursor-pointer flex items-center group"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>Fiyatlandırma</a></li>
                <li><a href="#partnership" className="text-gray-300 hover:text-indigo-400 transition-all duration-200 cursor-pointer flex items-center group"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>Ortaklık</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-pink-400 transition-all duration-200 cursor-pointer flex items-center group"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>Hakkımızda</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-all duration-200 cursor-pointer flex items-center group"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>İletişim</a></li>
              </ul>
            </div>

            {/* Our Projects */}
            <div>
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Projelerimiz</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.repavent.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-all duration-200 cursor-pointer flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>
                    <span className="flex items-center">
                      Repavent Oto Servis
                      <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.dynastyport.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-emerald-400 transition-all duration-200 cursor-pointer flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>
                    <span className="flex items-center">
                      Dynasty Port
                      <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-gray-300 hover:text-purple-400 transition-all duration-200 cursor-pointer flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>
                    Tüm Projeler
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 <span className="font-semibold text-white">Digitrail</span>. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Gizlilik Politikası</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Kullanım Koşulları</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
