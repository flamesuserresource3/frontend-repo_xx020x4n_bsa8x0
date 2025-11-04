import React from 'react';
import { Shuffle, Trash2 } from 'lucide-react';

const numbers = Array.from({ length: 90 }, (_, i) => i + 1);

export default function NumberPicker({ selectedNumbers, onToggle, onQuickPick, onClear }) {
  return (
    <section className="bg-white/70 dark:bg-slate-900/60 backdrop-blur rounded-xl p-4 shadow ring-1 ring-black/5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Seleziona i tuoi numeri</h2>
        <div className="flex gap-2">
          <button
            onClick={onQuickPick}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition"
            type="button"
          >
            <Shuffle className="w-4 h-4" /> Estrazione rapida
          </button>
          <button
            onClick={onClear}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
            type="button"
          >
            <Trash2 className="w-4 h-4" /> Pulisci
          </button>
        </div>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Massimo 5 numeri. Clicca per selezionare/deselezionare.</p>
      <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-15 gap-2">
        {numbers.map((n) => {
          const selected = selectedNumbers.includes(n);
          return (
            <button
              key={n}
              type="button"
              onClick={() => onToggle(n)}
              className={[
                'aspect-square w-full rounded-md text-sm font-medium transition shadow-sm',
                selected
                  ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700',
              ].join(' ')}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className="mt-4 text-sm text-slate-700 dark:text-slate-300">
        Selezionati: <span className="font-semibold">{selectedNumbers.sort((a,b)=>a-b).join(', ') || 'Nessuno'}</span>
      </div>
    </section>
  );
}
