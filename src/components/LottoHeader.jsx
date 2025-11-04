import React from 'react';
import { Star } from 'lucide-react';

export default function LottoHeader() {
  return (
    <header className="w-full pt-10 pb-6 bg-gradient-to-b from-indigo-600/20 to-transparent">
      <div className="max-w-5xl mx-auto px-4 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-lg">
          <Star className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-indigo-700 dark:text-indigo-300">Lotto Italiano</h1>
          <p className="text-slate-600 dark:text-slate-300">Scegli 5 numeri da 1 a 90, genera un'estrazione simulata e verifica le vincite.</p>
        </div>
      </div>
    </header>
  );
}
