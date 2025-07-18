'use client';

import AppShowcaseCard from '@/components/AppShowcaseCard';
import { Shield, Code, Database, Globe, Zap, Star, Users, BarChart } from 'lucide-react';

export default function AdminPanelPage() {
  const adminPanelFeatures = [
    "Dashboard with key metrics (Sales, Orders, Users, Revenue)",
    "Comprehensive Product management (Add, Edit, Delete, Categorize products with images and descriptions)",
    "Advanced Order management (View order details, Update status, Process refunds)",
    "Detailed User management (View user profiles, Edit roles, Manage permissions)",
    "Category and brand management (Create, Update, Delete categories and brands)",
    "Content management for promotions, banners, and blog posts",
    "Robust Sales reports and analytics (Daily, Weekly, Monthly sales, Top-selling products)",
    "Inventory management and stock alerts",
    "Customer support ticket system integration",
    "Role-based access control for different admin levels",
    "Secure authentication and authorization",
    "Dashboard with key metrics (Total Sales, Total Orders, Total Products, Total Users)",
    "Product Category Management (Add, Edit, Delete)",
    "Order Management (View, Update, Track orders)",
    "User Management (View, Edit user details)",
    "Localization Multi-language support",
    "Theming Light/Dark Mode",
    "Responsive design",
    "Real-time updates and notifications for new orders",
    "Role-based access management",
    "Secure access with Firebase authentication",
  ];

  const adminHowToOwn = `To own this Admin Panel, you can:
  1. Get a standalone deployment for your e-commerce platform: We can deploy the admin panel as a separate, secure application tailored to your infrastructure.
  2. Integrate it with your existing backend systems: Our team can help you connect this admin panel to your current e-commerce backend APIs for seamless operation.
  3. Receive ongoing maintenance and support: Ensure the smooth operation and security of your admin panel with our comprehensive maintenance and support packages.
  4. Customize the UI/UX to match your branding: We offer design services to adapt the admin panel's interface to align with your brand's aesthetic.

**Getting Started with Firebase (for Web Admin Panel)**
This admin panel uses Firebase for secure authentication, including Google Sign-In. To set it up:
*   **Create a Firebase Project:** Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
*   **Add Web App to Firebase:** Register your web application in the Firebase project to get your configuration.
*   **Enable Google Sign-in:** In Firebase Authentication, enable Google as a sign-in method.
*   **Integrate Firebase SDK:** Install Firebase SDK in your project and initialize it with your configuration.

For detailed instructions and code examples, please refer to the \`Firebase Setup and Google Sign-in\` section in the project's \`README.md\` file.

Reach out to discuss integration options, customization possibilities, and pricing. Let's build a powerful control center for your business!`;

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "2K+", label: "Active Users" },
    { icon: <Star className="w-6 h-6" />, number: "4.8", label: "User Rating" },
    { icon: <Zap className="w-6 h-6" />, number: "99.9%", label: "Uptime" },
    { icon: <Shield className="w-6 h-6" />, number: "100%", label: "Data Security" },
  ];

  const techStack = [
    { name: "React", icon: <Code className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
    { name: "Firebase", icon: <Database className="w-8 h-8" />, color: "from-yellow-500 to-orange-500" },
    { name: "REST API", icon: <Globe className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
    { name: "Analytics", icon: <BarChart className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              E-commerce Admin Panel
              <span className="block text-purple-200">Web Dashboard</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive web-based admin panel for managing your e-commerce platform with advanced analytics and user management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View Demo
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transform hover:-translate-y-1 transition-all duration-300">
                Request Access
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
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
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powered by the latest web technologies for optimal performance and security
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
            appName="E-commerce Admin Panel"
            appUrl="https://your-firebase-admin-panel.web.app/"
            features={adminPanelFeatures}
            howToOwn={adminHowToOwn}
          />
        </div>
      </section>
    </div>
  );
}
