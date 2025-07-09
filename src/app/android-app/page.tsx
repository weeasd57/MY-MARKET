'use client';

import AppShowcaseCard from '@/components/AppShowcaseCard';
import styles from '@/styles/pages/AndroidAppPage.module.css'; // Corrected Import path using alias

export default function AndroidAppPage() {
  const androidAppFeatures = [
    "User authentication (Sign up, Login, Password Reset)",
    "Product browsing and search functionality",
    "Shopping cart management (Add, Remove, Update quantity)",
    "Order placement and history",
    "User profile management",
    "Push notifications for order updates",
    "Offline capabilities for browsing products",
    "Integration with secure payment gateways",
    "Wishlist functionality",
    "Rating and review system for products",
    "Multi-language support",
    "Personalized recommendations",
    "User authentication system (Email, Google Sign-In, Password reset)",
    "Product & Category management (Display, Categorization, Sale products, New arrivals)",
    "Shopping cart (Add, Remove, Update quantities, Checkout)",
    "Wishlist management",
    "Order Management system (Expandable for tracking)",
    "Localization & Multi-language support (English, Arabic)",
    "Theming & Color management (Light/Dark mode)",
    "Responsive design for different screen sizes",
    "Page transitions & Smooth animations",
    "Provider-based State Management for high performance",
    "Performance & Security optimizations (Memory Leak prevention)",
    "Dynamic Currency Code updates from Firebase",
  ];

  const androidHowToOwn = `To own this Android app, you can:
  1. Purchase the full source code license: Gain complete ownership of the app's source code, allowing for unlimited customization and deployment.
  2. Request customization based on your brand and specific needs: We offer tailored development services to integrate your branding, unique features, and specific business logic.
  3. Receive ongoing maintenance and support: Opt for our maintenance plans to ensure your app stays updated, secure, and performs optimally.

**Getting Started with Firebase (for Android App)**
This Android app uses Firebase for secure authentication, including Google Sign-In. To set it up:
*   **Create a Firebase Project:** Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
*   **Add Android App to Firebase:** Register your Android application in the Firebase project. Remember to add your SHA-1 fingerprint and download \`google-services.json\`.
*   **Enable Google Sign-in:** In Firebase Authentication, enable Google as a sign-in method.
*   **Integrate Firebase SDK:** Add Firebase SDK dependencies to your Gradle files.

For detailed instructions and code examples, please refer to the \`Firebase Setup and Google Sign-in\` section in the project's \`README.md\` file.

Contact us for a detailed quote and timeline, and let us help you bring your e-commerce vision to life on Android!`;

  return (
    <main className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>
        E-commerce Android App Details
      </h1>

      <div className={styles.cardWrapper}>
        <AppShowcaseCard
          appName="E-commerce Android App"
          appUrl="https://www.dropbox.com/s/your_android_app_url/android-app.apk?dl=0" // Replace with actual Dropbox URL
          features={androidAppFeatures}
          howToOwn={androidHowToOwn}
        />
      </div>
    </main>
  );
} 