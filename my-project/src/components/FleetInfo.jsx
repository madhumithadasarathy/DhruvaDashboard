import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialFleetData = [
  { id: 1, name: "Arun Kumar", image: "/image.png", location: "Chennai, Tamil Nadu", status: "Active", rating: 5, experience: 5, deliveries: 245 },
  { id: 2, name: "Venkatesh Reddy", image: "/image.png", location: "Hyderabad, Telangana", status: "Free", rating: 4, experience: 3, deliveries: 180 },
  { id: 3, name: "Ravi Shankar", image: "/image.png", location: "Bangalore, Karnataka", status: "Active", rating: 3, experience: 7, deliveries: 320 },
  { id: 4, name: "Suresh Babu", image: "/image.png", location: "Kochi, Kerala", status: "Free", rating: 2, experience: 2, deliveries: 105 },
  { id: 5, name: "Manoj Nair", image: "/image.png", location: "Thiruvananthapuram, Kerala", status: "Active", rating: 5, experience: 6, deliveries: 290 },
  { id: 6, name: "Gopal Krishnan", image: "/image.png", location: "Coimbatore, Tamil Nadu", status: "Free", rating: 4, experience: 4, deliveries: 210 },
  { id: 7, name: "Anil Raj", image: "/image.png", location: "Madurai, Tamil Nadu", status: "Active", rating: 5, experience: 5, deliveries: 250 },
  { id: 8, name: "Karthik Sharma", image: "/image.png", location: "Mysore, Karnataka", status: "Free", rating: 3, experience: 3, deliveries: 170 },
  { id: 9, name: "Prakash Rao", image: "/image.png", location: "Visakhapatnam, Andhra Pradesh", status: "Active", rating: 2, experience: 1, deliveries: 80 },
  { id: 10, name: "Hariharan", image: "/image.png", location: "Tirupati, Andhra Pradesh", status: "Free", rating: 1, experience: 2, deliveries: 95 },
  { id: 11, name: "Ramachandran", image: "/image.png", location: "Salem, Tamil Nadu", status: "Active", rating: 4, experience: 5, deliveries: 230 },
  { id: 12, name: "Bharath Reddy", image: "/image.png", location: "Warangal, Telangana", status: "Free", rating: 3, experience: 4, deliveries: 190 },
  { id: 13, name: "Dinesh Menon", image: "/image.png", location: "Kollam, Kerala", status: "Active", rating: 5, experience: 7, deliveries: 310 },
  { id: 14, name: "Rajeev Nair", image: "/image.png", location: "Erode, Tamil Nadu", status: "Free", rating: 2, experience: 2, deliveries: 110 },
  { id: 15, name: "Sathyanarayan", image: "/image.png", location: "Vijayawada, Andhra Pradesh", status: "Active", rating: 3, experience: 3, deliveries: 180 },
  { id: 16, name: "Harish Kumar", image: "/image.png", location: "Belgaum, Karnataka", status: "Free", rating: 1, experience: 1, deliveries: 75 },
  { id: 17, name: "Ganesh Rao", image: "/image.png", location: "Hubli, Karnataka", status: "Active", rating: 5, experience: 6, deliveries: 280 },
  { id: 18, name: "Narayan Swamy", image: "/image.png", location: "Guntur, Andhra Pradesh", status: "Free", rating: 4, experience: 4, deliveries: 220 },
  { id: 19, name: "Raghunathan", image: "/image.png", location: "Tirunelveli, Tamil Nadu", status: "Active", rating: 5, experience: 5, deliveries: 260 },
  { id: 20, name: "Mahesh Yadav", image: "/image.png", location: "Kadapa, Andhra Pradesh", status: "Free", rating: 2, experience: 2, deliveries: 100 },
  { id: 21, name: "Ramesh Iyer", image: "/image.png", location: "Nellore, Andhra Pradesh", status: "Active", rating: 5, experience: 7, deliveries: 340 },
  { id: 22, name: "Srinivasan", image: "/image.png", location: "Udupi, Karnataka", status: "Free", rating: 4, experience: 3, deliveries: 175 },
  { id: 23, name: "Kiran Kumar", image: "/image.png", location: "Puducherry", status: "Active", rating: 3, experience: 2, deliveries: 120 },
  { id: 24, name: "Vinod Krishna", image: "/image.png", location: "Nagapattinam, Tamil Nadu", status: "Free", rating: 2, experience: 1, deliveries: 90 },
  { id: 25, name: "Balaji Rao", image: "/image.png", location: "Trichy, Tamil Nadu", status: "Active", rating: 1, experience: 2, deliveries: 105 },
  { id: 26, name: "Sudheer Babu", image: "/image.png", location: "Secunderabad, Telangana", status: "Free", rating: 5, experience: 6, deliveries: 285 },
  { id: 27, name: "Kamal Kishore", image: "/image.png", location: "Shimoga, Karnataka", status: "Active", rating: 3, experience: 3, deliveries: 160 },
  { id: 28, name: "Dhanush R", image: "/image.png", location: "Vizianagaram, Andhra Pradesh", status: "Free", rating: 2, experience: 1, deliveries: 80 },
  { id: 29, name: "Ravi Teja", image: "/image.png", location: "Rajahmundry, Andhra Pradesh", status: "Active", rating: 4, experience: 5, deliveries: 220 },
  { id: 30, name: "Vishal Menon", image: "/image.png", location: "Kottayam, Kerala", status: "Free", rating: 5, experience: 7, deliveries: 330 },
  { id: 31, name: "Ajay Varma", image: "/image.png", location: "Karimnagar, Telangana", status: "Active", rating: 3, experience: 4, deliveries: 190 },
  { id: 32, name: "Shyam Sundar", image: "/image.png", location: "Gulbarga, Karnataka", status: "Active", rating: 4, experience: 5, deliveries: 200 },
  { id: 33, name: "Anirudh Rao", image: "/image.png", location: "Dindigul, Tamil Nadu", status: "Free", rating: 5, experience: 6, deliveries: 270 },
  { id: 34, name: "Sachin Babu", image: "/image.png", location: "Bellary, Karnataka", status: "Active", rating: 4, experience: 4, deliveries: 190 },
  { id: 35, name: "Kailash Raj", image: "/image.png", location: "Thanjavur, Tamil Nadu", status: "Free", rating: 3, experience: 3, deliveries: 150 },
  { id: 36, name: "Subramaniam", image: "/image.png", location: "Pondicherry", status: "Active", rating: 3, experience: 4, deliveries: 210 },
  { id: 37, name: "Charan Reddy", image: "/image.png", location: "Ongole, Andhra Pradesh", status: "Free", rating: 2, experience: 2, deliveries: 95 },
  { id: 38, name: "Sanjay Rao", image: "/image.png", location: "Chikkamagaluru, Karnataka", status: "Active", rating: 1, experience: 1, deliveries: 85 },
  { id: 39, name: "Arun Vijay", image: "/image.png", location: "Thanjavur, Tamil Nadu", status: "Free", rating: 5, experience: 6, deliveries: 290 },
  { id: 40, name: "Dilip Kumar", image: "/image.png", location: "Kurnool, Andhra Pradesh", status: "Active", rating: 3, experience: 3, deliveries: 170 },
  { id: 41, name: "Santosh Babu", image: "/image.png", location: "Nizamabad, Telangana", status: "Free", rating: 2, experience: 2, deliveries: 110 },
  { id: 42, name: "Keshav Raj", image: "/image.png", location: "Mangalore, Karnataka", status: "Active", rating: 4, experience: 5, deliveries: 215 },
  { id: 43, name: "Jagadeesh Rao", image: "/image.png", location: "Gadag, Karnataka", status: "Free", rating: 3, experience: 3, deliveries: 160 },
  { id: 44, name: "Vinay Menon", image: "/image.png", location: "Tumkur, Karnataka", status: "Active", rating: 5, experience: 7, deliveries: 320 },
  { id: 45, name: "Sathish Kumar", image: "/image.png", location: "Kolar, Karnataka", status: "Free", rating: 4, experience: 4, deliveries: 205 },
  { id: 46, name: "Saravanan M", image: "/image.png", location: "Chennai, TamilNadu", status: "Free", rating: 3, experience: 2, deliveries: 116 },
  { id: 47, name: "Nileshwar Rao", image: "/image.png", location: "Mangalore, Karnataka", status: "Active", rating: 4, experience: 15, deliveries: 415 },
  { id: 48, name: "Devnath", image: "/image.png", location: "Gadag, Karnataka", status: "Free", rating: 5, experience: 13, deliveries: 760 },
  { id: 49, name: "Vinay Menon", image: "/image.png", location: "Tumkur, Karnataka", status: "Active", rating: 5, experience: 7, deliveries: 320 },
  { id: 50, name: "Sathish Kumar", image: "/image.png", location: "Kolar, Karnataka", status: "Free", rating: 4, experience: 4, deliveries: 405 },
];

const FleetInfo = () => {
  const [fleetData, setFleetData] = useState(initialFleetData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 8;

  const filteredFleet = fleetData.filter((driver) => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterOption.startsWith("Status:")) {
      return matchesSearch && driver.status === filterOption.split(":")[1];
    } else if (filterOption.startsWith("Rating:")) {
      return matchesSearch && driver.rating.toString() === filterOption.split(":")[1];
    }
    return matchesSearch;
  });

  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = filteredFleet.slice(indexOfFirstDriver, indexOfLastDriver);
  const totalPages = Math.ceil(filteredFleet.length / driversPerPage);

  const addNewDriver = () => {
    const newDriver = {
      id: fleetData.length + 1,
      name: `Driver ${fleetData.length + 1}`,
      image: "/image.png",
      location: "New Location",
      status: "Free",
      rating: Math.floor(Math.random() * 5) + 1,
    };
    setFleetData([...fleetData, newDriver]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-widest">Fleet Information</h1>

      {/* Search, Filter, and Add Driver (Aligned in One Row) */}
      <div className="flex flex-wrap items-center bg-white p-4 rounded-lg shadow-md mb-6 space-x-4">
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
          className="border p-2 rounded-md w-full md:w-1/4"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="">All Filters</option>
          <optgroup label="Status">
            <option value="Status:Active">Active</option>
            <option value="Status:Free">Free</option>
          </optgroup>
          <optgroup label="Star Rating">
            <option value="Rating:5">⭐⭐⭐⭐⭐</option>
            <option value="Rating:4">⭐⭐⭐⭐</option>
            <option value="Rating:3">⭐⭐⭐</option>
            <option value="Rating:2">⭐⭐</option>
            <option value="Rating:1">⭐</option>
          </optgroup>
        </select>

        {/* Add New Driver Button */}
        <button onClick={addNewDriver} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          + Add New Driver
        </button>
      </div>

      {/* Fleet Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentDrivers.map((driver) => (
          <Link to={`/driver/${driver.id}`} key={driver.id} className="relative flex flex-col items-center bg-white p-4 rounded-lg shadow-md cursor-pointer">
            <div className="relative group">
              <img
                src={driver.image}
                alt={driver.name}
                className="w-24 h-24 rounded-full border-2 border-gray-300"
              />

              {/* Hover Effect for Rating */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Star Rating: {"⭐".repeat(driver.rating)}
              </div>
            </div>

            <p className="mt-2 font-semibold">{driver.name}</p>
            <p className="text-gray-500 text-sm">{driver.location}</p>
            <span
              className={`mt-1 px-3 py-1 text-white rounded-full text-sm ${
                driver.status === "Active" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {driver.status}
            </span>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center space-x-4">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FleetInfo;
