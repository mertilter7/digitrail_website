"use client";

import { Check, X } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: "Standart",
      price: "₺599",
      originalPrice: "₺799",
      period: "/ay",
      description: "Küçük oto servisler için ideal başlangıç paketi",
      features: [
        "Dashboard & Analitik",
        "Müşteri Yönetimi",
        "Servis Yönetimi",
        "Arıza Kayıtları",
        "Envanter Yönetimi",
        "Kullanıcı Yönetimi",
        "Temel Raporlama",
        "15 Günlük Teknik Destek"
      ],
      notIncluded: [
        "Takvim Sistemi",
        "Personel Yönetimi",
        "Gelir & Gider Takibi",
        "Bilanço & Raporlama",
        "Notlar & Hatırlatmalar",
        "Tedarikçi Yönetimi",
        "Lastik Deposu (Oteli)",
      ],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Pro",
      price: "₺799",
      originalPrice: "₺1099",
      period: "/ay",
      description: "Orta ölçekli servisler için kapsamlı çözüm",
      features: [
        "Dashboard & Analitik",
        "Müşteri Yönetimi",
        "Servis Yönetimi",
        "Arıza Kayıtları",
        "Envanter Yönetimi",
        "Fatura & Ödeme",
        "Takvim Sistemi",
        "Gelir & Gider Takibi",
        "Tedarikçi Yönetimi",
        "Notlar & Hatırlatmalar",
        "Kullanıcı Yönetimi",
        "Bilanço & Raporlama",
        "1 Ay Teknik Destek",
        "Eğitim Desteği",
      ],
      notIncluded: [
        "Personel Yönetimi",
        "Lastik Deposu (Oteli)",
        "Öncelikli Destek",
        "3 Ay Teknik Destek",
        "Özel Kurulum Desteği",
        "7/24 Acil Destek"
      ],
      popular: true,
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Business",
      price: "₺1399",
      originalPrice: "₺1599",
      period: "/ay",
      description: "Büyük servisler ve zincirler için tam çözüm",
      features: [
        "Dashboard & Analitik",
        "Servis Yönetimi",
        "Müşteri Yönetimi",
        "Arıza Kayıtları",
        "Envanter Yönetimi",
        "Fatura & Ödeme",
        "Takvim Sistemi",
        "Personel Yönetimi",
        "Gelir & Gider Takibi",
        "Tedarikçi Yönetimi",
        "Notlar & Hatırlatmalar",
        "Kullanıcı Yönetimi",
        "Bilanço & Raporlama",
        "Lastik Deposu (Oteli)",
        "Öncelikli Destek",
        "3 Ay Teknik Destek",
        "Eğitim Desteği",
        "Özel Kurulum Desteği",
        "7/24 Acil Destek",
      ],
      notIncluded: [],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl xl:text-4xl font-bold text-gray-900 mb-4">
            Size Uygun Paketi Seçin
          </h2>
          <p className="xl:text-xl text-gray-600 max-w-3xl mx-auto">
            İşletmenizin büyüklüğüne ve ihtiyaçlarına göre en uygun paketi seçin. 
            Tüm paketler 19 modülümüzden oluşur ve teknik destek ile eğitim hizmetleri içerir.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 xl:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl scale-105 bg-gradient-to-br from-white to-blue-50' 
                  : plan.name === "Business"
                  ? 'border-yellow-400 shadow-2xl scale-105 bg-gradient-to-br from-white to-yellow-50'
                  : plan.name === "Standart"
                  ? 'border-amber-600 shadow-2xl scale-105 bg-gradient-to-br from-amber-50 to-orange-50'
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    🚀 EN POPÜLER
                  </span>
                </div>
              )}
              {plan.name === "Business" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ PREMIUM
                  </span>
                </div>
              )}
              {plan.name === "Standart" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    🏆 BAŞLANGIÇ
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                {plan.originalPrice && (
                  <div className="mb-2">
                    <span className="text-lg text-red-500 line-through mr-2">{plan.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                      İNDİRİM
                    </span>
                  </div>
                )}
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Dahil Olan Özellikler:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              {plan.notIncluded.length > 0 && (
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Dahil Olmayan Özellikler:</h4>
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-500 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg'
                  : plan.name === "Business"
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700 shadow-lg'
                  : plan.name === "Standart"
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                {plan.popular ? '🚀 Pro Paket' : plan.name === "Business" ? '⭐ Premium Paket' : plan.name === "Standart" ? '🏆 Başlangıç Paketi' : 'Paketi Seç'}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Teknik destek ve eğitim hizmetleri paketlerinize dahildir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/905455620432" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 inline-block cursor-pointer"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 