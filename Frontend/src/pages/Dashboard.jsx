

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import StatCard from "../Components/StatCard";
import ViolationChart from "../Components/ViolationChart";
import RecentIncidents from "../Components/RecentIncidents";
import LiveCamera from "../Components/LiveCamera";
import AlertPanel from "../Components/AlertPanel";

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const [stats] = useState({
    safeIncidents: 95,
    helmetViolations: 8,
    shoesViolations: 3,
    totalViolations: 11
  });

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-60 bg-white shadow transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
          
          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard title="Safe Incidents" value={stats.safeIncidents} color="green" />
            <StatCard title="Helmet Violations" value={stats.helmetViolations} color="red" />
            <StatCard title="shoes Violations" value={stats.shoesViolations} color="yellow" />
            <StatCard title="Total Violations" value={stats.totalViolations} color="blue" />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ViolationChart />
            <RecentIncidents />
          </div>

          {/* Live + Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LiveCamera />
            <AlertPanel />
          </div>

        </main>
      </div>
    </div>
  );
}
