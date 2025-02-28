import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon to fix Leaflet icon issue
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const vehicleData = [
  { id: "T001", lat: 12.9716, lng: 77.5946, status: "In Transit" },
  { id: "T002", lat: 13.0359, lng: 77.5970, status: "Idle" },
  { id: "T003", lat: 12.9141, lng: 77.6608, status: "In Transit" },
];

const MapView = () => {
  return (
    <div className="flex-1 p-4">
      <div className="bg-white shadow-md rounded-lg p-3 h-full">
        <h2 className="text-lg font-semibold mb-3 text-gray-900">Live Fleet Tracking</h2>

        <MapContainer
          center={[12.9716, 77.5946]} // Default location (Bangalore)
          zoom={12}
          className="h-[500px] w-full rounded-md"
        >
          {/* Dark-themed map */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Vehicle Markers */}
          {vehicleData.map((vehicle) => (
            <Marker key={vehicle.id} position={[vehicle.lat, vehicle.lng]} icon={customIcon}>
              <Popup>
                <b>Truck ID:</b> {vehicle.id} <br />
                <b>Status:</b> {vehicle.status}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
