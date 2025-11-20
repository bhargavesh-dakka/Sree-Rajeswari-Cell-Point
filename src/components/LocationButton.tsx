import { useState } from "react";

const LocationButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const googleMapsUrl = "https://maps.google.com/?q=Sree+Rajeswari+Cell+Point";

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Location Button */}
        <div className=" text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110">
          <img
              src="/location.svg"
              alt="Location"
              className="w-50 h-50"
            />
        </div>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 w-48 bg-gray-800 text-white text-sm rounded-lg p-3 shadow-lg">
            <div className="text-center">
              <p className="font-medium">Visit our location!</p>
              <p className="text-xs text-gray-300 mt-1">Open in Google Maps</p>
            </div>
            {/* Arrow */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        )}

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
      </div>
    </a>
  );
};

export default LocationButton;
