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
        The site may use necessary technologies to support core functions and security. They
        do not inspect or upload the contents of PDFs processed by the public tool.
      </p>

      <h2>Analytics</h2>
      <p>
        Google Analytics helps us understand aggregated visits and how people use the service.
        We use this information to improve the site and do not use it to inspect the contents
        of your PDFs.
      </p>

      <h2>Advertising</h2>
      <p>
        Advertising is not currently enabled. If it is enabled, ads will remain separate from
        the PDF tool, download controls, and donation flow. This policy will be updated before
        advertising is activated.
      </p>

      <h2>Managing your choices</h2>
      <p>
        Before advertising or other optional cookie-based services are enabled, we will add a
        consent-management tool that lets you accept, reject, or manage optional cookies.
        Browser settings can also block or delete cookies, although doing so may affect some
        site features.
      </p>
    </LegalPage>
  );
}
