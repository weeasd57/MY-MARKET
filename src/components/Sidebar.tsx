import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import styles from '../styles/components/Sidebar.module.css'; // Corrected Import path

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTitle}>My Market</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link 
              href="/admin-panel" 
              className={`${styles.navLink} ${pathname === '/admin-panel' ? styles.activeNavLink : ''}`}
            >
              <span>Admin Panel</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link 
              href="/android-app" 
              className={`${styles.navLink} ${pathname === '/android-app' ? styles.activeNavLink : ''}`}
            >
              <span>Android App</span>
            </Link>
          </li>
          {/* Add more navigation links here as needed */}
        </ul>
      </nav>
      <div className={styles.footer}>
        © 2023 My Market
      </div>
      {/* Radio button removed */}
    </div>
  );
};

export default Sidebar; 