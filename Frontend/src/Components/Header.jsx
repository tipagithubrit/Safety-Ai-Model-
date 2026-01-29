// import { useNavigate } from 'react-router-dom';

// export default function Header() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 rounded-lg shadow-lg mb-6">
//       <h1 className="text-2xl font-bold mr-5 text-white animate-pulse">AI Safety Monitoring Dashboard</h1>
//       <div className="space-x-2">
//         <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-md">
//           Workplace Safety
//         </button>
//         <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md">
//           Traffic Violations
//         </button>
//         <button
//           onClick={handleLogout}
//           className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-md"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 rounded-lg shadow-lg mb-6">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-8">
        {/* MENU + ICON */}
        <div className="flex items-center gap-3 text-white font-semibold">
      
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-white ">
           Safety Monitoring Dashboard
        </h1>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="space-x-2">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-md">
          Workplace Safety
        </button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md">
          Traffic Violations
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Logout
        </button>
      </div>

    </div>
  );
}
