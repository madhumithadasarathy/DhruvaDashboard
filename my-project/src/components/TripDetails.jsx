import { LocalShipping, Timer, EvStation, Route } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";

const TripDetails = ({ selectedShipment }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 w-full bg-gray-100">
      {/* Shipment ID */}
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-full">
        <LocalShipping className="text-blue-500 text-2xl" />
        <span className="text-gray-700 font-medium">Shipment</span>
        <span className="font-semibold">{selectedShipment.id}</span>
      </div>

      {/* Distance */}
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-full">
        <Route className="teaxt-green-500 text-2xl" />
        <span className="text-gray-700 font-medium">Distance</span>
        <span className="font-semibold">320 km</span>
      </div>

      {/* Time Taken */}
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-full">
        <Timer className="text-orange-500 text-2xl" />
        <span className="text-gray-700 font-medium">Time Taken</span>
        <span className="font-semibold">4 hrs 30 min</span>
      </div>

      {/* Estimated Arrival */}
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-full">
        <Timer className="text-red-500 text-2xl" />
        <span className="text-gray-700 font-medium">Arrival Time</span>
        <span className="font-semibold">18:45 PM</span>
      </div>

      {/* Diesel Level */}
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-full">
        <EvStation className="text-yellow-500 text-2xl" />
        <span className="text-gray-700 font-medium">Diesel Level</span>
        <span className="font-semibold">70%</span>
        <LinearProgress variant="determinate" value={70} className="w-full mt-2" />
      </div>
    </div>
  );
};

export default TripDetails;
