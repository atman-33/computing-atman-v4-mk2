export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const existsGaId = GA_MEASUREMENT_ID !== '';

export const pageview = (path: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path
  });
};
