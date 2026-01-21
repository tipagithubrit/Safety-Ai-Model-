import Sidebar from "../Components/Sidebar";

export default function Settings() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Update Profile
            </button>
          </form>
        </div>

        {/* Notification Settings */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Push Notifications</label>
            </div>
          </div>
        </div>

        {/* App Settings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">App Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Theme</label>
              <select className="w-full p-2 border rounded">
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Language</label>
              <select className="w-full p-2 border rounded">
                <option>English</option>
                <option>German</option>
                <option>Hindi</option>
                <option>Japnees</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}