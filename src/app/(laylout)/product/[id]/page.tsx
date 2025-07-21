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
          {/* Rasmlar */}
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

          {/* Mahsulot ma’lumotlari */}
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
              <p>SKU: {product.sku}</p>
              <p>Stock: {product.stock} units</p>
              <p>Weight: {product.weight}g</p>
              <p>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
              <p>Warranty: {product.warrantyInformation}</p>
              <p>Shipping: {product.shippingInformation}</p>
              <p>Status: <span className="text-green-500">{product.availabilityStatus}</span></p>
              <p>Return Policy: {product.returnPolicy}</p>
              <p>Minimum Order: {product.minimumOrderQuantity} pcs</p>
            </div>

            <div className="flex gap-4 items-center mt-6">
              <Image
                src={product.meta.qrCode}
                alt="QR Code"
                width={80}
                height={80}
              />
              <p className="text-sm text-gray-500">Barcode: {product.meta.barcode}</p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Foydalanuvchi sharhlari</h2>
          <div className="space-y-4">
            {product.reviews?.map((review: any, i: number) => (
              <div key={i} className="bg-gray-100 p-4 rounded-xl shadow-sm">
                <div className="flex justify-between">
                  <p className="font-semibold">{review.reviewerName}</p>
                  <p className="text-sm text-yellow-600">⭐ {review.rating}/5</p>
                </div>
                <p className="text-gray-700 mt-1">{review.comment}</p>
                <p className="text-xs text-gray-500 mt-1">{new Date(review.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
