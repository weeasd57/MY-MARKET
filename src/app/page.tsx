'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
        Welcome to Our App Showcase
      </h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-6 flex-1 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">E-commerce Android App</h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore the features and ownership options for our powerful Android e-commerce application.
          </p>
          <Link href="/android-app">
            <div className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              View Details
            </div>
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex-1 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">E-commerce Admin Panel</h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover the robust features and integration possibilities of our e-commerce admin panel.
          </p>
          <Link href="/admin-panel">
            <div className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              View Details
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
