import { Link } from "react-router-dom";
import { NotificationsNone, AccountCircle } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md font-poppins">
      <div className="text-xl font-bold ml-2 tracking-widest">DHRUVA</div>
      <nav className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/fleet-info" className="text-gray-700 hover:text-blue-500">Fleet Info</Link>
        <Link to="/order" className="text-gray-700 hover:text-blue-500">Order</Link>
      </nav>
      <div className="flex items-center space-x-6">
        <Link to="/notifications" className="text-gray-700 hover:text-blue-500">
          <NotificationsNone fontSize="medium" />
        </Link>
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-500">
            <AccountCircle fontSize="medium" />
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">View Profile</Link>
            <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
            <Link to="/theme" className="block px-4 py-2 hover:bg-gray-100">Theme</Link>
            <Link to="/language" className="block px-4 py-2 hover:bg-gray-100">Language</Link>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
