import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import FleetInfo from "./components/FleetInfo";
import Order from "./components/Order";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Theme from "./components/Theme";
import Language from "./components/Language";
import DriverProfile from "./components/DriverProfile"; // Import DriverProfiles component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet-info" element={<FleetInfo />} />
          <Route path="/order" element={<Order />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/language" element={<Language />} />
          <Route path="/driver/:id" element={<DriverProfile />} /> {/* New Route for Driver Profiles */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
