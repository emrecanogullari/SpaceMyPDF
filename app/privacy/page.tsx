import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How SpaceMyPDF handles data, analytics, donations, cookies, and advertising.',
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="17 July 2026">
      <p>
        SpaceMyPDF is designed so PDF processing happens in your browser. We do not upload
        the PDFs you select to our servers as part of the public note-space tool.
      </p>

      <h2>Information we process</h2>
      <p>
        We may process limited technical information such as device, browser, IP address,
        pages visited, and aggregated usage events through analytics, consent, security, and
        advertising providers. If you contact us or make a donation, the information you
        provide is handled by the relevant contact or payment provider.
      </p>

      <h2>Analytics, donations, and advertising</h2>
      <p>
        We use Google Analytics to understand aggregated site use. Donations are processed
        by PayPal, which handles payment information under its own privacy policy. We may
        display advertising from Google AdSense and other reputable advertising providers.
        Those providers may process information and use cookies or similar technologies only
        in accordance with your consent choices and applicable law.
      </p>

      <h2>Your consent choices</h2>
      <p>
        Where required, we use a consent-management platform to request and record your
        choices before enabling non-essential cookies or personalised advertising. You can
        revisit or change those choices through the consent controls made available on the
        site. See our <a href="/cookies">Cookie Policy</a> for more detail.
      </p>

      <h2>Retention and sharing</h2>
      <p>
        We retain information only for as long as needed for the purposes described here or
        to meet legal obligations. We do not sell PDF files. We may share limited data with
        service providers that operate analytics, payments, consent, hosting, security, and
        advertising on our behalf.
      </p>

      <h2>Your rights and contact</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, object
        to, or restrict processing of your personal information. For privacy requests or
        questions, contact <a href="mailto:spacemypdf@gmail.com">spacemypdf@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
