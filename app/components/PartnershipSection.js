"use client";

import { Users, TrendingUp, Award, Globe, Handshake, Star, Zap, Target } from 'lucide-react';

export default function PartnershipSection() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Komisyon Kazanın",
      description: "Her satıştan yüksek komisyon oranları ile gelir elde edin",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Müşteri Portföyü",
      description: "Mevcut müşteri ağınızı genişletin ve yeni gelir kaynakları yaratın",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Özel Fiyatlar",
      description: "Bayi ve partnerlerimize özel indirimli fiyatlarla avantaj sağlayın",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Bölgesel Haklar",
      description: "Belirli bölgelerde özel satış hakları ve koruma alanları",
      color: "from-orange-500 to-red-600"
    }
  ];

  const partnershipTypes = [
    {
      type: "Bayilik",
      icon: <Handshake className="w-12 h-12" />,
      description: "Resmi bayi olarak markamızı temsil edin ve özel avantajlardan yararlanın",
      features: [
        "Özel bayi fiyatları",
        "Bölgesel satış hakları",
        "Bayi kimlik kartı ve materyalleri",
        "Öncelikli teknik destek",
        "Bayi eğitim programları",
        "Satış sonrası destek"
      ],
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      type: "Partnerlik",
      icon: <Star className="w-12 h-12" />,
      description: "Stratejik partner olarak birlikte büyüyün ve karşılıklı fayda sağlayın",
      features: [
        "Ortak pazarlama kampanyaları",
        "Cross-selling fırsatları",
        "Referans komisyonları",
        "Ortak etkinlikler",
        "Network genişletme",
        "Uzun vadeli işbirliği"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      type: "Satış Ortaklığı",
      icon: <Target className="w-12 h-12" />,
      description: "Yazılım paketlerimizi satarak komisyon kazanın ve gelirinizi artırın",
      features: [
        "Yüksek komisyon oranları",
        "Satış eğitimi ve materyalleri",
        "Müşteri yönlendirme sistemi",
        "Performans takibi",
        "Ödül programları",
        "Sürekli destek"
      ],
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section id="partnership" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
            <Handshake className="w-4 h-4 mr-2" />
            İş Ortaklığı
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bayilik & 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Partnerlik</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Reklamımızı yapıp paket yazılımlarımızı satarak komisyon kazanın! Aylık veya tek seferlik ödeme planlarına göre 
            size özel fiyatlarla gelir elde edin. Ayrıca kişiye özel getireceğiniz müşteri projelerinden de komisyon alabilirsiniz.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 text-center">{benefit.title}</h3>
              <p className="text-gray-300 text-sm text-center leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {partnershipTypes.map((partnership, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${partnership.bgColor} rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:shadow-3xl transition-all duration-500`}
            >
              {/* Background Pattern */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${partnership.color} rounded-full opacity-10 -translate-y-16 translate-x-16 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${partnership.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {partnership.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{partnership.type}</h3>
                  <p className="text-gray-600 leading-relaxed">{partnership.description}</p>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {partnership.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${partnership.color} rounded-full flex-shrink-0`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Action Button */}
                <div className="text-center">
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${partnership.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105 cursor-pointer`}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Başvuru Yap
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Hemen Ortak Olun
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Bayilik, partnerlik veya satış ortaklığı fırsatlarını kaçırmayın! 
              Uzman ekibimiz ile detaylı bilgi alın ve size en uygun işbirliği modelini belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Ortaklık Başvurusu
              </button>
              <a 
                href="https://wa.me/905455620432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 