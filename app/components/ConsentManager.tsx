'use client';

import { useEffect } from 'react';

export default function ConsentManager() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client || document.querySelector('script[data-adsense-client]')) return;

    const adQueue = (window.adsbygoogle = window.adsbygoogle || []) as unknown[] & {
      pauseAdRequests?: number;
    };
    adQueue.pauseAdRequests = 1;

    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.adsenseClient = client;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`;
    document.head.appendChild(script);
  }, [client]);

  return null;
}
