import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Passgen - Secure CLI & Web Password, Passphrase & Token Generator',
  description: 'Fast, cryptographically secure password, passphrase, and token generator for Linux, macOS, and the browser. Native Wayland, X11, OSC 52, and headless support.',
  keywords: ['password generator', 'cli password generator', 'diceware', 'passphrase', 'token generator', 'wayland clipboard', 'x11 clipboard', 'security tools'],
  authors: [{ name: 'Joshua Cox' }],
  metadataBase: new URL('https://joshuacox.github.io/passgen'),
  openGraph: {
    title: 'Passgen - The Fast CLI & Web Password Generator',
    description: 'Cryptographically secure password generation with clipboard and headless integration.',
    type: 'website',
  },
  other: {
    'google-adsense-account': 'ca-pub-8973108060277483',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8973108060277483" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
