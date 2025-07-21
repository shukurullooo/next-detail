"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Food = ({ data }: { data: any }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.recipes?.map((item: any) => (
          <Link key={item.id} href={`/recipes/${item.id}`}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col cursor-pointer">
              <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold mb-3">{item.name}</h2>
              <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-200">
                Retseptni ko‘rish
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Food;
