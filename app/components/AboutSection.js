"use client";

import { Users, TrendingUp, CheckCircle, ArrowRight, Code, Smartphone, Target, Building2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-2xl opacity-10 md:opacity-25 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-screen filter blur-2xl opacity-10 md:opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-screen filter blur-2xl opacity-10 md:opacity-25 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 right-32 w-72 h-72 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mix-blend-screen filter blur-2xl opacity-10 md:opacity-25 animate-blob"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Hakkımızda
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Güvenilir Teknoloji
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Partneriniz</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Digitrail olarak 7 yıldır profesyonel sektör deneyimi ile büyük ölçekli banka, kurum, 
            kuruluş ve özel şirketlerin yazılım projelerini hayata geçiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Company Story */}
          <div className="space-y-8">
            <div data-aos="fade-right" className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mr-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                Deneyim & Uzmanlık
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">7 Yıllık Sektör Deneyimi</h4>
                    <p className="text-slate-300 text-sm">Bankacılık, finans ve kurumsal yazılım projelerinde uzmanlaşmış ekibimiz</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Büyük Ölçekli Projeler</h4>
                    <p className="text-slate-300 text-sm">Banka, kurum ve kuruluşların karmaşık yazılım ihtiyaçlarını karşılıyoruz</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Kapsamlı Hizmet Yelpazesi</h4>
                    <p className="text-slate-300 text-sm">Yazılım geliştirmeden sosyal medya yönetimine kadar tüm dijital ihtiyaçlar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Services & Stats */}
          <div className="space-y-6">
            {/* Services Overview */}
            <div data-aos="fade-left" className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center">Hizmet Alanlarımız</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <Code className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-medium">Yazılım Geliştirme</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <Smartphone className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-medium">Sosyal Medya</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <Target className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-medium">Dijital Pazarlama</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-medium">Kurumsal Çözümler</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Stats */}
            <div data-aos="fade-left" data-aos-delay="120" className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Rakamlarla Digitrail</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">7+</div>
                  <div className="text-sm text-slate-300">Yıl Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">100+</div>
                  <div className="text-sm text-slate-300">Tamamlanan Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">50+</div>
                  <div className="text-sm text-slate-300">Mutlu Müşteri</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-slate-300">Destek</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div data-aos="zoom-in-up" className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Projelerinizi Hayata Geçirelim
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Deneyimli ekibimiz ile yazılım projelerinizi, sosyal medya yönetiminizi ve 
            dijital pazarlama ihtiyaçlarınızı profesyonel bir şekilde karşılayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/905455620432" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Hemen İletişime Geç
            </a>
            <button 
              onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500/15 hover:border-blue-300 hover:text-white transition-all duration-200 cursor-pointer"
            >
              Çözümlerimizi İncele
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 