type GtagEventParams = Record<string, string | number | boolean>;

export const trackEvent = (eventName: string, params?: GtagEventParams) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Predefined events
export const analyticsEvents = {
  GENERATE_RECEIPT: 'generate_receipt',
  DOWNLOAD_RECEIPT: 'download_receipt',
  FORM_SUBMIT: 'form_submit',
  NAVIGATION: 'navigation'
} as const; 

export type AnalyticsEvent = typeof analyticsEvents[keyof typeof analyticsEvents]; 