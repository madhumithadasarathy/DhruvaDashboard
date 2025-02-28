import { useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import MapView from "./MapView";
import TripDetails from "./TripDetails";
import ChatBox from "./ChatBox";

const Home = () => {
  const [selectedShipment, setSelectedShipment] = useState({
    id: "E138710",
    category: "Electronic",
    driver: "Jackson Cole",
    truck: "MAN TGX"
  });

  return (
    <div className="flex flex-1">
      <Sidebar onSelectShipment={setSelectedShipment} className="bg-gray-100" />
      <div className="flex-1 p-6 space-y-4">
        <TopNav selectedShipment={selectedShipment} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col space-y-4">
            <MapView />
            <TripDetails selectedShipment={selectedShipment} />
          </div>
          <div className="col-span-1">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
