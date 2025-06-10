import Head from 'next/head';
import ChatInterface from '../components/ChatInterface';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Head>
        <title>Step3D.AI</title>
      </Head>
      <main className="py-10">
        <h1 className="text-center text-3xl font-bold mb-6">Step3D.AI Chat</h1>
        <ChatInterface />
      </main>
    </div>
  );
}
