import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const initialFleetData = [
    { id: 1, name: "Arun Kumar", image: "/image.png", location: "Chennai, Tamil Nadu", status: "Active", rating: 5 },
    { id: 2, name: "Venkatesh Reddy", image: "/image.png", location: "Hyderabad, Telangana", status: "Free", rating: 4 },
    { id: 3, name: "Ravi Shankar", image: "/image.png", location: "Bangalore, Karnataka", status: "Active", rating: 3 },
    { id: 4, name: "Suresh Babu", image: "/image.png", location: "Kochi, Kerala", status: "Free", rating: 2 },
    { id: 5, name: "Manoj Nair", image: "/image.png", location: "Thiruvananthapuram, Kerala", status: "Active", rating: 5 },
    { id: 6, name: "Gopal Krishnan", image: "/image.png", location: "Coimbatore, Tamil Nadu", status: "Free", rating: 4 },
    { id: 7, name: "Anil Raj", image: "/image.png", location: "Madurai, Tamil Nadu", status: "Active", rating: 5 },
    { id: 8, name: "Karthik Sharma", image: "/image.png", location: "Mysore, Karnataka", status: "Free", rating: 3 },
    { id: 9, name: "Prakash Rao", image: "/image.png", location: "Visakhapatnam, Andhra Pradesh", status: "Active", rating: 2 },
    { id: 10, name: "Hariharan", image: "/image.png", location: "Tirupati, Andhra Pradesh", status: "Free", rating: 1 },
    { id: 11, name: "Ramachandran", image: "/image.png", location: "Salem, Tamil Nadu", status: "Active", rating: 4 },
    { id: 12, name: "Bharath Reddy", image: "/image.png", location: "Warangal, Telangana", status: "Free", rating: 3 },
    { id: 13, name: "Dinesh Menon", image: "/image.png", location: "Kollam, Kerala", status: "Active", rating: 5 },
    { id: 14, name: "Rajeev Nair", image: "/image.png", location: "Erode, Tamil Nadu", status: "Free", rating: 2 },
    { id: 15, name: "Sathyanarayan", image: "/image.png", location: "Vijayawada, Andhra Pradesh", status: "Active", rating: 3 },
    { id: 16, name: "Harish Kumar", image: "/image.png", location: "Belgaum, Karnataka", status: "Free", rating: 1 },
    { id: 17, name: "Ganesh Rao", image: "/image.png", location: "Hubli, Karnataka", status: "Active", rating: 5 },
    { id: 18, name: "Narayan Swamy", image: "/image.png", location: "Guntur, Andhra Pradesh", status: "Free", rating: 4 },
    { id: 19, name: "Raghunathan", image: "/image.png", location: "Tirunelveli, Tamil Nadu", status: "Active", rating: 5 },
    { id: 20, name: "Mahesh Yadav", image: "/image.png", location: "Kadapa, Andhra Pradesh", status: "Free", rating: 2 },
    { id: 21, name: "Ramesh Iyer", image: "/image.png", location: "Nellore, Andhra Pradesh", status: "Active", rating: 5 },
    { id: 22, name: "Srinivasan", image: "/image.png", location: "Udupi, Karnataka", status: "Free", rating: 4 },
    { id: 23, name: "Kiran Kumar", image: "/image.png", location: "Puducherry", status: "Active", rating: 3 },
    { id: 24, name: "Vinod Krishna", image: "/image.png", location: "Nagapattinam, Tamil Nadu", status: "Free", rating: 2 },
    { id: 25, name: "Balaji Rao", image: "/image.png", location: "Trichy, Tamil Nadu", status: "Active", rating: 1 },
    { id: 26, name: "Sudheer Babu", image: "/image.png", location: "Secunderabad, Telangana", status: "Free", rating: 5 },
    { id: 27, name: "Kamal Kishore", image: "/image.png", location: "Shimoga, Karnataka", status: "Active", rating: 3 },
    { id: 28, name: "Dhanush R", image: "/image.png", location: "Vizianagaram, Andhra Pradesh", status: "Free", rating: 2 },
    { id: 29, name: "Ravi Teja", image: "/image.png", location: "Rajahmundry, Andhra Pradesh", status: "Active", rating: 4 },
    { id: 30, name: "Vishal Menon", image: "/image.png", location: "Kottayam, Kerala", status: "Free", rating: 5 },
    { id: 31, name: "Ajay Varma", image: "/image.png", location: "Karimnagar, Telangana", status: "Active", rating: 3 },
    { id: 32, name: "Murali Krishna", image: "/image.png", location: "Thoothukudi, Tamil Nadu", status: "Free", rating: 1 },
    { id: 33, name: "Shyam Sundar", image: "/image.png", location: "Gulbarga, Karnataka", status: "Active", rating: 2 },
    { id: 34, name: "Anirudh Rao", image: "/image.png", location: "Dindigul, Tamil Nadu", status: "Free", rating: 5 },
    { id: 35, name: "Sachin Babu", image: "/image.png", location: "Bellary, Karnataka", status: "Active", rating: 4 },
    { id: 36, name: "Kailash Raj", image: "/image.png", location: "Thanjavur, Tamil Nadu", status: "Free", rating: 3 },
    { id: 37, name: "Gautham Krishna", image: "/image.png", location: "Tenali, Andhra Pradesh", status: "Active", rating: 5 },
    { id: 38, name: "Mohan Iyer", image: "/image.png", location: "Chidambaram, Tamil Nadu", status: "Free", rating: 1 },
    { id: 39, name: "Saravanan", image: "/image.png", location: "Kumbakonam, Tamil Nadu", status: "Active", rating: 3 },
    { id: 40, name: "Deepak Yadav", image: "/image.png", location: "Cuddalore, Tamil Nadu", status: "Free", rating: 2 },
    { id: 41, name: "Aravind Swamy", image: "/image.png", location: "Hosur, Tamil Nadu", status: "Active", rating: 5 },
    { id: 42, name: "Ranjith Kumar", image: "/image.png", location: "Machilipatnam, Andhra Pradesh", status: "Free", rating: 4 },
    { id: 43, name: "Subramaniam", image: "/image.png", location: "Pondicherry", status: "Active", rating: 3 },
    { id: 44, name: "Charan Reddy", image: "/image.png", location: "Ongole, Andhra Pradesh", status: "Free", rating: 2 },
    { id: 45, name: "Sanjay Rao", image: "/image.png", location: "Chikkamagaluru, Karnataka", status: "Active", rating: 1 },
  ];

const DriverProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const driver = initialFleetData.find((d) => d.id === parseInt(id));

  if (!driver) return <div className="text-center text-xl mt-10">Driver Not Found</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex">
      <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-md">← Back</button>

      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center w-full max-w-4xl mx-auto">
        {/* Driver Image on Left */}
        <img src={driver.image} alt={driver.name} className="w-48 h-48 rounded-full border-4 border-gray-300" />

        {/* Driver Details on Right */}
        <div className="ml-6">
          <h1 className="text-3xl font-bold">{driver.name}</h1>
          <p className="text-gray-500 text-lg">{driver.location}</p>

          <div className="mt-4">
            <p className="text-gray-700"><strong>Age:</strong> {driver.age}</p>
            <p className="text-gray-700"><strong>Experience:</strong> {driver.experience}</p>
            <p className="text-gray-700"><strong>Vehicle:</strong> {driver.vehicle}</p>

            <p className="mt-2"><strong>Star Rating:</strong> {"⭐".repeat(driver.rating)}</p>

            <span className={`inline-block mt-2 px-3 py-1 text-white rounded-full text-sm ${driver.status === "Active" ? "bg-red-500" : "bg-green-500"}`}>
              {driver.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
