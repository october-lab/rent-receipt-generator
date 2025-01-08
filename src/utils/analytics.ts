type EventNames = 
  | 'blog_view'
  | 'blog_post_view'
  | 'blog_post_click'
  | 'generator_cta_click';

interface BlogPostEvent {
  post_id: string;
  post_title: string;
  source?: string;
}

export const trackEvent = (
  eventName: EventNames,
  eventParams?: BlogPostEvent
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
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