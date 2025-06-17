import React from 'react';

const TemplateGallery: React.FC = () => {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Template Gallery</h2>
      <p className="text-gray-600">Preview features will be here.</p>
      {/* Placeholder for gallery items */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="h-32 bg-gray-200 rounded flex items-center justify-center">Template 1</div>
        <div className="h-32 bg-gray-200 rounded flex items-center justify-center">Template 2</div>
        <div className="h-32 bg-gray-200 rounded flex items-center justify-center">Template 3</div>
      </div>
    </div>
  );
};

export default TemplateGallery;
