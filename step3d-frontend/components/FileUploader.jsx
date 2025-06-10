import { useRef } from 'react';

export default function FileUploader({ onFilesSelected }) {
  const inputRef = useRef(null);

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    onFilesSelected(files);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFiles}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Upload Files
      </button>
    </div>
  );
}
