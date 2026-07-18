import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for using the SpaceMyPDF PDF note-space tool.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="17 July 2026">
      <p>
        By using SpaceMyPDF, you agree to these terms. If you do not agree, please do not use
        the service.
      </p>

      <h2>The service</h2>
      <p>
        SpaceMyPDF provides a free browser-based tool for adding note-taking space to PDFs.
        You are responsible for ensuring that you have the right to process any document you
        select. The public tool processes PDFs locally in your browser.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not use the service unlawfully, attempt to disrupt or reverse engineer it, bypass
        security controls, or use automated activity that harms the availability of the site.
      </p>

      <h2>Availability and liability</h2>
      <p>
        The service is provided as available, without a guarantee that it will always be
        uninterrupted, error-free, or suitable for every PDF. Keep your original documents and
        review output before relying on it. To the extent permitted by law, SpaceMyPDF is not
        liable for losses arising from use of the service.
      </p>

      <h2>Third-party services and advertisements</h2>
      <p>
        The site may link to or display services from third parties, including PayPal,
        analytics providers, and advertising providers. Their content and policies are their
        own. Advertisements are not endorsements, and you should not treat them as advice.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update the service or these terms. Material changes will be reflected by the
        updated date above. Questions can be sent to{' '}
        <a href="mailto:spacemypdf@gmail.com">spacemypdf@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
