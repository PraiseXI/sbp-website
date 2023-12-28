// components/VideoSection.tsx
import React from 'react';

const VideoSection = () => {
  return (
    <div className=" flex flex-col sm:flex-row justify-center items-center gap-4 p-4">
      <div className="w-full flex-1">
        {/* Replace with the actual video source */}
        <video className="rounded-lg w-full" controls>
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" w-full flex-1 relative text-white">
        {/* Replace with the actual video source */}
        <video className="rounded-lg w-full" controls>
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <p className="text-xs md:text-sm p-2 justify-center items-center bg-black bg-opacity-50 rounded">
            SHOTBYPRAISE PRODUCTION
          </p>
        </div>
      </div>
      <div className=" w-full flex-1">
        {/* Replace with the actual video source */}
        <video className="rounded-lg w-full" controls>
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
