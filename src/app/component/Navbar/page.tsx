import Link from 'next/link';

const Navbar= () => {
  return (
    
    <div className="min-h-screen bg-gray-200 p-8">
    

      <h1 className="text-4xl font-bold text-center mb-8">Data Fetching in Next.js</h1>
      <div className="flex justify-center space-x-8">
        <Link href="/component/ClientSide">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Client-Side Fetching
          </button>
        </Link>
        <Link href="/component/server-side">
          <button className="bg-purple-950 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
            Server-Side Fetching
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
