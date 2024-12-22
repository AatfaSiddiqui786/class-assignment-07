const Loader = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loading...</h2>
        <p className="text-gray-600 mb-4">Please wait...</p>
        <div className="w-24 h-24 border-8 border-gray-300 border-t-8 border-t-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  };
  
  export default Loader;
  