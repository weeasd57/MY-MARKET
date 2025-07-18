'use client';

import AppShowcaseCard from '@/components/AppShowcaseCard';
import { Smartphone, Code, Database, Shield, Globe, Zap, Star, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AndroidAppPage() {
  const { t } = useTranslation('common');
  const androidAppFeatures = [
    "نظام مصادقة متقدم (التسجيل، تسجيل الدخول، إعادة تعيين كلمة المرور)",
    "تصفح المنتجات ووظائف البحث المتقدمة",
    "إدارة سلة التسوق (إضافة، حذف، تحديث الكمية)",
    "وضع الطلبات وتتبع التاريخ",
    "إدارة الملف الشخصي للمستخدم",
    "إشعارات فورية لتحديثات الطلبات",
    "قدرات العمل بدون اتصال لتصفح المنتجات",
    "التكامل مع بوابات الدفع الآمنة",
    "وظائف قائمة الرغبات",
    "نظام تقييم ومراجعة المنتجات",
    "دعم متعدد اللغات (العربية والإنجليزية)",
    "توصيات شخصية مخصصة",
    "إدارة المنتجات والفئات (العرض، التصنيف، المنتجات المخفضة)",
    "نظام إدارة الطلبات القابل للتوسع مع التتبع",
    "إدارة السمات والألوان (الوضع النهاري/الليلي)",
    "تصميم متجاوب لأحجام الشاشات المختلفة",
    "انتقالات الصفحات والرسوم المتحركة السلسة",
    "إدارة الحالة المستندة إلى Provider للأداء العالي",
    "تحسينات الأداء والأمان (منع تسرب الذاكرة)",
    "تحديثات ديناميكية لرمز العملة من Firebase",
  ];

  const androidHowToOwn = `للحصول على هذا التطبيق الأندرويد، يمكنك:
  1. شراء رخصة الكود المصدري الكامل: احصل على ملكية كاملة لكود التطبيق المصدري، مما يتيح لك تخصيص ونشر غير محدود.
  2. طلب تخصيص بناءً على علامتك التجارية واحتياجاتك المحددة: نقدم خدمات تطوير مخصصة لدمج علامتك التجارية وميزات فريدة ومنطق عمل محدد.
  3. الحصول على الصيانة والدعم المستمر: اختر خطط الصيانة الخاصة بنا لضمان أن يبقى تطبيقك محدثًا وآمنًا ويعمل بأداء مثالي.

**البدء مع Firebase (لتطبيق الأندرويد)**
يستخدم هذا التطبيق الأندرويد Firebase للمصادقة الآمنة، بما في ذلك تسجيل الدخول بحساب Google. لإعداده:
*   **إنشاء مشروع Firebase:** اذهب إلى [وحدة تحكم Firebase](https://console.firebase.google.com/) وأنشئ مشروعًا جديدًا.
*   **إضافة تطبيق الأندرويد إلى Firebase:** سجل تطبيق الأندرويد الخاص بك في مشروع Firebase. تذكر إضافة بصمة SHA-1 وتحميل \`google-services.json\`.
*   **تفعيل تسجيل الدخول بحساب Google:** في Firebase Authentication، فعل Google كطريقة تسجيل دخول.
*   **دمج Firebase SDK:** أضف تبعيات Firebase SDK إلى ملفات Gradle الخاصة بك.

للحصول على تعليمات مفصلة وأمثلة كود، يرجى الرجوع إلى قسم \`Firebase Setup and Google Sign-in\` في ملف \`README.md\` الخاص بالمشروع.

تواصل معنا للحصول على عرض سعر مفصل وجدولة زمنية، ودعنا نساعدك في تحويل رؤيتك للتجارة الإلكترونية إلى واقع على الأندرويد!`;

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "50K+", label: "تحميل نشط" },
    { icon: <Star className="w-6 h-6" />, number: "4.9", label: "تقييم المستخدمين" },
    { icon: <Zap className="w-6 h-6" />, number: "99.9%", label: "وقت التشغيل" },
    { icon: <Shield className="w-6 h-6" />, number: "100%", label: "أمان البيانات" },
  ];

  const techStack = [
    { name: "Flutter", icon: <Code className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
    { name: "Firebase", icon: <Database className="w-8 h-8" />, color: "from-yellow-500 to-orange-500" },
    { name: "REST API", icon: <Globe className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
    { name: "Security", icon: <Shield className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              تطبيق التجارة الإلكترونية
              <span className="block text-blue-200">للأندرويد</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              تطبيق متطور ومتكامل للتجارة الإلكترونية مصمم خصيصاً لنظام الأندرويد مع أحدث التقنيات والميزات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                تحميل التطبيق
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300">
                مشاهدة العرض التوضيحي
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              تقنيات متطورة
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              بُني التطبيق باستخدام أحدث التقنيات لضمان أفضل أداء وأمان
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}>
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppShowcaseCard
            appName="تطبيق التجارة الإلكترونية للأندرويد"
            appUrl="https://www.dropbox.com/s/your_android_app_url/android-app.apk?dl=0"
            features={androidAppFeatures}
            howToOwn={androidHowToOwn}
          />
        </div>
      </section>
    </div>
  );
}
