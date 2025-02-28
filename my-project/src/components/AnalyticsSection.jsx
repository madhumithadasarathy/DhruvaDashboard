import { Card, CardContent, Typography } from "@mui/material";

const analyticsData = [
  { title: "Active Trips", value: 12, color: "text-blue-600" },
  { title: "Completed Trips", value: 45, color: "text-green-600" },
  { title: "Pending Loads", value: 8, color: "text-orange-600" },
];

const AnalyticsSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Trip Analytics</h2>
      {analyticsData.map((stat, index) => (
        <Card key={index} className="shadow-md">
          <CardContent>
            <Typography className="text-gray-700 font-medium">{stat.title}</Typography>
            <Typography className={`text-2xl font-bold ${stat.color}`}>{stat.value}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnalyticsSection;
