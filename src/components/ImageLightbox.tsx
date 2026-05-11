import { useEffect, useState } from 'react';
import styles from './ImageLightbox.module.css';

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'auto' | 'sync';
}

export function ImageLightbox({
  src,
  alt,
  className,
  loading = 'lazy',
  decoding = 'async',
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(true)}
        aria-label={`${alt}を拡大表示`}
      >
        <img src={src} alt={alt} className={className} loading={loading} decoding={decoding} />
      </button>

      {isOpen ? (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={alt}>
          <button
            type="button"
            className={styles.backdrop}
            onClick={() => setIsOpen(false)}
            aria-label="拡大表示を閉じる"
          />
          <div className={styles.dialog}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="閉じる"
            >
              ×
            </button>
            <img src={src} alt={alt} className={styles.fullImage} />
            <p className={styles.caption}>{alt}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
