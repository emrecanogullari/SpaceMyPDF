import Link from 'next/link';
import CookieSettingsButton from './CookieSettingsButton';
import './SiteFooter.css';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} SpaceMyPDF</p>
      <nav aria-label="Legal links">
        <Link href="/privacy">Privacy</Link>
        <Link href="/cookies">Cookies</Link>
        <Link href="/terms">Terms</Link>
        <CookieSettingsButton />
      </nav>
    </footer>
  );
}
