import { Link, useLocation, useNavigate } from 'react-router-dom';
import { siteProfile } from '../data/siteContent';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './SiteHeader.module.css';

const sections = [
  { id: 'works', label: 'Works' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export function SiteHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  const handleSectionClick = (id: string) => {
    if (isHome) {
      scrollToSection(id);
      return;
    }

    navigate('/', {
      state: { scrollTo: id },
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandHandle}>{siteProfile.name}</span>
          <span className={styles.brandLabel}>Portfolio</span>
        </Link>
        <nav className={styles.nav} aria-label="主要セクション">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={styles.navButton}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
