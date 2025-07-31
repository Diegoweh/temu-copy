 import umami from '@umami/node';

umami.init({
  websiteId: 'ad0ad03a-2ab0-4127-8f5e-b50c507fb626', // Your website id
  hostUrl: 'https://cloud.umami.is', // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload);
}
