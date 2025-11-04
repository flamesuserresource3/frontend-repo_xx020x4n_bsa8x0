import React from 'react';
import { Play, Info } from 'lucide-react';

export default function SimulatorPanel({ canSimulate, onSimulate, result }) {
  return (
    <section className="bg-white/70 dark:bg-slate-900/60 backdrop-blur rounded-xl p-4 shadow ring-1 ring-black/5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Simulatore di estrazione</h2>
        <button
          disabled={!canSimulate}
          onClick={onSimulate}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-white transition ${
            canSimulate ? 'bg-green-600 hover:bg-green-500' : 'bg-slate-400 cursor-not-allowed'
          }`}
          type="button"
        >
          <Play className="w-4 h-4" /> Simula estrazione
        </button>
      </div>

      <div className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
        <Info className="w-4 h-4 mt-0.5 text-slate-500" />
        <p>
          Nel Lotto italiano vengono estratti 5 numeri su 90. Questo strumento genera un'estrazione casuale e calcola quante corrispondenze hai ottenuto.
        </p>
      </div>

      {result && (
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-md bg-white dark:bg-slate-800 ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-wide text-slate-500">Numeri estratti</p>
            <p className="mt-1 font-semibold text-slate-800 dark:text-white">{result.drawn.join(', ')}</p>
          </div>
          <div className="p-3 rounded-md bg-white dark:bg-slate-800 ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-wide text-slate-500">Corrispondenze</p>
            <p className="mt-1 font-semibold text-slate-800 dark:text-white">{result.matches}</p>
          </div>
          <div className="p-3 rounded-md bg-white dark:bg-slate-800 ring-1 ring-black/5">
            <p className="text-xs uppercase tracking-wide text-slate-500">Data</p>
            <p className="mt-1 font-semibold text-slate-800 dark:text-white">{new Date(result.timestamp).toLocaleString()}</p>
          </div>
        </div>
      )}
    </section>
  );
}
