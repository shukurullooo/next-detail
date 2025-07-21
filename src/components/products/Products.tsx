"use client";
import Image from "next/image";
import Link from "next/link"; // 👈 Qo‘shildi
import React from "react";

const Products = ({ data }: { data: any }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Mahsulotlar</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.products?.map((item: any) => (
          <Link href={`/product/${item.id}`} key={item.id}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col">
              <div className="relative w-full h-60 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                {item.title}
              </h2>

              <p className="text-gray-600 font-medium mb-4 text-lg">
                ${item.price}
              </p>

              <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-200">
                Sotib olish
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
