import React, { useMemo, useState } from 'react';
import LottoHeader from './components/LottoHeader';
import NumberPicker from './components/NumberPicker';
import SimulatorPanel from './components/SimulatorPanel';
import HistoryList from './components/HistoryList';

function getRandomDistinct(count, max) {
  const nums = Array.from({ length: max }, (_, i) => i + 1);
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums.slice(0, count).sort((a, b) => a - b);
}

export default function App() {
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const canSimulate = selected.length === 5;

  const toggleNumber = (n) => {
    setResult(null);
    setSelected((prev) => {
      const exists = prev.includes(n);
      if (exists) return prev.filter((x) => x !== n);
      if (prev.length >= 5) return prev; // limit 5
      return [...prev, n];
    });
  };

  const quickPick = () => {
    setResult(null);
    setSelected(getRandomDistinct(5, 90));
  };

  const clearAll = () => {
    setResult(null);
    setSelected([]);
  };

  const simulate = () => {
    if (!canSimulate) return;
    const drawn = getRandomDistinct(5, 90);
    const matches = drawn.filter((n) => selected.includes(n)).length;
    const record = {
      timestamp: Date.now(),
      drawn,
      picked: [...selected].sort((a, b) => a - b),
      matches,
    };
    setResult(record);
    setHistory((prev) => [record, ...prev].slice(0, 20));
  };

  const stats = useMemo(() => {
    const total = history.length;
    const byMatches = [0, 0, 0, 0, 0, 0];
    history.forEach((h) => byMatches[h.matches]++);
    return { total, byMatches };
  }, [history]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-slate-50 dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      <LottoHeader />

      <main className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <NumberPicker
              selectedNumbers={selected}
              onToggle={toggleNumber}
              onQuickPick={quickPick}
              onClear={clearAll}
            />

            <SimulatorPanel canSimulate={canSimulate} onSimulate={simulate} result={result} />

            <section className="bg-white/70 dark:bg-slate-900/60 backdrop-blur rounded-xl p-4 shadow ring-1 ring-black/5">
              <h2 className="text-lg font-semibold mb-2">Statistiche sessione</h2>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Estrazioni simulate: <span className="font-semibold">{stats.total}</span>
              </p>
              <div className="mt-2 grid grid-cols-5 gap-2 text-center text-sm">
                {[1, 2, 3, 4, 5].map((m) => (
                  <div key={m} className="p-2 rounded-md bg-white dark:bg-slate-800 ring-1 ring-black/5">
                    <div className="text-xs text-slate-500">{m} numeri</div>
                    <div className="font-semibold">{stats.byMatches[m]}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <HistoryList history={history} />
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-slate-600 dark:text-slate-400">
        Gioca responsabilmente. Questa è una simulazione non ufficiale, solo per divertimento.
      </footer>
    </div>
  );
}
