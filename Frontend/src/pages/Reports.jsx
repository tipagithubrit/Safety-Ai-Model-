import Sidebar from "../Components/Sidebar";

export default function Reports() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Reports</h1>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="flex space-x-4">
            <input type="date" className="p-2 border rounded" />
            <select className="p-2 border rounded">
              <option>All Types</option>
              <option>Helmet Violation</option>
              <option>Shoes Violation</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Generate Report
            </button>
          </div>
        </div>

        {/* Incidents Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Incidents</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Camera</th>
                <th className="p-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">2023-10-01</td>
                <td className="p-2">Helmet Violation</td>
                <td className="p-2">Front Door</td>
                <td className="p-2">Worker without helmet</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">2023-10-02</td>
                <td className="p-2">Shoes Violation</td>
                <td className="p-2">Backyard</td>
                <td className="p-2">Worker without shoes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 