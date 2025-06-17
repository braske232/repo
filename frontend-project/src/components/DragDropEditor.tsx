import React from 'react';

const DragDropEditor: React.FC = () => {
  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-2">Drag & Drop Editor</h2>
      <div className="h-64 bg-gray-100 border-dashed border-2 border-gray-300 rounded flex items-center justify-center">
        <p className="text-gray-500">Editor Interface Area</p>
      </div>
    </div>
  );
};

export default DragDropEditor;
