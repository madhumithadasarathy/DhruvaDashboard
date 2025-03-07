import React, { useState } from "react";

const fleetData = [
  { id: 1, name: "Arun Kumar", image: "/image.png", location: "Chennai, Tamil Nadu", status: "Active" },
  { id: 2, name: "Venkatesh Reddy", image: "/image.png", location: "Hyderabad, Telangana", status: "Free" },
  { id: 3, name: "Ravi Shankar", image: "/image.png", location: "Bangalore, Karnataka", status: "Active" },
  { id: 4, name: "Suresh Babu", image: "/image.png", location: "Kochi, Kerala", status: "Free" },
  { id: 5, name: "Manoj Nair", image: "/image.png", location: "Thiruvananthapuram, Kerala", status: "Active" },
  { id: 6, name: "Gopal Krishnan", image: "/image.png", location: "Coimbatore, Tamil Nadu", status: "Free" },
  { id: 7, name: "Anil Raj", image: "/image.png", location: "Madurai, Tamil Nadu", status: "Active" },
  { id: 8, name: "Karthik Sharma", image: "/image.png", location: "Mysore, Karnataka", status: "Free" },
  { id: 9, name: "Prakash Rao", image: "/image.png", location: "Visakhapatnam, Andhra Pradesh", status: "Active" },
  { id: 10, name: "Hariharan", image: "/image.png", location: "Tirupati, Andhra Pradesh", status: "Free" },
];

const FleetInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Filtered list based on search and status filter
  const filteredFleet = fleetData.filter((driver) => {
    return (
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === "" || driver.status === filterStatus)
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Fleet Information</h1>

      {/* Search, Filter, and Add Driver */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-lg shadow-md mb-6">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search driver..."
          className="border p-2 rounded-md w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter Dropdown */}
        <select
          className="border p-2 rounded-md w-full md:w-1/4 mt-2 md:mt-0"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Free">Free</option>
        </select>

        {/* Add New Driver Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 md:mt-0">
          + Add New Driver
        </button>
      </div>

      {/* Fleet Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFleet.map((driver) => (
          <div key={driver.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img
              src={driver.image}
              alt={driver.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
            <p className="mt-2 font-semibold">{driver.name}</p>
            <p className="text-gray-500 text-sm">{driver.location}</p>
            <span
              className={`mt-1 px-3 py-1 text-white rounded-full text-sm ${
                driver.status === "Active" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {driver.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetInfo;
