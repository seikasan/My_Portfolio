import { HashRouter, Route, Routes } from 'react-router-dom';
import { SiteHeader } from './components/SiteHeader';
import { HomePage } from './pages/HomePage';
import { WorkDetailPage } from './pages/WorkDetailPage';
import styles from './App.module.css';

function App() {
  return (
    <HashRouter>
      <div className={styles.shell}>
        <SiteHeader />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/works/:slug" element={<WorkDetailPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
