export default function RecentIncidents() {
  const incidents = [
    { time: '08:45', location: 'Zone A', violation: 'No Helmet', confidence: '88%' },
    { time: '09:12', location: 'Zone B', violation: 'No shoes', confidence: '92%' },
    { time: '10:05', location: 'Zone C', violation: 'No Helmet', confidence: '85%' },
    { time: '10:30', location: 'Zone D', violation: 'No Helmet', confidence: '90%' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex flex-col">
      <h3 className="font-bold text-xl mb-4">Recent Incidents</h3>

      <div className="flex-1 overflow-y-auto">
        <table className="w-full text-base border-collapse">
          <thead className="text-gray-500">
            <tr>
              <th className="text-left py-2">Time</th>
              <th className="text-left py-2">Location</th>
              <th className="text-left py-2">Violation</th>
              <th className="text-left py-2">Confidence</th>
            </tr>
          </thead>

          <tbody>
            {incidents.map((incident, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 text-left">{incident.time}</td>
                <td className="py-2 text-left">{incident.location}</td>
                <td className="py-2 text-left text-red-600 font-medium">{incident.violation}</td>
                <td className="py-2 text-left">{incident.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
