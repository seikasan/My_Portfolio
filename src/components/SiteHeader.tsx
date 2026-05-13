import { Link, useLocation, useNavigate } from 'react-router-dom';
import { siteProfile } from '../data/siteContent';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './SiteHeader.module.css';

const sections = [
  { id: 'works', label: 'Works' },
  { id: 'music', label: 'Music' },
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  const handleSectionClick = (id: string) => {
    if (id === 'top') {
      if (isHome) {
        scrollToTop();
        return;
      }

      navigate('/', {
        state: { scrollTo: 'top' },
      });
      return;
    }

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
          <span className={styles.brandHandle}>
            <span className={styles.brandAccent}>{siteProfile.name.slice(0, 1)}</span>
            {siteProfile.name.slice(1)}
          </span>
        </Link>
        <nav className={styles.nav} aria-label="主要セクション">
          <button
            type="button"
            className={styles.navLink}
            onClick={() => handleSectionClick('top')}
          >
            Top
          </button>
          <Link
            to="/about"
            className={styles.navLink}
            aria-current={location.pathname === '/about' ? 'page' : undefined}
          >
            About
          </Link>
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={styles.navLink}
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
