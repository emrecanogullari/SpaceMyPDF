import { ReactNode } from 'react';
import Link from 'next/link';
import './LegalPage.css';

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <main className="legal-page">
      <article>
        <Link className="legal-page__home-link" href="/">← Back to SpaceMyPDF</Link>
        <h1>{title}</h1>
        <p className="legal-page__updated">Last updated: {updated}</p>
        {children}
      </article>
    </main>
  );
}
