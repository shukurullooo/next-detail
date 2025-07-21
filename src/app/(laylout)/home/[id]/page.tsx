const getUser = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  if (!res.ok) throw new Error("Foydalanuvchi topilmadi");
  return res.json();
};

const UserDetailPage = async ({ params }: { params: { id: string } }) => {
  const user = await getUser(params.id);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl">
        <div className="flex flex-col items-center gap-4">
          <img
            src={user.image}
            alt={user.firstName}
            className="rounded-full border-4 border-blue-500 object-cover w-36 h-36 shadow-md"
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm text-gray-500">@{user.username}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">📞 {user.phone}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h2 className="font-semibold text-lg mb-2">Shaxsiy Ma'lumotlar</h2>
            <p>Yosh: {user.age}</p>
            <p>Jinsi: {user.gender}</p>
            <p>Tug‘ilgan sana: {user.birthDate}</p>
            <p>Qon guruhi: {user.bloodGroup}</p>
            <p>Bo‘y: {user.height} cm</p>
            <p>Vazn: {user.weight} kg</p>
            <p>Ko‘z rangi: {user.eyeColor}</p>
            <p>Soch: {user.hair.color} ({user.hair.type})</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h2 className="font-semibold text-lg mb-2">Manzil</h2>
            <p>{user.address.address}</p>
            <p>{user.address.city}, {user.address.state}</p>
            <p>{user.address.country}, {user.address.postalCode}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h2 className="font-semibold text-lg mb-2">Kompaniya</h2>
            <p>Nomi: {user.company.name}</p>
            <p>Bo‘lim: {user.company.department}</p>
            <p>Lavozim: {user.company.title}</p>
            <p>Manzil: {user.company.address.address}, {user.company.address.city}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h2 className="font-semibold text-lg mb-2">Bank va Kripto</h2>
            <p>Karta: **** **** **** {user.bank.cardNumber.slice(-4)}</p>
            <p>Muddati: {user.bank.cardExpire}</p>
            <p>IBAN: {user.bank.iban}</p>
            <p>Kripto: {user.crypto.coin} ({user.crypto.network})</p>
            <p>Wallet: {user.crypto.wallet}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;