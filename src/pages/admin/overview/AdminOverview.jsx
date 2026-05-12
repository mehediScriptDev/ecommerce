import {
  DollarSign,
  ShoppingCart,
  Smartphone,
  Package,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Stats from "./component/Stats";
import RecentOrder from "./component/RecentOrder";
import RevenueChart from "./component/RevenueChart";
import AdminDashboardTitle from "../../../components/dashboards/AdminDashboardTitle";

const chartData = [
  { month: "Jan", revenue: 35000 },
  { month: "Feb", revenue: 42000 },
  { month: "Mar", revenue: 45000 },
  { month: "Apr", revenue: 38000 },
  { month: "May", revenue: 40000 },
  { month: "Jun", revenue: 35000 },
  { month: "Jul", revenue: 38000 },
  { month: "Aug", revenue: 50000 },
  { month: "Sep", revenue: 60000 },
  { month: "Oct", revenue: 55000 },
  { month: "Nov", revenue: 45000 },
  { month: "Dec", revenue: 38000 },
];

const stats = [
  {
    label: "Total Sales",
    value: "$1,250,000",
    icon: DollarSign,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    label: "Active Orders",
    value: "156",
    icon: ShoppingCart,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    label: "New Phones",
    value: "45",
    icon: Smartphone,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    label: "Used Phones",
    value: "82",
    icon: Package,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    label: "Pending Orders",
    value: "12",
    icon: Clock,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    label: "Completed",
    value: "134",
    icon: CheckCircle,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    label: "Cancelled",
    value: "10",
    icon: XCircle,
    color: "text-red-500",
    bg: "bg-red-50",
  },
];

const recentOrders = [
  {
    name: "Rahat Islam",
    product: "iPhone 15 Pro Max",
    amount: "$150,000",
    status: "Pending",
    statusColor: "text-yellow-500",
  },
  {
    name: "Anika Tabassum",
    product: "Samsung Galaxy S24 Ultra",
    amount: "$135,000",
    status: "Delivered",
    statusColor: "text-green-500",
  },
  {
    name: "Tanvir Ahmed",
    product: "Google Pixel 8 Pro",
    amount: "$85,000",
    status: "Shipped",
    statusColor: "text-purple-500",
  },
  {
    name: "Tanvir Ahmed",
    product: "Google Pixel 8 Pro",
    amount: "$85,000",
    status: "Shipped",
    statusColor: "text-purple-500",
  },
  {
    name: "Tanvir Ahmed",
    product: "Google Pixel 8 Pro",
    amount: "$85,000",
    status: "Shipped",
    statusColor: "text-purple-500",
  },
];

const AdminOverview = () => {
  return (
    <div>
      <AdminDashboardTitle
        title="Overview"
        subtitle="Welcome back, here is the summary of your store's performance."
      />

      {/* Stats Grid */}
      <Stats stats={stats} />

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Revenue Overview - 3/5 width */}
        <div className="lg:col-span-3">
          <RevenueChart chartData={chartData} />
        </div>

        {/* Recent Orders - 2/5 width */}
        <div className="lg:col-span-2">
          <RecentOrder recentOrders={recentOrders} />
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
