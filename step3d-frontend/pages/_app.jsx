import '../styles/globals.css';
import ThemeToggle from '../components/ThemeToggle';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen">
      <div className="p-4 flex justify-end">
        <ThemeToggle />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
