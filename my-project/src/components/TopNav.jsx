import DescriptionIcon from "@mui/icons-material/Description";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const TopNav = ({ selectedShipment = {} }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between bg-white shadow-md rounded-lg p-5 mx-4 mt-4">
      {/* Shipping ID */}
      <div className="flex items-center space-x-3 px-6 py-3 border-r border-gray-300 w-full md:w-1/4">
        <DescriptionIcon style={{ color: "#1E88E5" }} fontSize="large" />
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm">Shipping ID</p>
          <p className="text-xl font-semibold text-gray-900">#{selectedShipment.id || "N/A"}</p>
          <a href="#" className="text-blue-500 text-sm mt-1">Details Cargo</a>
        </div>
      </div>

      {/* Load Category */}
      <div className="flex items-center space-x-3 px-6 py-3 border-r border-gray-300 w-full md:w-1/4">
        <InventoryIcon style={{ color: "#43A047" }} fontSize="large" />
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm">Load Category</p>
          <p className="text-xl font-semibold text-gray-900">{selectedShipment.category || "Electronic"}</p>
          <a href="#" className="text-blue-500 text-sm mt-1">Details Cargo</a>
        </div>
      </div>

      {/* Truck’s Driver */}
      <div className="flex items-center space-x-3 px-6 py-3 border-r border-gray-300 w-full md:w-1/4">
        <PersonIcon style={{ color: "#8E24AA" }} fontSize="large" />
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm">Truck’s Driver</p>
          <p className="text-xl font-semibold text-gray-900">{selectedShipment.driver || "Unknown"}</p>
          <a href="#" className="text-blue-500 text-sm mt-1">Driver’s Info</a>
        </div>
      </div>

      {/* Truck Information */}
      <div className="flex items-center space-x-3 px-6 py-3 w-full md:w-1/4">
        <LocalShippingIcon style={{ color: "#FB8C00" }} fontSize="large" />
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm">Truck Info</p>
          <p className="text-xl font-semibold text-gray-900">{selectedShipment.truck || "Unknown"}</p>
          <a href="#" className="text-blue-500 text-sm mt-1">Truck’s Info</a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
