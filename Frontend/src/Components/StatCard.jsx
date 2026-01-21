// const colors = {
// green: "bg-green-500",
// red: "bg-red-500",
// orange: "bg-orange-500",
// gray: "bg-gray-700",
// };


// export default function StatCard({ title, value, color }) {
// return (
// <div className={`${colors[color]} text-white p-4 rounded-lg shadow`}>
// <h4 className="text-sm">{title}</h4>
// <p className="text-3xl font-bold">{value}</p>
// </div>
// );
// }
export default function StatCard({ title, value, color }) {

  const colorStyles = {
    green: {
      bg: "bg-green-500",
      text: "text-black-700",
    },
    red: {
      bg: "bg-red-500",
      text: "text-black-700",
    },
    yellow: {
      bg: "bg-orange-500",
      text: "text-black-800", 
    },
    blue: {
      bg: "bg-gray-500",
      text: "text-black-800", 
    },
  };

  return (
    <div className={`p-5 rounded-lg shadow-md ${colorStyles[color].bg}`}>
      <h3 className="text-black-600 text-lg mb-2">
        {title}
      </h3>
      <p className={`text-3xl font-bold ${colorStyles[color].text}`}>
        {value}
      </p>
    </div>
  );
}
