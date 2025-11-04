import React from 'react';
import { History } from 'lucide-react';

export default function HistoryList({ history }) {
  if (!history.length) {
    return (
      <section className="bg-white/70 dark:bg-slate-900/60 backdrop-blur rounded-xl p-4 shadow ring-1 ring-black/5">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-slate-500" />
          <h2 className="text-lg font-semibold">Storico</h2>
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Nessuna estrazione simulata ancora.</p>
      </section>
    );
  }

  return (
    <section className="bg-white/70 dark:bg-slate-900/60 backdrop-blur rounded-xl p-4 shadow ring-1 ring-black/5">
      <div className="flex items-center gap-2 mb-2">
        <History className="w-5 h-5 text-slate-500" />
        <h2 className="text-lg font-semibold">Storico</h2>
      </div>
      <ul className="space-y-2">
        {history.map((h, idx) => (
          <li key={idx} className="p-3 rounded-md bg-white dark:bg-slate-800 ring-1 ring-black/5">
            <div className="text-xs text-slate-500">{new Date(h.timestamp).toLocaleString()}</div>
            <div className="mt-1 text-sm">Estratti: <span className="font-medium">{h.drawn.join(', ')}</span></div>
            <div className="text-sm">Tuoi numeri: <span className="font-medium">{h.picked.join(', ')}</span></div>
            <div className="text-sm">Corrispondenze: <span className="font-semibold">{h.matches}</span></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
