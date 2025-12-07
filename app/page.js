"use client";
import { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SolutionsSection from './components/SolutionsSection';
import ProjectsSection from './components/ProjectsSection';
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
      <nav className="bg-white/90 backdrop-blur-xl border-b border-blue-200/30 sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="hover:scale-110 transition-transform duration-200">
                <Image 
                  src="/digilogo.png" 
                  alt="DigiTrail Logo" 
                  width={65} 
                  height={65} 
                  className="mr-3 rounded-lg"
                />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-500 hover:scale-105 transition-all duration-200 font-medium">Ana Sayfa</a>
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-200 font-medium">Hizmetler</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 hover:scale-105 transition-all duration-200 font-medium">Projelerimiz</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 hover:scale-105 transition-all duration-200 font-medium">Fiyatlandırma</a>
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
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl z-40">
              <div className="flex flex-col space-y-3 p-4">
                <a 
                  href="#home" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-500 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Ana Sayfa
                </a>
                <a 
                  href="#solutions" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Hizmetler
                </a>
                <a 
                  href="#projects" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Projelerimiz
                </a>
                <a 
                  href="#pricing" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Fiyatlandırma
                </a>
                <a 
                  href="#partnership" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  Ortaklık
                </a>
                                  <a 
                    href="#about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-pink-500 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                  >
                  Hakkımızda
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
                >
                  İletişim
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
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
            <span className="font-semibold text-gray-800">Profesyonel web siteleri</span>, 
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

      {/* Pricing Section - Repavent Oto Servis */}
      <div className="hidden">
        <PricingSection />
      </div>

      {/* Partnership Section - Bayilik & Partnerlik */}
      <PartnershipSection />

      {/* Contact Form Section - New Modern Component */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">DigiTrail</h3>
              <p className="text-gray-400 mb-4">
                Dijital dünyada izinizi bırakın. Modern teknolojiler ile işinizi büyütün.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/digitrail.agency/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-200 cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.repavent.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <span className="ml-1 text-sm">Repavent Website</span>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#solutions" className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Yazılım Geliştirme</a></li>
                <li><a href="#solutions" className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Web Tasarım</a></li>
                <li><a href="#solutions" className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Sosyal Medya</a></li>
                <li><a href="#solutions" className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Dijital Pazarlama</a></li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#projects" className="hover:text-purple-400 transition-colors duration-200 cursor-pointer">Projelerimiz</a></li>
                <li><a href="#pricing" className="hover:text-green-400 transition-colors duration-200 cursor-pointer">Fiyatlandırma</a></li>
                <li><a href="#partnership" className="hover:text-indigo-400 transition-colors duration-200 cursor-pointer">Ortaklık</a></li>
                <li><a href="#about" className="hover:text-pink-400 transition-colors duration-200 cursor-pointer">Hakkımızda</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">İletişim</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigiTrail. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
