import Sidebar from "../Components/Sidebar";

export default function Cameras() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Cameras</h1>

        {/* Add Camera */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Camera</h2>
          <div className="flex space-x-4">
            <input type="text" placeholder="Camera Name" className="flex-1 p-2 border rounded" />
            <input type="text" placeholder="Location" className="flex-1 p-2 border rounded" />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Add
            </button>
          </div>
        </div>

        {/* Camera List */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Camera List</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border rounded">
              <div>
                <h3 className="font-semibold">Front Door</h3>
                <p className="text-gray-600">Entrance</p>
                <span className="px-2 py-1 rounded text-sm bg-green-100 text-green-800">Online</span>
              </div>
              <div className="space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  View Live
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Remove
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border rounded">
              <div>
                <h3 className="font-semibold">Backyard</h3>
                <p className="text-gray-600">Exterior</p>
                <span className="px-2 py-1 rounded text-sm bg-red-100 text-red-800">Offline</span>
              </div>
              <div className="space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  View Live
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}