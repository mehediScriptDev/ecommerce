import { useState } from 'react';
import AdminDashboardTitle from '../../../components/dashboards/AdminDashboardTitle';

const initialQueries = [
  {
    id: '#BUS-001',
    business: 'John Industries',
    contact: 'John Carter',
    email: 'john@johnindustries.com',
    date: '2026-05-12',
    status: 'Pending',
    message: 'Interested in bulk device procurement for the next quarter.',
  },
  {
    id: '#BUS-002',
    business: 'Skyline Retail Ltd',
    contact: 'Maya Islam',
    email: 'maya@skylineretail.com',
    date: '2026-05-10',
    status: 'Pending',
    message: 'Needs pricing information for trade-in and resale support.',
  },
  {
    id: '#BUS-003',
    business: 'TechPoint Solutions',
    contact: 'Alex Morgan',
    email: 'alex@techpoint.io',
    date: '2026-05-08',
    status: 'Contacted',
    message: 'Asked about custom business plans and delivery schedule.',
  },
];

const statusStyles = {
  Pending: 'bg-amber-100 text-amber-700',
  Contacted: 'bg-green-100 text-green-700',
};

const BusinessQuery = () => {
  const [queries, setQueries] = useState(initialQueries);
  const [openActionMenu, setOpenActionMenu] = useState(null);

  const handleStatusChange = (index, status) => {
    setQueries((prev) => prev.map((item, itemIndex) => (
      itemIndex === index ? { ...item, status } : item
    )));
    setOpenActionMenu(null);
  };

    return (
        <div>
      <AdminDashboardTitle
        title="Business Queries"
        subtitle="Manage and respond to business inquiries"
      />

      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Business</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Contact Person</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>

          <tbody>
            {queries.map((query, index) => (
              <tr key={query.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-800">{query.business}</div>
                  <div className="mt-1 max-w-xs truncate text-xs text-gray-500">{query.message}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{query.contact}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{query.email}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{query.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[query.status]}`}>
                    {query.status}
                  </span>
                </td>
                <td className="relative px-6 py-4">
                  <button
                    type="button"
                    onClick={() => setOpenActionMenu(openActionMenu === index ? null : index)}
                    className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100"
                    aria-label="Open actions"
                  >
                    <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="12" cy="19" r="2" />
                    </svg>
                  </button>

                  {openActionMenu === index && (
                    <div className="absolute right-0 top-10 z-20 w-48 rounded-xl border border-gray-200 bg-white p-1 shadow-lg">
                      <button
                        type="button"
                        onClick={() => handleStatusChange(index, 'Pending')}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        View Details
                      </button>
                      <div className="my-1 border-t border-gray-200" />
                      <button
                        type="button"
                        onClick={() => handleStatusChange(index, 'Pending')}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Mark Pending
                      </button>
                      <button
                        type="button"
                        onClick={() => handleStatusChange(index, 'Contacted')}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Mark Contacted
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default BusinessQuery;