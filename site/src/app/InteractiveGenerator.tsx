'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, RefreshCw, Terminal, Shield, Key, Sparkles, Sliders, Zap } from 'lucide-react';

const FALLBACK_WORDS = [
  'apple', 'banana', 'orange', 'river', 'mountain', 'cloud', 'forest', 'silver',
  'golden', 'ember', 'falcon', 'winter', 'summer', 'castle', 'shield', 'dragon',
  'harbor', 'whisper', 'timber', 'shadow', 'beacon', 'zenith', 'vortex', 'planet',
  'galaxy', 'canyon', 'desert', 'valley', 'meadow', 'island', 'pebble', 'stream',
  'anchor', 'bridge', 'compass', 'feather', 'hammer', 'lantern', 'mirror', 'sailor'
];

export function InteractiveGenerator() {
  const [mode, setMode] = useState<'password' | 'passphrase' | 'pin' | 'hex'>('password');
  const [length, setLength] = useState<number>(18);
  const [wordCount, setWordCount] = useState<number>(5);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [result, setResult] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const generate = () => {
    if (typeof window === 'undefined') return;

    if (mode === 'password') {
      let chars = 'abcdefghijklmnopqrstuvwxyz';
      if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (includeNumbers) chars += '0123456789';
      if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

      const array = new Uint32Array(length);
      window.crypto.getRandomValues(array);
      let res = '';
      for (let i = 0; i < length; i++) {
        res += chars[array[i] % chars.length];
      }
      setResult(res);
    } else if (mode === 'passphrase') {
      const array = new Uint32Array(wordCount);
      window.crypto.getRandomValues(array);
      const words = Array.from(array).map(n => FALLBACK_WORDS[n % FALLBACK_WORDS.length]);
      setResult(words.join('-'));
    } else if (mode === 'pin') {
      const array = new Uint32Array(length);
      window.crypto.getRandomValues(array);
      let res = '';
      for (let i = 0; i < length; i++) {
        res += (array[i] % 10).toString();
      }
      setResult(res);
    } else if (mode === 'hex') {
      const byteLen = Math.ceil(length / 2);
      const array = new Uint8Array(byteLen);
      window.crypto.getRandomValues(array);
      const hex = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
      setResult(hex.slice(0, length));
    }
  };

  useEffect(() => {
    generate();
  }, [mode, length, wordCount, includeSymbols, includeNumbers, includeUppercase]);

  const copyToClipboard = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const calculateEntropy = () => {
    if (mode === 'password') {
      let pool = 26;
      if (includeUppercase) pool += 26;
      if (includeNumbers) pool += 10;
      if (includeSymbols) pool += 32;
      return Math.round(length * Math.log2(pool));
    } else if (mode === 'passphrase') {
      return Math.round(wordCount * Math.log2(FALLBACK_WORDS.length));
    } else if (mode === 'pin') {
      return Math.round(length * Math.log2(10));
    } else {
      return Math.round(length * Math.log2(16));
    }
  };

  const entropy = calculateEntropy();

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Key className="w-6 h-6 text-emerald-400" />
          <h2 className="text-xl font-bold tracking-tight text-white">Live Web Generator</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setMode('password')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'password'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Password
          </button>
          <button
            onClick={() => setMode('passphrase')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'passphrase'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Diceware
          </button>
          <button
            onClick={() => setMode('pin')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'pin'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            PIN
          </button>
          <button
            onClick={() => setMode('hex')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'hex'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Token Hex
          </button>
        </div>
      </div>

      {/* Result Display Box */}
      <div className="relative mb-6">
        <div className="bg-slate-950 border border-slate-700 rounded-xl p-4 sm:p-5 flex items-center justify-between gap-4 font-mono text-base sm:text-lg text-emerald-400 break-all select-all shadow-inner">
          <span className="tracking-wider">{result || 'Generating...'}</span>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={generate}
              title="Regenerate"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button
              onClick={copyToClipboard}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-6 bg-slate-950/50 px-4 py-2.5 rounded-lg border border-slate-800/80">
        <div className="flex items-center gap-2">
          <Shield className={`w-4 h-4 ${entropy > 75 ? 'text-emerald-400' : 'text-amber-400'}`} />
          <span>Calculated Entropy: <strong className="text-white">{entropy} bits</strong></span>
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
          entropy >= 80 ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
        }`}>
          {entropy >= 100 ? 'Military Grade' : entropy >= 70 ? 'Very Strong' : 'Moderate'}
        </span>
      </div>

      {/* Controls */}
      <div className="space-y-5">
        {mode === 'passphrase' ? (
          <div>
            <div className="flex justify-between text-sm mb-2 text-slate-300">
              <span>Word Count: <strong className="text-emerald-400">{wordCount}</strong></span>
              <span className="text-xs text-slate-500">3 - 8 words</span>
            </div>
            <input
              type="range"
              min="3"
              max="8"
              value={wordCount}
              onChange={(e) => setWordCount(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>
        ) : (
          <div>
            <div className="flex justify-between text-sm mb-2 text-slate-300">
              <span>Length: <strong className="text-emerald-400">{length}</strong> characters</span>
              <span className="text-xs text-slate-500">6 - 64</span>
            </div>
            <input
              type="range"
              min="6"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>
        )}

        {mode === 'password' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer bg-slate-950/60 p-3 rounded-lg border border-slate-800 hover:border-slate-700">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="accent-emerald-500 w-4 h-4 rounded"
              />
              <span>Uppercase (A-Z)</span>
            </label>
            <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer bg-slate-950/60 p-3 rounded-lg border border-slate-800 hover:border-slate-700">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="accent-emerald-500 w-4 h-4 rounded"
              />
              <span>Numbers (0-9)</span>
            </label>
            <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer bg-slate-950/60 p-3 rounded-lg border border-slate-800 hover:border-slate-700">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="accent-emerald-500 w-4 h-4 rounded"
              />
              <span>Special Symbols</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
