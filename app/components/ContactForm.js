"use client";

import { useState } from 'react';
import { Send, User, MessageSquare, Package } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    package: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const packages = [
    { value: '', label: 'Paket Seçiniz' },
    { value: 'standart', label: 'Standart Paket - ₺799/ay' },
    { value: 'pro', label: 'Pro Paket - ₺1199/ay' },
    { value: 'business', label: 'Business Paket - ₺1599/ay' },
    { value: 'lifetime', label: 'Sınırsız Erişim - Tek Seferlik Ödeme' },
    { value: 'partnership', label: 'Bayilik & Partnerlik' },
    { value: 'custom', label: 'Özel Yazılım Geliştirme' },
    { value: 'other', label: 'Diğer' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // FormSubmit servisi ile form gönderimi
      const response = await fetch('https://formsubmit.co/info@digitrailagency.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          package: formData.package,
          message: formData.description,
          _subject: `DigiTrail - ${formData.package || 'Genel'} Paket Talebi`,
          _captcha: false, // Captcha'yı kapat
          _template: 'table' // Tablo formatında e-posta
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Formu temizle
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          package: '',
          description: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            İletişime Geçin
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Digitrail hakkında bilgi almak veya hizmet talep etmek için iletişime geçin.
          </p>
        </div>
        
        <div data-aos="zoom-in-up" className="bg-slate-950/55 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/10">
          {/* Başarı/Hata Mesajları */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              ❌ Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp üzerinden iletişime geçin.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ad */}
              <div>
                <label htmlFor="firstName" className="block flex-items-center gap-2 text-sm font-medium text-slate-200 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Ad *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/10 bg-slate-950/40 text-slate-100 rounded-lg placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Adınızı giriniz"
                />
              </div>

              {/* Soyad */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-200 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Soyad *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/10 bg-slate-950/40 text-slate-100 rounded-lg placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Soyadınızı giriniz"
                />
              </div>

              {/* E-posta */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/10 bg-slate-950/40 text-slate-100 rounded-lg placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="ornek@email.com"
                />
              </div>

              {/* Telefon */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/10 bg-slate-950/40 text-slate-100 rounded-lg placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="0555 123 45 67"
                />
              </div>

              {/* Şirket */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-200 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Şirket Adı
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/10 bg-slate-950/40 text-slate-100 rounded-lg placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Şirket adınızı giriniz"
                />
              </div>

              {/* Paket Seçimi */}
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-slate-200 mb-2">
                  <Package className="w-4 h-4 inline mr-2" />
                  İlgilendiğiniz Paket
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/10 bg-slate-950/40 text-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  {packages.map((pkg, index) => (
                    <option key={index} value={pkg.value}>
                      {pkg.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Açıklama */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-200 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Mesajınız / Açıklama *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-white/10 bg-slate-950/40 text-slate-100 rounded-lg placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Mesajınızı veya sorularınızı buraya yazabilirsiniz..."
              ></textarea>
            </div>

            {/* Gönder Butonu */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center mx-auto ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:from-blue-700 hover:to-indigo-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Mesajı Gönder
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* İletişim Bilgileri */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div data-aos="fade-up" data-aos-delay="80" className="bg-slate-950/55 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">E-posta</h3>
            <p className="text-slate-300">info@digitrailagency.com</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="140" className="bg-slate-950/55 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Telefon</h3>
            <p className="text-slate-300">+90 545 562 04 32</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200" className="bg-slate-950/55 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Adres</h3>
            <p className="text-slate-300">Ankara, Türkiye</p>
          </div>
        </div>
      </div>
    </section>
  );
} 