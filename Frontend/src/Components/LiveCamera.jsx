import cameraImage from '../assets/ChatGPT Image Jan 8, 2026, 09_46_26 AM.png';

export default function LiveCamera() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-96 flex flex-col">
      <h3 className="font-bold text-xl mb-4">Live Camera Feed</h3>
      <div className="flex-1 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={cameraImage} alt="Live Camera Stream" className="w-full h-full object-cover rounded-lg" />
      </div>

    </div>
  );
}