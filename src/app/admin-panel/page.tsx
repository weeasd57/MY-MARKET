'use client';

import AppShowcaseCard from '@/components/AppShowcaseCard';
import styles from '@/styles/pages/AdminPanelPage.module.css'; // Corrected Import path using alias

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

  return (
    <main className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>
        E-commerce Admin Panel Details
      </h1>

      <div className={styles.cardWrapper}>
        <AppShowcaseCard
          appName="E-commerce Admin Panel"
          appUrl="https://your-firebase-admin-panel.web.app/" // Replace with actual Firebase Admin Panel URL
          features={adminPanelFeatures}
          howToOwn={adminHowToOwn}
        />
      </div>
    </main>
  );
} 