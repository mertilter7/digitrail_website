'use client';

export default function DynastyPricing() {
  const plans = [
    {
      name: "Danışman",
      description: "1-2 kişilik firma için ideal",
      setupPrice: 20000,
      originalSetupPrice: 25000,
      monthlyMaintenance: 1250,
      color: "from-blue-500 to-blue-600",
      features: [
        "Kurumsal Website",
        "İlan Yayınlama, Görüntüleme ve Filtreler",
        "Modern Website Görünümü",
        "SEO Uyumlu",
        "Güncel ve Modern Teknolojiler",
        "UI/UX Öncelikli Tasarım",
        "Sınırsız İlan",
        "Portföy Yönetimi (Daire, Villa, Arsa, İşyeri, Müstakil, Yazlık, Araba)",
        "Müşteri Yönetimi (ERP)",
        "Randevu Sistemi (Otomatik Bildirim)",
        "Kira Sözleşmeleri (PDF Oluşturma)",
        "Satış Takibi & Raporlama",
        "Şube Yönetimi (Çoklu Şube)",
        "Not Alma & Hatırlatıcılar",
        "Gelen Kutusu & Talep Yönetimi",
        "Kullanıcı Yönetimi (Rol Bazlı)",
        "Dashboard & Grafikler",
        "Görsel Yönetimi (Sınırsız Fotoğraf)",
        "Mobil Uyumlu",
        "7/24 Destek"
      ],
      popular: false
    },
    {
      name: "Orta Ölçekli Firma",
      description: "3-7 kullanıcı için",
      setupPrice: 45000,
      originalSetupPrice: 60000,
      monthlyMaintenance: 2000,
      color: "from-purple-500 to-purple-600",
      features: [
        "Kurumsal Website",
        "İlan Yayınlama, Görüntüleme ve Filtreler",
        "Modern Website Görünümü",
        "SEO Uyumlu",
        "Güncel ve Modern Teknolojiler",
        "UI/UX Öncelikli Tasarım",
        "Sınırsız İlan",
        "Portföy Yönetimi (Daire, Villa, Arsa, İşyeri, Müstakil, Yazlık, Araba)",
        "Müşteri Yönetimi (ERP)",
        "Randevu Sistemi (Otomatik Bildirim)",
        "Kira Sözleşmeleri (PDF Oluşturma)",
        "Satış Takibi & Raporlama",
        "Şube Yönetimi (Çoklu Şube)",
        "Not Alma & Hatırlatıcılar",
        "Gelen Kutusu & Talep Yönetimi",
        "Kullanıcı Yönetimi (Rol Bazlı)",
        "Dashboard & Grafikler",
        "Görsel Yönetimi (Sınırsız Fotoğraf)",
        "Mobil Uyumlu",
        "7/24 Destek"
      ],
      popular: true
    },
    {
      name: "Büyük Firma",
      description: "7+ kullanıcı için",
      setupPrice: 75000,
      originalSetupPrice: 120000,
      monthlyMaintenance: 2500,
      color: "from-orange-500 to-orange-600",
      features: [
        "Kurumsal Website",
        "İlan Yayınlama, Görüntüleme ve Filtreler",
        "Modern Website Görünümü",
        "SEO Uyumlu",
        "Güncel ve Modern Teknolojiler",
        "UI/UX Öncelikli Tasarım",
        "Sınırsız İlan",
        "Portföy Yönetimi (Daire, Villa, Arsa, İşyeri, Müstakil, Yazlık, Araba)",
        "Müşteri Yönetimi (ERP)",
        "Randevu Sistemi (Otomatik Bildirim)",
        "Kira Sözleşmeleri (PDF Oluşturma)",
        "Satış Takibi & Raporlama",
        "Şube Yönetimi (Çoklu Şube)",
        "Not Alma & Hatırlatıcılar",
        "Gelen Kutusu & Talep Yönetimi",
        "Kullanıcı Yönetimi (Rol Bazlı)",
        "Dashboard & Grafikler",
        "Görsel Yönetimi (Sınırsız Fotoğraf)",
        "Mobil Uyumlu",
        "7/24 Destek"
      ],
      popular: false
    }
  ];

  return (
    <section id="dynasty-pricing" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 md:opacity-40 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 md:opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 md:opacity-40 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-sm">Dynasty Port Fiyatlandırma</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Size Uygun 
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
            Planı Seçin
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong className="text-blue-700">DYNASTY PORT</strong> ile tek seferlik kurulum bedeli + aylık bakım ücreti ile 
            gayrimenkul yönetim sisteminizi kullanmaya başlayın.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-purple-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-bl-xl text-sm font-bold">
                  En Popüler
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} text-white mb-4`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {/* Original Price */}
                  <div className="text-gray-400 line-through text-lg mb-1">
                    {plan.originalSetupPrice.toLocaleString('tr-TR')} ₺
                  </div>
                  
                  {/* Setup Price */}
                  <div className="flex items-baseline mb-1">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.setupPrice.toLocaleString('tr-TR')}
                    </span>
                    <span className="text-gray-600 ml-2">₺</span>
                  </div>
                  <div className="text-gray-500 text-sm mb-2">
                    (KDV Dahil)
                  </div>
                  <div className="text-gray-600 font-medium mb-2">
                    Tek Seferlik Kurulum
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {((1 - plan.setupPrice / plan.originalSetupPrice) * 100).toFixed(0)}% İndirim
                  </div>

                  {/* Monthly Maintenance */}
                  <div className="mt-4 p-2 lg:p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <div className="text-sm lg:text-base font-bold text-blue-900">
                          Portföy Website + ERP
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-baseline justify-end">
                          <span className="lg:text-2xl font-bold text-blue-900">
                            {plan.monthlyMaintenance.toLocaleString('tr-TR')} ₺
                          </span>
                          <span className="text-blue-600 ml-2">/ ay</span>
                        </div>
                        <div className="text-blue-600 text-xs mt-1">
                          Aylık Bakım (KDV Dahil)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-2xl transform hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Hemen Başla
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Tüm fiyatlar KDV dahildir. Kurulum sonrası 7 gün ücretsiz destek sağlanır.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Güvenli Ödeme</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Ücretsiz Kurulum Desteği</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

