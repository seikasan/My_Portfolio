export const HOME_SCROLL_STORAGE_KEY = 'portfolio.homeScrollY';

export interface RouteLocationState {
  fromHome?: boolean;
  restoreHomeScroll?: boolean;
  scrollTo?: string;
}

export function isWorkDetailPath(pathname: string) {
  return pathname.startsWith('/works/');
}

export function saveHomeScrollPosition() {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.setItem(HOME_SCROLL_STORAGE_KEY, String(window.scrollY));
}

export function readHomeScrollPosition() {
  if (typeof window === 'undefined') {
    return null;
  }

  const saved = window.sessionStorage.getItem(HOME_SCROLL_STORAGE_KEY);

  if (!saved) {
    return null;
  }

  const value = Number(saved);
  return Number.isFinite(value) ? value : null;
}
