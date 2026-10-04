'use client';

import React from 'react';

interface AdBannerProps {
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

export function AdBanner({
  slotId = '1234567890',
  format = 'auto',
  className = '',
}: AdBannerProps) {
  return (
    <div className={`my-8 text-center overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/40 p-4 ${className}`}>
      <span className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">Advertisement</span>
      <ins
        className="adsbygoogle block"
        style={{ display: 'block', minHeight: '90px' }}
        data-ad-client="ca-pub-8973108060277483"
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
