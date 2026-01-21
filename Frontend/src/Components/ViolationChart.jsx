export default function ViolationChart() {
  const violations = [
    { type: 'No Helmet', percentage: 72, color: 'bg-red-500' },
    { type: 'No Shooes', percentage: 28, color: 'bg-orange-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex flex-col">
      <h3 className="font-bold text-xl mb-4">Violation Overview</h3>
      <div className="flex-1 space-y-4">
        {violations.map((violation, index) => (
          <div key={index}>
            <div className="flex justify-between text-base font-medium">
              <span>{violation.type}</span>
              <span>{violation.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div className={`${violation.color} h-6 rounded-full transition-all duration-500`} style={{ width: `${violation.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-green-600 font-bold text-lg mt-4">Total Violations: 11</div>
    </div>
  );
}