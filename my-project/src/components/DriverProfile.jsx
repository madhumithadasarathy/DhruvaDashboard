import React from "react";
import { Link } from "react-router-dom";
import {
  AccountCircle as AccountIcon,
  LocalShipping as DeliveryIcon,
  Star as StarIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  DirectionsCar as VehicleIcon,
  Dashboard as DashboardIcon,
  ListAlt as OrdersIcon,
  BarChart as AnalyticsIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

// Dummy Data for Analytics
const driver = {
  id: 1,
  name: "Arun Kumar",
  image: "/image.png",
  phone: "9876543210",
  email: "arun.kumar@example.com",
  experience: 5,
  vehicle: "Tata Ace Mini Truck",
  license: "TN 12 AB 3456",
  age: 34,
  gender: "Male",
  currentlyDelivering: {
    package: "Electronics - Mobile Phone",
    destination: "Chennai, Tamil Nadu",
    eta: "2:45 PM",
    status: "On the way",
  },
  lastDelivered: {
    package: "Furniture - Office Chair",
    recipient: "Rajesh Verma",
    deliveredAt: "March 5, 2025 - 4:15 PM",
    rating: 4.8,
  },
  reviews: [
    { user: "Priya Sharma", feedback: "Very professional and timely!" },
    { user: "Rahul Gupta", feedback: "Great service, package arrived safely." },
  ],
  ratings: 5,
  totalDeliveries: 245,
  onTimeDeliveries: 230,
};

// Data for Charts
const chartData = [
  { name: "On-Time Deliveries", value: driver.onTimeDeliveries },
  { name: "Late Deliveries", value: driver.totalDeliveries - driver.onTimeDeliveries },
];
const COLORS = ["#4CAF50", "#F44336"];

const DriverDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Fleet Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/fleet-info" className="flex items-center text-gray-700 hover:text-blue-500">
            <ArrowBackIcon className="mr-2" /> Back to Fleet
          </Link>
          <div className="flex items-center text-blue-600 font-semibold">
            <AccountIcon className="mr-2" /> Profile
          </div>
          <div className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <OrdersIcon className="mr-2" /> Deliveries
          </div>
          <div className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <AnalyticsIcon className="mr-2" /> Analytics
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-6 border-b pb-4">
            <img src={driver.image} alt={driver.name} className="w-20 h-20 rounded-full border" />
            <div>
              <h2 className="text-2xl font-bold">{driver.name}</h2>
              <p className="text-gray-500 flex items-center">
                <PhoneIcon className="text-blue-500 mr-2" /> {driver.phone}
              </p>
              <p className="text-gray-500 flex items-center">
                <EmailIcon className="text-red-500 mr-2" /> {driver.email}
              </p>
              <p className="text-gray-600 flex items-center">
                <VehicleIcon className="text-gray-700 mr-2" /> {driver.vehicle} | License: {driver.license}
              </p>
            </div>
          </div>

          {/* Delivery Status Section */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Current Delivery */}
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold flex items-center">
                <DeliveryIcon className="text-blue-500 mr-2" /> Currently Delivering
              </h3>
              <p><b>Package:</b> {driver.currentlyDelivering.package}</p>
              <p><b>Destination:</b> {driver.currentlyDelivering.destination}</p>
              <p><b>ETA:</b> {driver.currentlyDelivering.eta}</p>
              <p><b>Status:</b> {driver.currentlyDelivering.status}</p>
            </div>

            {/* Last Delivered */}
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Last Delivered</h3>
              <p><b>Package:</b> {driver.lastDelivered.package}</p>
              <p><b>Recipient:</b> {driver.lastDelivered.recipient}</p>
              <p><b>Delivered At:</b> {driver.lastDelivered.deliveredAt}</p>
              <p className="flex items-center">
                <b>Rating:</b> {driver.lastDelivered.rating}
                <StarIcon className="text-yellow-500 ml-1" />
              </p>
            </div>
          </div>

          {/* Performance Charts */}
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Performance Analytics</h3>
            <div className="flex justify-center">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Customer Feedback</h3>
            {driver.reviews.map((review, index) => (
              <p key={index}><b>{review.user}:</b> {review.feedback}</p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DriverDashboard;
