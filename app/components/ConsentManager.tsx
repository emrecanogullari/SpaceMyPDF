'use client';

import { useEffect } from 'react';

export default function ConsentManager() {
  const source = process.env.NEXT_PUBLIC_CMP_SCRIPT_URL;

  useEffect(() => {
    if (!source || document.querySelector('script[data-cmp-script]')) return;

    const script = document.createElement('script');
    script.async = true;
    script.dataset.cmpScript = 'true';
    script.src = source;
    document.head.appendChild(script);
  }, [source]);

  return null;
}
