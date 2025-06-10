import { useState } from 'react';
import FileUploader from './FileUploader';
import QuoteResult from './QuoteResult';

export default function ChatInterface() {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [spec, setSpec] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock interaction with AI
    setSpec(`Generated specification for: ${message}`);
    setQuote(`Estimated quote for files: ${files.map(f => f.name).join(', ')}`);
    setMessage('');
    setFiles([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full border rounded p-2 dark:bg-gray-700 dark:text-white"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your task..."
        />
        <FileUploader onFilesSelected={setFiles} />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Send
        </button>
      </form>
      <QuoteResult spec={spec} quote={quote} />
      {quote && (
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded">
          Order 3D Service
        </button>
      )}
    </div>
  );
}
