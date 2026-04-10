import type { PropsWithChildren } from 'react';
import { useReveal } from '../hooks/useReveal';
import styles from './Reveal.module.css';

interface RevealProps extends PropsWithChildren {
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export function Reveal({
  children,
  className = '',
  as = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const Tag = as;
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  return (
    <Tag
      ref={setRef}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
