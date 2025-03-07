import { useState } from "react";
import { TruckIcon, PlusCircleIcon, Cog6ToothIcon, XMarkIcon, ChartBarIcon } from "@heroicons/react/24/solid";

const initialShipments = [
  { id: "E138712", status: "In Delivery", truck: "Scania R2009", color: "text-green-500" },
  { id: "E138713", status: "In Transit", truck: "Scania Streamline", color: "text-blue-500" },
  { id: "E138714", status: "In Transit", truck: "Mercedes Benz Actros", color: "text-blue-500" },
  { id: "E138710", status: "In Delivery", truck: "MAN TGX", color: "text-green-500" },
  { id: "E138715", status: "Pending", truck: "Scania R 2016", color: "text-yellow-500" },
  { id: "E138716", status: "Pending", truck: "Volvo FH Classic", color: "text-yellow-500" },
  { id: "E138717", status: "In Delivery", truck: "Volvo FH", color: "text-green-500" },
  { id: "E138718", status: "In Transit", truck: "Scania S", color: "text-blue-500" },
  { id: "E138719", status: "Pending", truck: "Volvo FH Classic", color: "text-yellow-500" },
  { id: "E138720", status: "In Delivery", truck: "Volvo FH", color: "text-green-500" },
  { id: "E138721", status: "In Transit", truck: "Scania S", color: "text-blue-500" }
];

const Sidebar = () => {
  const [active, setActive] = useState("E138710");
  const [searchQuery, setSearchQuery] = useState("");
  const [shipments, setShipments] = useState(initialShipments);
  const [showModal, setShowModal] = useState(false);
  const [newShipment, setNewShipment] = useState({ id: "", truck: "", status: "Pending" });

  const getStatusColor = (status) => {
    switch (status) {
      case "In Delivery": return "text-green-500";
      case "In Transit": return "text-blue-500";
      case "Pending": return "text-yellow-500";
      default: return "text-gray-500";
    }
  };

  const handleAddShipment = () => {
    if (newShipment.id.trim() && newShipment.truck.trim()) {
      setShipments([...shipments, { ...newShipment, color: getStatusColor(newShipment.status) }]);
      setShowModal(false);
      setNewShipment({ id: "", truck: "", status: "Pending" });
    }
  };

  return (
    <aside className="w-96 h-full bg-white border-r p-4 flex flex-col relative">
      {/* Sidebar Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">All Shipments</h2>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded-md text-gray-700 bg-gray-100 mb-4"
      />

      {/* Shipment List */}
      <ul className="flex-1 overflow-y-auto">
        {shipments
          .filter(({ id, truck }) => id.toLowerCase().includes(searchQuery.toLowerCase()) || truck.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(({ id, status, truck, color }) => (
            <li
              key={id}
              className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer ${
                active === id ? "bg-blue-100 border-l-4 border-blue-500" : "hover:bg-gray-100"
              }`}
              onClick={() => setActive(id)}
            >
              <TruckIcon className="w-8 h-8 text-gray-600" />
              <div>
                <p className="text-sm font-semibold text-gray-800">#{id}</p>
                <p className="text-xs text-gray-500">{truck}</p>
              </div>
              <span className={`ml-auto text-xs font-medium ${color}`}>{status}</span>
            </li>
          ))}
      </ul>

      {/* Add New Load Button */}
      <button onClick={() => setShowModal(true)} className="mt-4 w-full p-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-blue-700 transition">
        <PlusCircleIcon className="w-5 h-5" />
        Add New Load
      </button>

      {/* Add Shipment Modal (With Higher Z-Index) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative z-[1001]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Shipment</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-800">
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <label className="block text-sm font-medium text-gray-700">Shipment ID</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md text-gray-700 bg-gray-100 mb-3"
              value={newShipment.id}
              onChange={(e) => setNewShipment({ ...newShipment, id: e.target.value })}
            />

            <label className="block text-sm font-medium text-gray-700">Truck Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md text-gray-700 bg-gray-100 mb-3"
              value={newShipment.truck}
              onChange={(e) => setNewShipment({ ...newShipment, truck: e.target.value })}
            />

            <button
              onClick={handleAddShipment}
              className="w-full p-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
            >
              Add Shipment
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
