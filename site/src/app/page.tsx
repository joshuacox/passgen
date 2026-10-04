import React from 'react';
import { 
  Terminal, 
  ShieldCheck, 
  Copy, 
  Cpu, 
  Monitor, 
  Layers, 
  Lock
} from 'lucide-react';
import { InteractiveGenerator } from './InteractiveGenerator';
import { AdBanner } from './AdBanner';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-xl">
              <Lock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-tight">passgen</span>
              <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">v2.1</span>
            </div>
          </div>
          <nav className="flex items-center space-x-6 text-sm text-slate-300">
            <a href="#generator" className="hover:text-emerald-400 transition-colors hidden sm:inline-block">Web Tool</a>
            <a href="#features" className="hover:text-emerald-400 transition-colors hidden sm:inline-block">Features</a>
            <a href="#quickstart" className="hover:text-emerald-400 transition-colors">CLI Install</a>
            <a href="#documentation" className="hover:text-emerald-400 transition-colors hidden md:inline-block">Documentation</a>
            <a
              href="https://github.com/joshuacox/passgen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors border border-slate-700"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        <section className="text-center space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Cryptographically Secure CLI & Web Generator</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Generate strong passwords that <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">just work</span> everywhere.
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto font-normal">
            Effortlessly create secure passwords, Diceware passphrases, and cryptographic tokens.
            Native integration with Wayland, X11, macOS, and remote SSH sessions via OSC 52.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#quickstart"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 text-sm"
            >
              <Terminal className="w-4 h-4" />
              <span>Install CLI Utility</span>
            </a>
            <a
              href="#generator"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700 text-sm"
            >
              <Cpu className="w-4 h-4" />
              <span>Try Web Generator</span>
            </a>
          </div>
        </section>

        {/* Top AdSense Banner */}
        <AdBanner slotId="8973108060" />

        {/* Live Interactive Generator Section */}
        <section id="generator" className="scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Instant Browser Generator</h2>
            <p className="text-sm text-slate-400 mt-2">
              All browser generation utilizes the cryptographically secure <code className="text-emerald-400 bg-slate-900 px-1.5 py-0.5 rounded">window.crypto.getRandomValues</code> API. No data ever leaves your device.
            </p>
          </div>
          <InteractiveGenerator />
        </section>

        {/* Features Grid */}
        <section id="features" className="space-y-8 scroll-mt-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Why Passgen?</h2>
            <p className="text-sm text-slate-400 mt-2">Engineered for security engineers, system administrators, and developers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Full Clipboard Ecosystem</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Automatic detection and support for Wayland (<code className="text-xs text-slate-300">wl-copy</code>), X11 (<code className="text-xs text-slate-300">xclip</code> / <code className="text-xs text-slate-300">xsel</code>), macOS (<code className="text-xs text-slate-300">pbcopy</code>), and remote SSH clipboard sharing with <strong className="text-slate-200">OSC 52</strong>.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Multi-Algorithm Pool</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Generates alphanumeric tokens, length-obedient passwords, Diceware word passphrases, numeric PINs, and high-entropy hash streams using resilient random sources.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Headless & CI/CD Ready</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Zero crash policy in headless servers, Docker containers, and automated deployment pipelines. Output seamlessly pipes directly to stdout with <code className="text-xs text-slate-300">-n / --no-clip</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Installation & Quickstart */}
        <section id="quickstart" className="space-y-8 scroll-mt-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Installation & Usage</h2>
            <p className="text-sm text-slate-400 mt-2">Get up and running on Linux, macOS, or Nix in seconds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">One-Line Bootstrap</span>
                <span className="text-xs text-slate-500">cURL & Bash</span>
              </div>
              <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-emerald-300 overflow-x-auto">
{`curl -sSL https://raw.githubusercontent.com/joshuacox/passgen/master/bootstrappassgen.sh | sh`}
              </pre>
              <p className="text-xs text-slate-400">
                Clones and installs <code className="text-emerald-400">passgen</code> directly into <code className="text-slate-300">/usr/local/bin</code>.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Manual or Git</span>
                <span className="text-xs text-slate-500">Make</span>
              </div>
              <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-emerald-300 overflow-x-auto">
{`git clone https://github.com/joshuacox/passgen.git
cd passgen
sudo make install`}
              </pre>
              <p className="text-xs text-slate-400">
                Installs executable and man pages locally with reproducible permissions.
              </p>
            </div>
          </div>
        </section>

        {/* Middle AdSense Banner */}
        <AdBanner slotId="8973108061" />

        {/* CLI Reference & Documentation */}
        <section id="documentation" className="space-y-6 scroll-mt-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">CLI Cheat Sheet & Command Options</h2>
            <p className="text-sm text-slate-400 mt-2">Full flag reference for daily terminal usage.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-950 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Flag / Command</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
                  <tr className="hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-emerald-400 font-bold">passgen [N]</td>
                    <td className="px-6 py-4 font-sans text-slate-300">Generate password of length N (default: 16) and copy to clipboard</td>
                    <td className="px-6 py-4 text-slate-400">passgen 24</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-emerald-400 font-bold">-w, --words [N]</td>
                    <td className="px-6 py-4 font-sans text-slate-300">Generate a Diceware-style memorable passphrase composed of N words</td>
                    <td className="px-6 py-4 text-slate-400">passgen -w 5</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-emerald-400 font-bold">-p, --pin [N]</td>
                    <td className="px-6 py-4 font-sans text-slate-300">Generate a numeric PIN code of length N</td>
                    <td className="px-6 py-4 text-slate-400">passgen -p 6</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-emerald-400 font-bold">-n, --no-clip</td>
                    <td className="px-6 py-4 font-sans text-slate-300">Print to stdout only, without touching clipboard registers</td>
                    <td className="px-6 py-4 text-slate-400">passgen -c 3 -n</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-emerald-400 font-bold">-c, --count [N]</td>
                    <td className="px-6 py-4 font-sans text-slate-300">Generate multiple passwords or tokens in a single execution</td>
                    <td className="px-6 py-4 text-slate-400">passgen -c 10</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-emerald-400 font-bold">--osc52</td>
                    <td className="px-6 py-4 font-sans text-slate-300">Emit ANSI OSC 52 terminal copy escapes (works seamlessly over SSH)</td>
                    <td className="px-6 py-4 text-slate-400">passgen --osc52</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-emerald-400 font-bold">--clear [SEC]</td>
                    <td className="px-6 py-4 font-sans text-slate-300">Automatically clear clipboard contents after SEC seconds for security</td>
                    <td className="px-6 py-4 text-slate-400">passgen --clear 30</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="px-6 py-4 text-emerald-400 font-bold">-t, --test</td>
                    <td className="px-6 py-4 font-sans text-slate-300">Run built-in test suite across all cryptographic generator engines</td>
                    <td className="px-6 py-4 text-slate-400">passgen -t</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Security & Cryptography Best Practices */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <span>Entropy & Password Security Standards</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
            <div className="space-y-2">
              <h4 className="font-semibold text-white">NIST SP 800-63B Compliance</h4>
              <p className="text-slate-400 leading-relaxed">
                Passgen promotes modern password recommendations: longer length rather than arbitrary complexity requirements. A 5-word Diceware passphrase provides over 64 bits of entropy while remaining memorable.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Cryptographic PRNG Sources</h4>
              <p className="text-slate-400 leading-relaxed">
                Passgen relies on kernel CSPRNG devices (<code className="text-xs text-slate-300">/dev/urandom</code>), OpenSSL cryptographic primitives, or standard Web Crypto API implementations rather than predictable pseudo-random seeds.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom AdSense Banner */}
        <AdBanner slotId="8973108062" />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-10 mt-16 text-slate-500 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Passgen Project. Released under GNU GPL v3.</p>
          <div className="flex items-center space-x-6">
            <a href="https://github.com/joshuacox/passgen" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">GitHub Repository</a>
            <a href="/ads.txt" className="hover:text-emerald-400 transition-colors">ads.txt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
