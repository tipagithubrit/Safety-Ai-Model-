export default function AlertPanel() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 h-96">

      {/* Title */}
      <h3 className="font-semibold text-gray-800 mb-3">
        Alert Notification
      </h3>

     
      <div className="grid grid-cols-2 gap-4 h-full">

        
        <div className="border rounded-lg overflow-hidden">

          <div className="bg-red-500 text-white px-3 py-2 flex items-center gap-2">
            <span>⚠️</span>
            <span className="font-semibold text-sm">SAFETY ALERT</span>
          </div>

          {/* Alert Body */}
          <div className="p-3">
            <p className="font-bold text-gray-800 mb-1">
              Helmet Not Worn!
            </p>
            <p className="text-sm text-gray-600">Location: Site A</p>
            <p className="text-sm text-gray-600 mb-3">Time: 10:15 AM</p>

            
          </div>
        </div>

        {/* RIGHT PANEL (MAP) */}
        <div className="relative rounded-lg overflow-hidden border bg-gray-100">

          {/* Grid map */}
          <div className="absolute inset-0 bg-[linear-gradient(#d1d5db_1px,transparent_1px),linear-gradient(90deg,#d1d5db_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Heat spots */}
          <span className="absolute top-10 left-16 w-10 h-10 bg-red-500 opacity-60 rounded-full blur-md"></span>
          <span className="absolute bottom-20 right-20 w-14 h-14 bg-red-500 opacity-50 rounded-full blur-lg"></span>
          <span className="absolute top-20 right-32 w-8 h-8 bg-orange-500 opacity-60 rounded-full blur-md"></span>

          {/* Zone label */}
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Zone A
          </div>

          {/* Map label */}
          <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-xs rounded shadow">
            Violation Heatmap
          </div>
        </div>

      </div>
    </div>
  );
}
