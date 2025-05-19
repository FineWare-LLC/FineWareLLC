// src/global.d.ts
export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    /**
     * Google Analytics gtag function
     * @param args arguments passed to gtag, e.g.
     *   ['config', 'G-XXXXXX', { page_path: '/home' }]
     */
    gtag: (...args: any[]) => void;
  }
}
