'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Github,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    products: [
      { label: 'تطبيق الأندرويد', href: '/android-app' },
      { label: 'لوحة الإدارة', href: '/admin-panel' },
      { label: 'الخدمات', href: '/services' },
      { label: 'الأسعار', href: '/pricing' },
    ],
    company: [
      { label: 'عن الشركة', href: '/about' },
      { label: 'فريق العمل', href: '/team' },
      { label: 'المدونة', href: '/blog' },
      { label: 'الأخبار', href: '/news' },
    ],
    support: [
      { label: 'المساعدة', href: '/help' },
      { label: 'الدعم الفني', href: '/support' },
      { label: 'الوثائق', href: '/docs' },
      { label: 'الأسئلة الشائعة', href: '/faq' },
    ],
    legal: [
      { label: 'سياسة الخصوصية', href: '/privacy' },
      { label: 'شروط الاستخدام', href: '/terms' },
      { label: 'ملفات تعريف الارتباط', href: '/cookies' },
      { label: 'إخلاء المسؤولية', href: '/disclaimer' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/mymarket', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/mymarket', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/mymarket', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/mymarket', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/mymarket', label: 'GitHub' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+966 50 123 4567', href: 'tel:+966501234567' },
    { icon: Mail, text: 'info@mymarket.com', href: 'mailto:info@mymarket.com' },
    { icon: MapPin, text: 'الرياض، المملكة العربية السعودية', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      {/* Main Footer Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  My Market
                </span>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                منصة التجارة الإلكترونية الأكثر تطوراً في المنطقة، نقدم حلول متكاملة للأعمال التجارية الحديثة مع تطبيقات جوال متقدمة وأنظمة إدارة شاملة.
              </p>
              
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">المنتجات</h3>
              <ul className="space-y-4">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">الشركة</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">الدعم</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">تواصل معنا</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-blue-400" />
                      </div>
                      <a 
                        href={contact.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {contact.text}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-800/50 py-8 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-white mb-2">
                  ابق على تواصل معنا
                </h3>
                <p className="text-gray-400">
                  احصل على آخر الأخبار والتحديثات مباشرة إلى بريدك الإلكتروني
                </p>
              </div>
              <div className="flex w-full md:w-auto max-w-md">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-r-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-l-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-gray-800 py-6 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 rtl:md:space-x-reverse">
                <p className="text-gray-400 text-sm">
                  © 2025 My Market. جميع الحقوق محفوظة.
                </p>
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <span className="text-gray-400 text-sm">صنع بـ</span>
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-gray-400 text-sm">في المملكة العربية السعودية</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {footerLinks.legal.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300"
                  aria-label="العودة للأعلى"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
