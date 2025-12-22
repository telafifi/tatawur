'use client';

import styles from './Logo.module.scss';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'light';
  showText?: boolean;
  className?: string;
}

export function Logo({
  size = 'medium',
  variant = 'default',
  showText = true,
  className = '',
}: LogoProps) {
  const logoClasses = [
    styles.logo,
    styles[size],
    variant === 'light' ? styles.light : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={logoClasses}>
      <div className={styles.logoIcon}>
        <div className={styles.iconBox}>
          <span className={styles.arabicLogo}>تطور</span>
        </div>
        <div className={styles.iconGlow} />
      </div>
      {showText && (
        <div className={styles.logoText}>
          <span className={styles.name}>Tatawur AI</span>
        </div>
      )}
    </div>
  );
}

