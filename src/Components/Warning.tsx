


const Warning = () => {
  

  return (
    <div className="fixed inset-0 flex justify-center items-center p-4 bg-black/30">
      <div className="w-[90%] md:w-3/5 bg-slate-200 rounded-lg shadow-lg p-4 border-l-4 border-red-600">
        <div className="flex justify-between items-center">
          <p className="text-red-600 font-bold text-lg">⚠ Warning</p>
        </div>
        <div className="bg-red-400 h-0.5 w-full my-2"></div>
          <p className="text-sm md:text-base text-gray-800 text-justify">
          Your screen size is too small! This code editor is best experienced on a desktop. Some features may not work optimally on mobile or tablet devices.
          </p>
      </div>
    </div>
  );
};

export default Warning;
