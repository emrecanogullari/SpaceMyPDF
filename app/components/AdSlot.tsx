'use client';

import { useEffect, useRef, useState } from 'react';
import './AdSlot.css';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
    __tcfapi?: (
      command: 'addEventListener' | 'removeEventListener',
      version: number,
      callback: (tcData: TcfData, success: boolean) => void,
      listenerId?: number
    ) => void;
  }
}

type TcfData = {
  eventStatus?: string;
  gdprApplies?: boolean;
  listenerId?: number;
  purpose?: { consents?: Record<string, boolean> };
  vendor?: { consents?: Record<string, boolean> };
};

type AdSlotProps = {
  slot: string | undefined;
  placement: 'rail' | 'footer';
};

const googleVendorId = '755';
let adSenseScriptPromise: Promise<void> | null = null;

const loadAdSenseScript = (client: string) => {
  if (adSenseScriptPromise) return adSenseScriptPromise;

  adSenseScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-adsense-client]'
    );

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('AdSense failed to load.')), { once: true });
      if (window.adsbygoogle) resolve();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.adsenseClient = client;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('AdSense failed to load.'));
    document.head.appendChild(script);
  });

  return adSenseScriptPromise;
};

const useAdConsent = () => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let listenerId: number | undefined;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;
    let attempts = 0;

    const registerListener = () => {
      if (!window.__tcfapi) {
        if (attempts < 20) {
          attempts += 1;
          retryTimer = setTimeout(registerListener, 250);
        }
        return;
      }

      window.__tcfapi('addEventListener', 2, (tcData, success) => {
        if (!success || cancelled) return;

        listenerId = tcData.listenerId;
        if (tcData.gdprApplies === false) {
          setHasConsent(true);
          return;
        }

        const storageConsent = tcData.purpose?.consents?.['1'];
        const googleConsent = tcData.vendor?.consents?.[googleVendorId];
        setHasConsent(Boolean(storageConsent && googleConsent));
      });
    };

    registerListener();
    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);
      if (listenerId && window.__tcfapi) {
        window.__tcfapi('removeEventListener', 2, () => undefined, listenerId);
      }
    };
  }, []);

  return hasConsent;
};

export default function AdSlot({ slot, placement }: AdSlotProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const consentGranted = useAdConsent();
  const initialized = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!client || !slot || !consentGranted || initialized.current) return;

    let active = true;
    loadAdSenseScript(client)
      .then(() => {
        if (!active || initialized.current) return;
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        initialized.current = true;
        setReady(true);
      })
      .catch(() => {
        // Ad blockers or network failures should not affect the PDF tool.
        if (active) setReady(false);
      });

    return () => {
      active = false;
    };
  }, [client, consentGranted, slot]);

  if (!client || !slot || !consentGranted) return null;

  return (
    <section className={`ad-slot ad-slot--${placement}`} aria-label="Advertisement">
      <span className="ad-slot__label">Advertisement</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={placement === 'footer' ? 'auto' : undefined}
        data-full-width-responsive={placement === 'footer' ? 'true' : undefined}
      />
      {!ready && <span className="ad-slot__loading" aria-hidden="true" />}
    </section>
  );
}
