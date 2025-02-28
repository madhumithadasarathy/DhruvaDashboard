import { useState } from "react";
import { TruckIcon, PlusCircleIcon, Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/solid";

const initialShipments = [
  { id: "E138712", status: "In Delivery", truck: "Scania R2009", color: "text-green-500" },
  { id: "E138713", status: "In Transit", truck: "Scania Streamline", color: "text-blue-500" },
  { id: "E138714", status: "In Transit", truck: "Mercedes Benz Actros", color: "text-blue-500" },
  { id: "E138710", status: "In Delivery", truck: "MAN TGX", color: "text-green-500" },
  { id: "E138715", status: "Pending", truck: "Scania R 2016", color: "text-yellow-500" },
  { id: "E138716", status: "Pending", truck: "Volvo FH Classic", color: "text-yellow-500" },
  { id: "E138717", status: "In Delivery", truck: "Volvo FH", color: "text-green-500" },
  { id: "E138718", status: "In Transit", truck: "Scania S", color: "text-blue-500" },
];

const Sidebar = () => {
  const [active, setActive] = useState("E138710");
  const [searchQuery, setSearchQuery] = useState("");
  const [shipments, setShipments] = useState(initialShipments);
  const [showSettings, setShowSettings] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newShipment, setNewShipment] = useState({ id: "", truck: "", status: "Pending" });

  const filteredShipments = shipments.filter(({ id, truck }) =>
    id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    truck.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddShipment = () => {
    if (newShipment.id.trim() && newShipment.truck.trim()) {
      setShipments([...shipments, { ...newShipment, color: getStatusColor(newShipment.status) }]);
      setShowModal(false);
      setNewShipment({ id: "", truck: "", status: "Pending" });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Delivery": return "text-green-500";
      case "In Transit": return "text-blue-500";
      case "Pending": return "text-yellow-500";
      default: return "text-gray-500";
    }
  };

  return (
    <aside className="w-80 h-screen bg-white border-r  p-4 flex flex-col relative">
      {/* Sidebar Header */}
      <div className="flex justify-between items-center mb-4 relative">
        <h2 className="text-lg font-semibold text-gray-800">All Shipping</h2>
        
        {/* Settings Icon */}
        <button className="text-gray-500 hover:text-gray-800 relative" onClick={() => setShowSettings(!showSettings)}>
          <Cog6ToothIcon className="w-6 h-6" />
        </button>

        {/* Settings Dropdown Menu */}
        {showSettings && (
          <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md w-48 border border-gray-200 z-50">
            <ul className="py-2 text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile Settings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Theme Toggle</li>
              <li className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded-md text-gray-700 bg-gray-100 focus:outline-none mb-4"
      />

      {/* Shipment List */}
      <ul className="flex-1 overflow-y-auto">
        {filteredShipments.length > 0 ? (
          filteredShipments.map(({ id, status, truck, color }) => (
            <li
              key={id}
              className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-all ${
                active === id ? "bg-blue-100 border-l-4 border-blue-500 shadow-md" : "hover:bg-gray-100"
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
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">No shipments found</p>
        )}
      </ul>

      {/* Add New Load Button */}
      <button onClick={() => setShowModal(true)} className="mt-4 w-full p-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-blue-700 transition">
        <PlusCircleIcon className="w-5 h-5" />
        Add New Load
      </button>

      {/* Add Shipment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
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
              placeholder="E138719"
              value={newShipment.id}
              onChange={(e) => setNewShipment({ ...newShipment, id: e.target.value })}
            />

            <label className="block text-sm font-medium text-gray-700">Truck Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md text-gray-700 bg-gray-100 mb-3"
              placeholder="Volvo FH 16"
              value={newShipment.truck}
              onChange={(e) => setNewShipment({ ...newShipment, truck: e.target.value })}
            />

            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              className="w-full p-2 border rounded-md text-gray-700 bg-gray-100 mb-4"
              value={newShipment.status}
              onChange={(e) => setNewShipment({ ...newShipment, status: e.target.value })}
            >
              <option>Pending</option>
              <option>In Transit</option>
              <option>In Delivery</option>
            </select>

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
