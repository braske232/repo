import React from 'react';

const RealtimePreview: React.FC = () => {
  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-2">Real-time Preview</h2>
      <div className="h-48 bg-white border border-gray-300 rounded flex items-center justify-center">
        <p className="text-gray-500">Live preview will appear here.</p>
      </div>
    </div>
  );
};

export default RealtimePreview;
