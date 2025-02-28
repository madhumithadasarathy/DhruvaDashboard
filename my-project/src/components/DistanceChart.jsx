import { DirectionsCar, LocationOn } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";

const DistanceChart = ({ distanceCovered, maxDistance = 1000, startLocation, endLocation }) => {
  const progress = (distanceCovered / maxDistance) * 100; // Convert distance to percentage

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      {/* Start & End Location */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <LocationOn className="text-red-500 text-3xl" />
          <span className="text-gray-700 font-medium">{startLocation}</span>
        </div>
        <span className="text-gray-500 text-xl">→</span>
        <div className="flex items-center gap-2">
          <LocationOn className="text-green-500 text-3xl" />
          <span className="text-gray-700 font-medium">{endLocation}</span>
        </div>
      </div>

      {/* Distance Covered */}
      <div className="flex items-center gap-2 mb-2">
        <DirectionsCar className="text-blue-500 text-3xl" />
        <span className="text-gray-700 font-medium">Distance Covered:</span>
        <span className="font-semibold">{distanceCovered} km</span>
      </div>

      {/* Progress Bar */}
      <LinearProgress variant="determinate" value={progress} className="w-full mt-2" />
    </div>
  );
};

export default DistanceChart;
