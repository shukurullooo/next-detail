import Image from "next/image";

const getProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Mahsulot topilmadi");
  return res.json();
};

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={400}
              className="rounded-xl object-cover w-full mb-4"
            />
            <div className="grid grid-cols-3 gap-2">
              {product.images?.map((img: string, idx: number) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`${product.title}-${idx}`}
                  width={100}
                  height={80}
                  className="rounded-md object-cover w-full h-24"
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="text-xl font-semibold text-green-600 mb-2">
              ${product.price}{" "}
              <span className="text-sm text-red-500 ml-2">
                -{product.discountPercentage}% off
              </span>
            </div>

            <div className="space-y-1 text-sm text-gray-700 mb-4">
              <p>Brand: <span className="font-medium">{product.brand}</span></p>
              <p>Category: <span className="capitalize">{product.category}</span></p>
              <p>Stock: {product.stock} units</p>
            </div>

            <div className="flex gap-4 items-center mt-6">
              <Image
                src={product.thumbnail}
                alt="QR Code"
                width={80}
                height={80}
              />
              <p className="text-sm text-gray-500">ID: {params.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;