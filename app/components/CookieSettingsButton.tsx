'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    googlefc?: {
      callbackQueue?: Array<Record<string, () => void>>;
      showRevocationMessage?: () => void;
    };
  }
}

export default function CookieSettingsButton() {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const googlefc = (window.googlefc = window.googlefc || {});
    googlefc.callbackQueue = googlefc.callbackQueue || [];
    googlefc.callbackQueue.push({
      CONSENT_API_READY: () => setAvailable(Boolean(window.googlefc?.showRevocationMessage)),
    });
  }, []);

  if (!available) return null;

  return (
    <button
      className="site-footer__cookie-settings"
      type="button"
      onClick={() => window.googlefc?.showRevocationMessage?.()}
    >
      Cookie settings
    </button>
  );
}
