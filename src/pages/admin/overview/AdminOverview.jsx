import { DollarSign, ShoppingCart, Smartphone, Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
    { month: 'Jan', revenue: 35000 },
    { month: 'Feb', revenue: 42000 },
    { month: 'Mar', revenue: 45000 },
    { month: 'Apr', revenue: 38000 },
    { month: 'May', revenue: 40000 },
    { month: 'Jun', revenue: 35000 },
    { month: 'Jul', revenue: 38000 },
    { month: 'Aug', revenue: 50000 },
    { month: 'Sep', revenue: 60000 },
    { month: 'Oct', revenue: 55000 },
    { month: 'Nov', revenue: 45000 },
    { month: 'Dec', revenue: 38000 },
];

const stats = [
    { label: 'Total Sales', value: '$1,250,000', icon: DollarSign, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Active Orders', value: '156', icon: ShoppingCart, color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'New Phones', value: '45', icon: Smartphone, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Used Phones', value: '82', icon: Package, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { label: 'Pending Orders', value: '12', icon: Clock, color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { label: 'Completed', value: '134', icon: CheckCircle, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { label: 'Cancelled', value: '10', icon: XCircle, color: 'text-red-500', bg: 'bg-red-50' },
];

const recentOrders = [
    { name: 'Rahat Islam', product: 'iPhone 15 Pro Max', amount: '$150,000', status: 'Pending', statusColor: 'text-yellow-500' },
    { name: 'Anika Tabassum', product: 'Samsung Galaxy S24 Ultra', amount: '$135,000', status: 'Delivered', statusColor: 'text-green-500' },
    { name: 'Tanvir Ahmed', product: 'Google Pixel 8 Pro', amount: '$85,000', status: 'Shipped', statusColor: 'text-purple-500' },
    { name: 'Tanvir Ahmed', product: 'Google Pixel 8 Pro', amount: '$85,000', status: 'Shipped', statusColor: 'text-purple-500' },
    { name: 'Tanvir Ahmed', product: 'Google Pixel 8 Pro', amount: '$85,000', status: 'Shipped', statusColor: 'text-purple-500' },
];

const AdminOverview = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-sm text-gray-400 mt-1 mb-6">
                Welcome back, here's what's happening with your store today.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                        <div className={`w-9 h-9 rounded-full ${stat.bg} flex items-center justify-center mb-3`}>
                            <stat.icon size={18} className={stat.color} />
                        </div>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-800 mt-0.5 wrap-break-word">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Revenue Overview */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="font-semibold text-gray-800">Revenue Overview</h2>
                            <p className="text-xs text-gray-400">Revenue and order volume analysis for the current year</p>
                        </div>
                        <select className="text-xs border border-gray-200 rounded-md px-2 py-1 text-gray-500">
                            <option>This year</option>
                        </select>
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="month" stroke="#999" style={{ fontSize: '12px' }} />
                            <YAxis stroke="#999" style={{ fontSize: '12px' }} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#fff',
                                    border: '1px solid #ddd',
                                    borderRadius: '6px',
                                }}
                                formatter={(value) => `$${value.toLocaleString()}`}
                            />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#06b6d4"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorRevenue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-gray-800">Recent Orders</h2>
                        <span className="text-xs text-cyan-500 cursor-pointer hover:underline">View All</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        {recentOrders.map((order, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                                    <Smartphone size={14} className="text-gray-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-800 truncate">{order.name}</p>
                                    <p className="text-xs text-gray-400 truncate">{order.product}</p>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-sm font-bold text-gray-800">{order.amount}</p>
                                    <p className={`text-xs font-medium ${order.statusColor}`}>{order.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOverview;
