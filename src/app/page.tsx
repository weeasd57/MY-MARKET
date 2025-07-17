'use client';

import Link from 'next/link';
import { ShoppingBag, Smartphone, Shield, Zap, Users, TrendingUp, Star, Globe } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "التجارة الإلكترونية المتطورة",
      description: "منصة شاملة للتجارة الإلكترونية بأحدث التقنيات"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "تطبيق أندرويد متطور",
      description: "تطبيق جوال بتصميم عصري وواجهة سهلة الاستخدام"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "أمان متقدم",
      description: "حماية متطورة للبيانات والمعاملات المالية"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "أداء سريع",
      description: "تحميل سريع وأداء محسّن للأجهزة المختلفة"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "10K+", label: "مستخدم نشط" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "99.9%", label: "وقت التشغيل" },
    { icon: <Star className="w-6 h-6" />, number: "4.8", label: "تقييم العملاء" },
    { icon: <Globe className="w-6 h-6" />, number: "25+", label: "دولة" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              مرحباً بك في
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                My Market
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              منصة التجارة الإلكترونية الأكثر تطوراً مع تطبيق أندرويد عصري ولوحة إدارة شاملة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/android-app">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    تطبيق الأندرويد
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </Link>
              <Link href="/admin-panel">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    لوحة الإدارة
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              مميزات استثنائية
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اكتشف القوة الحقيقية لمنصتنا من خلال مجموعة شاملة من الميزات المتطورة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ابدأ رحلتك معنا اليوم
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            اختر الحل المناسب لاحتياجاتك واكتشف كيف يمكن لمنصتنا أن تحول عملك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/android-app">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-50">
                استكشف التطبيق
              </button>
            </Link>
            <Link href="/admin-panel">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300">
                تعرف على لوحة الإدارة
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
