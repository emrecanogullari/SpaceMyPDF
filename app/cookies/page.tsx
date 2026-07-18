import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie and consent information for SpaceMyPDF.',
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" updated="17 July 2026">
      <p>
        Cookies are small text files and similar technologies that can be stored on your
        device when you visit a website. SpaceMyPDF uses only the categories described below.
      </p>

      <h2>Strictly necessary technologies</h2>
      <p>
        These support core site functions, security, and the storage of your consent choices.
        They are necessary for the site to operate and cannot always be disabled through the
        consent banner.
      </p>

      <h2>Analytics</h2>
      <p>
        With your permission where required, Google Analytics helps us understand aggregated
        visits and how people use the service. We use this information to improve the site and
        do not use it to inspect the contents of your PDFs.
      </p>

      <h2>Advertising</h2>
      <p>
        If advertising is enabled, Google AdSense or another reputable advertising provider
        may use cookies or similar technologies to measure delivery, limit repetition, prevent
        fraud, and, where you consent, personalise ads. Advertising is kept separate from the
        PDF tool, download controls, and donation flow.
      </p>

      <h2>Managing your choices</h2>
      <p>
        Our consent-management platform provides controls for non-essential technologies in
        locations where consent is required. You can change your choices through that tool at
        any time. Browser settings can also block or delete cookies, although doing so may
        affect some site features.
      </p>
    </LegalPage>
  );
}
