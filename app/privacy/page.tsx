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
        the PDFs you select to any servers as part of the public note-space tool.
      </p>

      <h2>Information we process</h2>
      <p>
        We do not retain the contents of PDFs processed with the public tool. Google Analytics
        may receive limited technical and aggregated usage information to help us understand
        site use. If you contact us or make a donation, the relevant contact or payment
        provider handles the information you choose to provide.
      </p>

      <h2>Analytics, donations, and advertising</h2>
      <p>
        We use Google Analytics to understand aggregated site use. Donations are processed
        by PayPal, which handles payment information under its own privacy policy.
        Advertising is not currently enabled. If advertising is enabled in the future, this
        policy will be updated to identify the provider and describe its cookie and data use.
      </p>

      <h2>Your consent choices</h2>
      <p>
        Before we enable advertising or other optional cookie-based services, we will provide
        a consent-management tool that lets you accept, reject, or manage optional cookies.
        This policy will be updated when that tool is live. See our{' '}
        <a href="/cookies">Cookie Policy</a> for more detail.
      </p>

      <h2>Retention and sharing</h2>
      <p>
        We do not retain PDF files processed through the public tool. Google Analytics and
        PayPal retain information under their own policies. We do not sell PDF files.
      </p>

      <h2>Your rights and contact</h2>
      <p>
        For questions about this policy or information you have directly provided to us,
        contact <a href="mailto:spacemypdf@gmail.com">spacemypdf@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
