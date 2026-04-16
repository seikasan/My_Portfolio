import { useLayoutEffect, useRef } from 'react';
import { HashRouter, Route, Routes, useLocation, useNavigationType } from 'react-router-dom';
import { SiteHeader } from './components/SiteHeader';
import { isWorkDetailPath, readHomeScrollPosition, type RouteLocationState } from './lib/scrollRestoration';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { WorkDetailPage } from './pages/WorkDetailPage';
import styles from './App.module.css';

function RouteScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousPathnameRef = useRef<string | null>(null);

  useLayoutEffect(() => {
    const state = location.state as RouteLocationState | null;
    const previousPathname = previousPathnameRef.current;

    if (location.pathname !== '/' && location.pathname !== previousPathname) {
      window.scrollTo(0, 0);
    } else if (
      location.pathname === '/' &&
      !state?.scrollTo &&
      (state?.restoreHomeScroll === true ||
        (navigationType === 'POP' &&
          previousPathname !== null &&
          isWorkDetailPath(previousPathname)))
    ) {
      const savedScroll = readHomeScrollPosition();

      if (savedScroll !== null) {
        window.scrollTo(0, savedScroll);
      }
    }

    previousPathnameRef.current = location.pathname;
  }, [location.key, location.pathname, location.state, navigationType]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <RouteScrollManager />
      <div className={styles.shell}>
        <SiteHeader />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/works/:slug" element={<WorkDetailPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
