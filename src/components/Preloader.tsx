// components/Preloader.tsx
const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-b from-blue-900 to-gray-900 animate-move-slow opacity-50 blur-3xl"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-blue-700 to-gray-800 animate-move-medium opacity-60 blur-2xl"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-blue-500 to-gray-700 animate-move-fast opacity-70 blur-xl"></div>
      </div>
      <div className="z-10 text-white text-2xl font-semibold animate-fadeUp">
        Loading...
      </div>
    </div>
  );
};

export default Preloader;
