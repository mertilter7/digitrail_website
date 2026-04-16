"use client";

import { Check, Star, Crown, MessageCircle } from 'lucide-react';

export default function PricingSection() {

  const packageInfo = {
    name: "Repavent Oto Servis - Tam Paket",
    icon: <Crown className="w-10 h-10" />,
    description: "Oto servis işletmeniz için eksiksiz çözüm. Tüm özellikler dahil, tek paket!",
    setupPrice: "₺30,000",
    monthlyPrice: "₺1,500",
    features: [
      "Dashboard & Analitik (Gelişmiş)",
      "Servis Yönetimi",
      "Arıza Yönetimi",
      "Müşteri Yönetimi",
      "Envanter Yönetimi",
      "Tedarikçi Yönetimi",
      "Personel Yönetimi",
      "Randevu Yönetimi",
      "Gider Yönetimi",
      "Not Yönetimi (Gelişmiş)",
      "Yazıcı Çıktısı",
      "3 Ay Teknik Destek",
      "Kurulum Desteği",
      "7/24 Destek",
      "Kullanıcı Yönetimi",
      "Lastik Oteli",
      "Anlaşma Yönetimi",
      "Özel Entegrasyonlar (isteğe bağlı özel)",
      "Öncelikli Destek",
      "Özel Eğitim",
      "Özel Geliştirmeler"
    ],
    color: "from-blue-600 to-purple-600"
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Repavent Fiyatlandırma
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Oto servisinizi dijitalleştirin. Tüm özellikler dahil, eksiksiz çözüm!
          </p>
        </div>

        {/* Single Pricing Card */}
        <div data-aos="zoom-in-up" className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-slate-950/55 backdrop-blur-sm border border-white/10">
            {/* Popular Badge */}
            <div className="absolute top-2 left-2 z-50">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Star className="w-5 h-5" />
                Eksiksiz Çözüm
              </div>
            </div>

            {/* Header */}
            <div className={`bg-gradient-to-r ${packageInfo.color} p-8 lg:p-12 text-white text-center`}>
              <div className="flex justify-center mb-6">
                {packageInfo.icon}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">{packageInfo.name}</h3>
              <p className="text-blue-100 text-lg">{packageInfo.description}</p>
            </div>

            {/* Pricing */}
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Setup Fee */}
                <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-400/20">
                  <div className="text-sm text-slate-300 mb-2">İlk Kurulum</div>
                  <div className="text-4xl font-extrabold text-white mb-2">{packageInfo.setupPrice}</div>
                  <div className="text-sm text-slate-300">Tek seferlik ödeme</div>
                  <div className="mt-3 text-xs text-slate-400">
                    ✓ Kurulum & Eğitim Dahil
                  </div>
                </div>

                {/* Monthly Fee */}
                <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-400/20">
                  <div className="text-sm text-slate-300 mb-2">Aylık Ödeme</div>
                  <div className="text-4xl font-extrabold text-white mb-2">{packageInfo.monthlyPrice}</div>
                  <div className="text-sm text-slate-300">/ay</div>
                  <div className="mt-3 text-xs text-slate-400">
                    ✓ Bakım & Sunucu Dahil
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-6 text-center">
                  Tüm Özellikler Dahil
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {packageInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white/5 border border-white/10 rounded-lg p-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-5 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                Hemen Başlayın
              </button>

              {/* Info Box */}
              <div className="mt-6 bg-blue-500/10 rounded-xl p-4 border border-blue-400/20">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-200">
                    <strong className="text-blue-200">Hemen başlayın!</strong> Kurulum desteği ve 3 ay teknik destek ile sisteminiz hazır.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Sorularınız mı var?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Sistemi yakından görmek ister misiniz? Uzman ekibimiz size demo sunumu yapabilir!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905455620432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 lg:px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan İletişime Geçin
              </a>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center justify-center"
              >
                Demo Talep Et
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 