"use client";

import { useState } from 'react';
import { Check, Star, Zap, Crown, Shield, Users, BarChart3, Wrench, Car, Package, CreditCard, Calendar, MessageCircle, TrendingUp, FileText, Printer } from 'lucide-react';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Standart",
      icon: <Shield className="w-8 h-8" />,
      description: "Küçük oto servisler için temel ihtiyaçlar",
      price: billingCycle === 'monthly' ? '₺799' : '₺8,500',
      originalPrice: billingCycle === 'monthly' ? '₺999' : '₺9,500',
      features: [
        "Dashboard & Analitik",
        "Servis Yönetimi",
        "Arıza Yönetimi",
        "Müşteri Yönetimi",
        "Tedarikçi Yönetimi",
        "Envanter Yönetimi",
        "Randevu Yönetimi",
        "Eğitim Desteği",
        "Kurulum Desteği",
      ],
      notIncluded: [
        "Anlaşma Yönetimi",
        "Personel Yönetimi",
        "Lastik Oteli",
        "Gider Yönetimi",
        "Kullanıcı Yönetimi",
        "Yazıcı Çıktısı",
        "7/24 Destek",
        "Not Yönetimi (Gelişmiş)",
        "Özel Geliştirmeler",
        "Özel Entegrasyonlar (isteğe bağlı özel)",
        "Öncelikli Destek",
        "Özel Eğitim"
      ],
      limitations: [],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Pro",
      icon: <Zap className="w-8 h-8" />,
      description: "Orta ölçekli servisler için gelişmiş özellikler",
      price: billingCycle === 'monthly' ? '₺1199' : '₺13,000',
      originalPrice: billingCycle === 'monthly' ? '₺1399' : '₺14,388',
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
      ],
      notIncluded: [
        "Kullanıcı Yönetimi",
        "Lastik Oteli",
        "Özel Geliştirmeler",
        "Anlaşma Yönetimi",
        "Özel Entegrasyonlar (isteğe bağlı özel)",
        "Öncelikli Destek",
        "Özel Eğitim"
      ],
      limitations: [],
      popular: true,
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Premium",
      icon: <Crown className="w-8 h-8" />,
      description: "Büyük servisler ve şirketler için kurumsal çözümler",
      price: billingCycle === 'monthly' ? '₺1,599' : '₺14,388',
      originalPrice: billingCycle === 'monthly' ? '₺1,999' : '₺19,188',
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
      notIncluded: [],
      limitations: [
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const modules = [
    { name: "Dashboard & Analitik", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Servis Yönetimi", icon: <Wrench className="w-5 h-5" /> },
    { name: "Arıza Yönetimi", icon: <Shield className="w-5 h-5" /> },
    { name: "Envanter Yönetimi", icon: <Package className="w-5 h-5" /> },
    { name: "Müşteri Yönetimi", icon: <Car className="w-5 h-5" /> },
    { name: "Tedarikçi Yönetimi", icon: <Package className="w-5 h-5" /> },
    { name: "Anlaşma Yönetimi", icon: <Check className="w-5 h-5" /> },
    { name: "Personel Yönetimi", icon: <Users className="w-5 h-5" /> },
    { name: "Lastik Oteli", icon: <Package className="w-5 h-5" /> },
    { name: "Not Yönetimi", icon: <FileText className="w-5 h-5" /> },
    { name: "Randevu Yönetimi", icon: <Calendar className="w-5 h-5" /> },
    { name: "Gider Yönetimi", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Kullanıcı Yönetimi", icon: <Shield className="w-5 h-5" /> },
    { name: "Yazıcı Çıktısı", icon: <Printer className="w-5 h-5" /> },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sizin İhtiyacınıza Uygun Paket
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Repavent&apos;in kapsamlı modüllerini işletmenizin büyüklüğüne göre seçin. 
            Her paket, oto servisinizi dijitalleştirmek için gerekli araçları içerir.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yıllık
              <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Özel İndirim
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
              } ${
                plan.name === "Standart" ? 'bg-gray-50' :
                plan.name === "Pro" ? 'bg-blue-50' :
                plan.name === "Premium" ? 'bg-amber-50' : 'bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    En Popüler
                  </div>
                </div>
              )}

              <div className={`bg-gradient-to-r ${plan.color} p-8 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  {plan.icon}
                  {plan.popular && <Star className="w-6 h-6 text-yellow-300" />}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-blue-100 text-sm">{plan.description}</p>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-2">
                      /{billingCycle === 'monthly' ? 'ay' : 'yıl'}
                    </span>
                  </div>
                  {plan.originalPrice && (
                    <div className="flex items-center mt-2">
                      <span className="text-lg text-gray-400 line-through mr-2">
                        {plan.originalPrice}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded.length > 0 && (
                  <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="text-sm font-medium text-red-700 mb-2">Bu Pakette Bulunmayan Özellikler:</h4>
                    <ul className="space-y-1">
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-red-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  {plan.name} Paketini Seç
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Module Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">Modül Karşılaştırması</h3>
            <p className="text-gray-600 mt-2">
              Her pakette hangi modüllerin bulunduğunu detaylı olarak inceleyin
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Modül</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Standart</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Pro</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {modules.map((module, index) => {
                  // Check if module is in each plan's features
                  const inStandard = plans[0].features.some(feature => 
                    feature.includes(module.name) || 
                    (module.name === "Dashboard & Analitik" && feature.includes("Dashboard & Analitik"))
                  );
                  const inPro = plans[1].features.some(feature => 
                    feature.includes(module.name) || 
                    (module.name === "Dashboard & Analitik" && feature.includes("Dashboard & Analitik")) ||
                    (module.name === "Not Yönetimi" && feature.includes("Not Yönetimi"))
                  );
                  const inPremium = plans[2].features.some(feature => 
                    feature.includes(module.name) || 
                    (module.name === "Dashboard & Analitik" && feature.includes("Dashboard & Analitik")) ||
                    (module.name === "Not Yönetimi" && feature.includes("Not Yönetimi"))
                  );

                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {module.icon}
                          <span className="ml-3 text-sm font-medium text-gray-900">{module.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {inStandard ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {inPro ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {inPremium ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Hangi Paket Size Uygun?</h3>
            <p className="text-blue-100 mb-6">
              Paket seçiminde yardıma mı ihtiyacınız var? Uzman ekibimiz size en uygun çözümü önersin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905455620432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp&apos;tan Danışın
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 