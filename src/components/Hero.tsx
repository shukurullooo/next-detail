"use client";

import Link from "next/link";
import React from "react";

const Hero = ({ res }: { res: any }) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Bizning jamoa
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {res?.users?.map((item: any) => (
            <Link href={`/home/${item.id}`} key={item.id}>
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center cursor-pointer">
                <img
                  src={item.image}
                  alt={`${item.firstName} ${item.lastName}`}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-300"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.firstName} {item.lastName}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{item.email}</p>
                <p className="text-sm text-gray-500">@{item.username}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
