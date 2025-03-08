import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star as StarIcon,
  LocalShipping as LocalShippingIcon,
  DirectionsCar as DirectionsCarIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  ArrowBack as ArrowBackIcon,
  Speed as SpeedIcon,
} from "@mui/icons-material";

// Import fleet data
const fleetData = [
  {
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
      status: "On the way"
    },
    lastDelivered: {
      package: "Furniture - Office Chair",
      recipient: "Rajesh Verma",
      deliveredAt: "March 5, 2025 - 4:15 PM",
      rating: 4.8
    },
    reviews: [{ user: "Priya Sharma", feedback: "Very professional and timely!" }],
    ratings: 5,
    totalDeliveries: 245,
    onTimeDeliveries: 230
  },
  {
    id: 2,
    name: "Venkatesh Reddy",
    image: "/image.png",
    phone: "9098765432",
    email: "venkatesh.reddy@example.com",
    experience: 3,
    vehicle: "Mahindra Bolero Pickup",
    license: "AP 09 XY 5678",
    age: 29,
    gender: "Male",
    currentlyDelivering: {
      package: "Clothing - Fashion Wear",
      destination: "Hyderabad, Telangana",
      eta: "3:30 PM",
      status: "On the way"
    },
    lastDelivered: {
      package: "Books - Educational Material",
      recipient: "Amit Tiwari",
      deliveredAt: "March 6, 2025 - 11:00 AM",
      rating: 4.9
    },
    reviews: [{ user: "Sneha Patel", feedback: "Super punctual and friendly!" }],
    ratings: 4,
    totalDeliveries: 180,
    onTimeDeliveries: 165
  },
  {
    id: 3,
    name: "Ravi Shankar",
    image: "/image.png",
    phone: "8901234567",
    email: "ravi.shankar@example.com",
    experience: 7,
    vehicle: "Eicher Pro 2049",
    license: "KA 01 AB 2345",
    age: 40,
    gender: "Male",
    currentlyDelivering: {
      package: "Medical Supplies",
      destination: "Bangalore, Karnataka",
      eta: "1:15 PM",
      status: "On the way"
    },
    lastDelivered: {
      package: "Grocery Items",
      recipient: "Sunil Rao",
      deliveredAt: "March 4, 2025 - 5:20 PM",
      rating: 4.6
    },
    reviews: [{ user: "Megha Jain", feedback: "Reliable and careful with packages!" }],
    ratings: 3,
    totalDeliveries: 320,
    onTimeDeliveries: 295
  },
  {
    id: 4,
    name: "Suresh Babu",
    image: "/image.png",
    phone: "9812345678",
    email: "ramesh.iyer@example.com",
    experience: 6,
    vehicle: "Ashok Leyland Dost",
    license: "MH 04 CD 7890",
    age: 38,
    gender: "Male",
    currentlyDelivering: {
      package: "Grocery Items",
      destination: "Pune, Maharashtra",
      eta: "4:10 PM",
      status: "Delayed"
    },
    lastDelivered: {
      package: "Home Decor - Table Lamp",
      recipient: "Swati Mehta",
      deliveredAt: "March 3, 2025 - 6:30 PM",
      rating: 4.3
    },
    reviews: [{ user: "Vikas Yadav", feedback: "Friendly but a bit late sometimes." }],
    ratings: 4,
    totalDeliveries: 190,
    onTimeDeliveries: 170
  },
  {
    id: 5,
    name: "Manoj Nair",
    image: "/image.png",
    phone: "9123456789",
    email: "suresh.menon@example.com",
    experience: 8,
    vehicle: "Force Traveller",
    license: "KL 07 EF 4567",
    age: 42,
    gender: "Male",
    currentlyDelivering: {
      package: "Automobile Parts",
      destination: "Kochi, Kerala",
      eta: "5:50 PM",
      status: "On the way"
    },
    lastDelivered: {
      package: "Industrial Equipment",
      recipient: "Manoj Pillai",
      deliveredAt: "March 2, 2025 - 2:00 PM",
      rating: 4.7
    },
    reviews: [{ user: "Arjun Nair", feedback: "Very careful with fragile items!" }],
    ratings: 5,
    totalDeliveries: 410,
    onTimeDeliveries: 390
  },

  // Remaining 45 drivers
  {
    id: 6,
    name: "Gopal Krishnan",
    image: "/image.png",
    phone: "9856123478",
    email: "amit.joshi@example.com",
    experience: 4,
    vehicle: "Mahindra Jeeto",
    license: "GJ 01 GH 3456",
    age: 33,
    gender: "Male",
    currentlyDelivering: {
      package: "Electronics - Laptop",
      destination: "Ahmedabad, Gujarat",
      eta: "1:30 PM",
      status: "On the way"
    },
    lastDelivered: {
      package: "Books - Novels",
      recipient: "Neha Shah",
      deliveredAt: "March 1, 2025 - 3:45 PM",
      rating: 4.5
    },
    reviews: [{ user: "Sahil Patel", feedback: "Great communication and timely updates!" }],
    ratings: 4,
    totalDeliveries: 210,
    onTimeDeliveries: 190
  },

  {
    id: 7,
    name: "Anil Raj",
    image: "/image.png",
    phone: "9987654321",
    email: "ritika.sharma@example.com",
    experience: 5,
    vehicle: "Tata Super Ace",
    license: "RJ 14 KL 7890",
    age: 30,
    gender: "Male",
    currentlyDelivering: {
      package: "Home Appliances - Microwave",
      destination: "Jaipur, Rajasthan",
      eta: "6:15 PM",
      status: "On the way"
    },
    lastDelivered: {
      package: "Fashion Accessories - Handbags",
      recipient: "Pooja Singh",
      deliveredAt: "March 1, 2025 - 5:00 PM",
      rating: 4.9
    },
    reviews: [{ user: "Kunal Mehta", feedback: "Super friendly and always on time!" }],
    ratings: 5,
    totalDeliveries: 275,
    onTimeDeliveries: 260
  },
  {
    id: 8,
    name: "Karthik Sharma",
    image: "/image.png",
    phone: "9812345678",
    email: "karthik.sharma@example.com",
    experience: 6,
    vehicle: "Ashok Leyland Dost",
    license: "MH 04 CD 7890",
    age: 38,
    gender: "Male",
    currentlyDelivering: {
      package: "Electronic Items",
      destination: "Pune, Maharashtra",
      eta: "7:10 PM",
      status: "Delayed"
    },
    lastDelivered: {
      package: "Home Decor - Table Lamp",
      recipient: "Swati Mehta",
      deliveredAt: "March 3, 2025 - 6:30 PM",
      rating: 4.3
    },
    reviews: [{ user: "Vikas Yadav", feedback: "Friendly but a bit late sometimes." }],
    ratings: 4,
    totalDeliveries: 190,
    onTimeDeliveries: 170
  },
  // Continue with the same pattern up to 50...
];

const DriverProfile = () => {
  const { id } = useParams();
  const driver = fleetData.find((d) => d.id === parseInt(id));

  if (!driver) {
    return <p className="text-red-500 text-center">Driver not found.</p>;
  }

  return (
    <div className="p-6 bg-gray-100  flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl transition-all hover:shadow-2xl">
        
        {/* Profile Header */}
        <div className="flex items-center space-x-6 border-b pb-4">
          <img src={driver.image} alt={driver.name} className="w-24 h-24 rounded-full border-4 border-blue-500" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{driver.name}</h2>
            <p className="text-gray-500 flex items-center">
              <PhoneIcon className="text-blue-500 mr-2" /> {driver.phone}
            </p>
            <p className="text-gray-500 flex items-center">
              <EmailIcon className="text-red-500 mr-2" /> {driver.email}
            </p>
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg flex items-center shadow-md">
          <DirectionsCarIcon className="text-gray-700 mr-3 text-xl" />
          <p className="text-gray-700">
            <b>Vehicle:</b> {driver.vehicle} | <b>License:</b> {driver.license}
          </p>
        </div>

        {/* Current Delivery */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-lg font-semibold flex items-center text-green-600">
            <LocalShippingIcon className="mr-2" /> Currently Delivering
          </h3>
          <p><b>Package:</b> {driver.currentlyDelivering.package}</p>
          <p><b>Destination:</b> {driver.currentlyDelivering.destination}</p>
          <p><b>ETA:</b> {driver.currentlyDelivering.eta}</p>
          <p className="text-sm font-semibold text-green-500">{driver.currentlyDelivering.status}</p>
        </div>

        {/* Last Delivered */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-yellow-600">Last Delivered</h3>
          <p><b>Package:</b> {driver.lastDelivered.package}</p>
          <p><b>Recipient:</b> {driver.lastDelivered.recipient}</p>
          <p><b>Delivered At:</b> {driver.lastDelivered.deliveredAt}</p>
          <p className="flex items-center text-yellow-600 font-semibold">
            <StarIcon className="mr-1" /> {driver.lastDelivered.rating} / 5
          </p>
        </div>

        {/* Ratings & Reviews */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-600">Ratings & Feedback</h3>
          <p className="text-xl font-bold flex items-center">
            {driver.ratings} / 5 <StarIcon className="text-yellow-500 ml-1" />
          </p>
          {driver.reviews.map((review, index) => (
            <p key={index} className="text-gray-600"><b>{review.user}:</b> {review.feedback}</p>
          ))}
        </div>

        {/* Total Deliveries */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md flex items-center">
          <SpeedIcon className="text-gray-700 mr-3 text-xl" />
          <div>
            <h3 className="text-lg font-semibold">Total Deliveries</h3>
            <p>{driver.totalDeliveries} <span className="text-sm text-green-600">(On-Time: {driver.onTimeDeliveries})</span></p>
            {/* Progress Bar */}
            <div className="relative w-full bg-gray-300 h-3 rounded-full mt-1">
              <div
                className="bg-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(driver.onTimeDeliveries / driver.totalDeliveries) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <Link to="/fleet-info" className="text-blue-600 flex items-center hover:underline">
            <ArrowBackIcon className="mr-1" /> Back to Fleet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
