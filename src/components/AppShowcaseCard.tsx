import React from 'react';
import styles from '@/styles/components/AppShowcaseCard.module.css'; // Corrected Import path using alias

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
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{appName}</h2>
      <p className={styles.cardLinkText}>
        <strong className={styles.cardLinkText}>Link:</strong>{' '}
        <a href={appUrl} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          {appUrl}
        </a>
      </p>
      <h3 className={styles.featuresTitle}>Features:</h3>
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featuresListItem}>{feature}</li>
        ))}
      </ul>
      <h3 className={styles.howToOwnTitle}>How to Own This App:</h3>
      <p className={styles.howToOwnText}>{howToOwn}</p>
    </div>
  );
};

export default AppShowcaseCard; 