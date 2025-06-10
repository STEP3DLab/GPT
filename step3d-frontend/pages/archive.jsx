import { useState } from 'react';
import Head from 'next/head';

const mockHistory = [
  { id: 1, date: '2024-06-10', detail: 'Quote A details...' },
  { id: 2, date: '2024-06-09', detail: 'Quote B details...' },
];

export default function Archive() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Head>
        <title>Archive - Step3D.AI</title>
      </Head>
      <main className="py-10 max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Archive</h1>
        <ul className="space-y-2">
          {mockHistory.map(item => (
            <li key={item.id} className="border p-2 rounded" onClick={() => setSelected(item)}>
              <span>{item.date}</span>
            </li>
          ))}
        </ul>
        {selected && (
          <div className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800">
            <h2 className="font-semibold mb-2">Details for {selected.date}</h2>
            <p className="whitespace-pre-wrap text-sm">{selected.detail}</p>
          </div>
        )}
      </main>
    </div>
  );
}
