import React from 'react';
import { ExternalLink, Check, Download, Star, Shield, Zap } from 'lucide-react';

interface AppShowcaseCardProps {
  appName: string;
  appUrl: string;
  features: string[];
  howToOwn: string;
}

const AppShowcaseCard: React.FC<AppShowcaseCardProps> = ({
  appName,
  appUrl,
  features,
  howToOwn,
}) => {
  const formatHowToOwn = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    return lines.map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h4 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            {line.replace(/\*\*/g, '')}
          </h4>
        );
      }
      if (line.match(/^\d+\./)) {
        return (
          <div key={index} className="flex items-start gap-3 mb-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
              {line.match(/^(\d+)\./)?.[1]}
            </div>
            <p className="text-gray-700 leading-relaxed">{line.replace(/^\d+\.\s*/, '')}</p>
          </div>
        );
      }
      if (line.startsWith('*')) {
        return (
          <div key={index} className="flex items-start gap-2 mb-2 ml-4">
            <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
            <p className="text-gray-600 text-sm">{line.replace(/^\*\s*/, '')}</p>
          </div>
        );
      }
      return (
        <p key={index} className="text-gray-700 mb-3 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="card p-4 sm:p-6 lg:p-8 mb-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {appName}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
            </div>
            <span className="text-gray-600 text-xs sm:text-sm">(4.9/5 من 1,247 مراجعة)</span>
          </div>
        </div>

        {/* App Link */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <Download className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">تحميل التطبيق</h3>
          </div>
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            يمكنك تحميل التطبيق مباشرة من الرابط أدناه واستكشاف جميع الميزات المتاحة
          </p>
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            تحميل الآن
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">المميزات الرئيسية</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Own Section */}
        <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">كيفية الحصول على التطبيق</h3>
          </div>
          <div className="prose max-w-none text-sm sm:text-base">
            {formatHowToOwn(howToOwn)}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <button className="flex-1 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
              طلب عرض سعر
            </button>
            <button className="flex-1 px-4 py-2 sm:px-6 sm:py-3 bg-white text-gray-700 font-medium rounded-xl border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcaseCard;
