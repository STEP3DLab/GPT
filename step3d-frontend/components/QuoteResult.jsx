export default function QuoteResult({ spec, quote }) {
  if (!spec && !quote) return null;

  return (
    <div className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800">
      {spec && (
        <div className="mb-2">
          <h3 className="font-semibold">Technical Specification</h3>
          <pre className="whitespace-pre-wrap text-sm">{spec}</pre>
        </div>
      )}
      {quote && (
        <div>
          <h3 className="font-semibold">Commercial Offer</h3>
          <pre className="whitespace-pre-wrap text-sm">{quote}</pre>
        </div>
      )}
    </div>
  );
}
