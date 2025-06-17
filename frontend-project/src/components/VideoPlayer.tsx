import React from 'react';

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-2">Video Preview</h2>
      {videoSrc ? (
        <video controls src={videoSrc} className="w-full rounded">
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="h-48 bg-gray-800 rounded flex items-center justify-center">
          <p className="text-gray-400">Video player will be here.</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
