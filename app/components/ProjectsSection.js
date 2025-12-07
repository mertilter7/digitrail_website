"use client";

import { Code, Car, Zap, Building2, Dumbbell, GraduationCap, Sparkles } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Repavent Oto Servis",
      description: "Oto servis yönetim sistemi ile randevu takibi, müşteri yönetimi ve stok kontrolü",
      icon: <Car className="w-12 h-12" />,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-50 via-purple-50 to-pink-50",
      features: [
        "Dashboard & Analitik",
        "Servis Yönetimi",
        "Arıza Yönetimi",
        "Envanter Yönetimi",
        "Müşteri Yönetimi",
        "Tedarikçi Yönetimi",
        "Anlaşma Yönetimi",
        "Personel Yönetimi",
        "Lastik Oteli",
        "Not Yönetimi",
        "Randevu Yönetimi",
        "Bildirim Sistemi",
        "Gider Yönetimi",
        "Kullanıcı Yönetimi",
        "Yazıcı Çıktısı",
      ],
      status: "Tamamlandı"
    },
    {
      id: 2,
      title: "SOLOCADEMIA",
      description: "Özel ders veren eğitimciler için geliştirilmiş kapsamlı yönetim sistemi. Hem website tanıtım sayfası hem de yönetim panelini içinde barındıran proje.",
      icon: <GraduationCap className="w-12 h-12" />,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-50 via-emerald-50 to-teal-50",
      features: [
        "Öğrenci Kaydı",
        "Öğrenci İşlem Kaydı",
        "Ders Takvimi",
        "Raporlar Dashboard",
        "Gelir Takibi Modülü",
        "Gider Takibi Modülü",
        "Bilanço Finans Modülü",
        "Gelen Kutusu",
        "Detaylı Dashboard Raporları"
      ],
      status: "Tamamlandı"
    },
    {
      id: 3,
      title: "Car Detailing & Car Wash",
      description: "Car Detailing & Car Wash alanında hizmet veren kişi veya kurumlar için modern güncel teknolojiler ile donatılmış kullanım kolaylığı ve tanıtım websitesi tarafında SEO ve modern tasarım kurallarına göre oluşan proje.",
      icon: <Sparkles className="w-12 h-12" />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 via-red-50 to-pink-50",
      features: [
        "Müşteri Kayıt Modülü",
        "Anlaşmalar Modülü",
        "Detaylı İşlem Kaydı Modülü",
        "Randevu Modülü",
        "Gelen Kutusu Modülü",
        "Gelir Takibi Modülü",
        "Gider Modülü",
        "Bilanço Modülü",
        "Dashboard Rapor Ekranı"
      ],
      status: "Tamamlandı"
    },
    {
      id: 4,
      title: "Kişiye Kuruma Özel Yazılımlar",
      description: "Anahtar teslim yazılım hizmeti ile özel ihtiyaçlarınıza uygun çözümler",
      icon: <Zap className="w-12 h-12" />,
      gradient: "from-amber-500 via-yellow-500 to-orange-500",
      bgGradient: "from-amber-50 via-yellow-50 to-orange-50",
      features: ["Özel Yazılım", "Web Uygulamaları", "Mobil Uygulamalar", "API Geliştirme"],
      status: "Sürekli"
    },
    {
      id: 5,
      title: "DYNASTY PORT",
      description: "Türkiye'nin en gelişmiş emlak yazılımı ve gayrimenkul otomasyon sistemi ile portföyünüzü kolayca yönetin",
      icon: <Building2 className="w-12 h-12" />,
      gradient: "from-slate-700 via-blue-800 to-indigo-900",
      bgGradient: "from-slate-50 via-blue-50 to-indigo-50",
      features: [
        "6 Portföy Tipi",
        "Muhit Bilgileri",
        "Müşteri CRM",
        "Randevu & Bildirim",
        "Kira Sözleşmesi",
        "Satış Takibi",
        "Şube Yönetimi",
        "Gelen Kutusu",
        "Dashboard",
        "Website Entegre",
        "Danışman Atama",
        "Satış Modülü",
      ],
      status: "Tamamlandı"
    },
    {
      id: 6,
      title: "Fitness Salon Yönetim Sistemi",
      description: "Fitness salonları için üye yönetimi, antrenman programları ve ödeme takibi",
      icon: <Dumbbell className="w-12 h-12" />,
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      bgGradient: "from-violet-50 via-purple-50 to-indigo-50",
      features: [
        "Üye Yönetimi",
        "Üyelik Paketleri",
        "Antrenman Programları",
        "Randevu Sistemi",
        "Ödeme Takibi",
        "Antrenör Yönetimi",
        "Egzersiz Kütüphanesi",
        "Raporlama"
      ],
      status: "Planlanıyor"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            Portföyümüz
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tamamlanan & Geliştirilen
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Ürünlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Farklı sektörlerde geliştirdiğimiz projeler ve müşterilerimizin ihtiyaçlarına özel çözümler. 
            Her proje, modern teknolojiler ve yaratıcı tasarımlarla hayata geçirildi.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative bg-gradient-to-br ${project.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full opacity-10 -translate-y-16 translate-x-16 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${project.gradient} rounded-full opacity-10 translate-y-12 -translate-x-12 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'Tamamlandı' ? 'bg-green-100 text-green-800' :
                    project.status === 'Geliştiriliyor' ? 'bg-blue-100 text-blue-800' :
                    project.status === 'Planlanıyor' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  {project.id === 1 || project.id === 2 || project.id === 3 || project.id === 5 ? (
                    // Repavent Oto Servis, SOLOCADEMIA, Car Detailing ve DYNASTY PORT için 3 sütunlu grid
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full flex-shrink-0`}></div>
                          <span className="text-gray-700 text-xs leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Diğer projeler için normal liste
                    <div className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full flex-shrink-0`}></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Action Button */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  {project.id === 1 ? (
                    // Repavent Oto Servis için iki buton
                    <>
                      <a 
                        href="https://www.repavent.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105 cursor-pointer`}
                      >
                        Detaylı İncele
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <button 
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className={`inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group-hover:scale-105 cursor-pointer`}
                      >
                        Detaylı Bilgi Al
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  ) : project.id === 5 ? (
                    // DYNASTY PORT için iki buton
                    <>
                      <a 
                        href="https://www.dynastyport.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105 cursor-pointer`}
                      >
                        Ziyaret Et
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <button 
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className={`inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group-hover:scale-105 cursor-pointer`}
                      >
                        Detaylı Bilgi Al
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    // Diğer projeler için normal buton
                    <button 
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                      className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105 cursor-pointer`}
                    >
                      Detaylı Bilgi Al
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-opacity-20 group-hover:border-${project.gradient.split('-')[1]}-200 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Projenizi Hayata Geçirelim
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Benzer bir proje mi geliştirmek istiyorsunuz? Uzman ekibimiz ile projenizi planlayalım ve 
              modern teknolojilerle hayata geçirelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                <Code className="w-5 h-5 mr-2" />
                Proje Teklifi Al
              </button>
              <a 
                href="https://wa.me/905455620432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer"
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
