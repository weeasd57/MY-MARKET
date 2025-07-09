'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from '../styles/layout/ClientLayout.module.css'; // Corrected Import path

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.container}>
      {/* Mobile hamburger menu button */}
      <button
        className={styles.mobileSidebarButton}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <svg
          className={styles.hamburgerIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className={styles.mobileSidebarOverlay}
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Mobile sidebar content (slides in) */}
      {isSidebarOpen && (
        <div
          className={`${styles.sidebarMobile} ${isSidebarOpen ? styles.open : ''}`}
        >
          <Sidebar />
        </div>
      )}

      {/* Desktop sidebar content (always visible and static) */}
      <div className={styles.sidebarDesktop}>
        <Sidebar />
      </div>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
} 