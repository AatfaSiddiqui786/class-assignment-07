"use client"
import React, { useState, useEffect } from 'react';

type Data = {
    id: number;
    name: string;
    type: string;
    available: boolean;
};

const Page = () => {
    const [data, setData] = useState<Data[]>([]);  // State to store fetched data
    const [loading, setLoading] = useState<boolean>(true);  // State to track loading status

    useEffect(() => {
        const fetchData = async () => {
            const url = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data: Data[] = await url.json();
            setData(data);  // Set the fetched data into state
            setLoading(false);  // Set loading to false after data is fetched
        };

        fetchData();
    }, []);  // Empty dependency array means this runs only once, like componentDidMount

    return (
        <div>
            <div className="py-[50px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
                <h1 className="mb-[40px] text-center text-[20px] sm:text-[28px] md:text-[30px] font-[700] text-[#f7f7f8]">
                    SERVER SIDE DATA FETCHING
                </h1>
                
                {/* Loader while data is being fetched */}
                {loading ? (
                    <div className="flex flex-col justify-center items-center h-screen">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loading...</h2>
                        <p className="text-gray-600 mb-4">Please wait...</p>
                        <div className="w-24 h-24 border-8 border-gray-300 border-t-8 border-t-blue-500 border-solid rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((todo, index) => (
                            <div key={index} className="w-full border-4 border-blue-800 shadow-lg p-[20px] rounded-[8px] hover:shadow-xl hover:scale-[1.05] transition">
                                <p className="text-[22px] font-[600] text-[#fafafa] mb-[10px]">{todo.name}</p>
                                <p className="text-[white] mb-[8px]"><span className="font-bold">ID:</span> {todo.id}</p>
                                <p className="text-[white] mb-[8px]"><span className="font-bold">Type:</span> {todo.type}</p>
                                <p className={`${todo.available === true ? "text-[white]" : "text-[white]"} font-semibold`}>
                                    {todo.available === true ? "Available" : "Unavailable"}
                                </p>
                                <p className={`text-right mt-[15px] ${todo.available === true ? "text-[white]" : "text-[white]"}`}>Read more...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
