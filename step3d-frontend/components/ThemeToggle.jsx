import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [enabled]);

  return (
    <button
      type="button"
      onClick={() => setEnabled(!enabled)}
      className="px-2 py-1 border rounded"
    >
      {enabled ? 'Light' : 'Dark'} Mode
    </button>
  );
}
