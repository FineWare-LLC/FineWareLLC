/**
 * gtag.ts — simple wrappers around window.gtag()
 */
export const GA_ID = 'G-9CM7ME2ZV4';

/**
 * Log a page view with gtag.
 * @param url full or relative URL of the route
 */
export const pageview = (url: string): void => {
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};

/**
 * Log a custom event
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
