import Image from "next/image";

const getRecipe = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!res.ok) throw new Error("Retsept topilmadi");
  return res.json();
};

export const RecipeDetailPage = async ({ params }: { params: { id: string } }) => {
  const recipe = await getRecipe(params.id);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="relative w-full h-72 md:h-96">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-10">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{recipe.name}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
            <span>⏱️ Prep: {recipe.prepTimeMinutes} min</span>
            <span>🔥 Cook: {recipe.cookTimeMinutes} min</span>
            <span>🍽️ Servings: {recipe.servings}</span>
            <span>📈 Difficulty: {recipe.difficulty}</span>
            <span>🌍 Cuisine: {recipe.cuisine}</span>
            <span>⭐ Rating: {recipe.rating} ({recipe.reviewCount} reviews)</span>
            <span>🔥 Calories: {recipe.caloriesPerServing} kcal</span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {recipe.ingredients.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              {recipe.instructions.map((step: string, i: number) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-white">
            {recipe.tags.map((tag: string, i: number) => (
              <span key={i} className="bg-blue-600 px-3 py-1 rounded-full">{tag}</span>
            ))}
            {recipe.mealType.map((type: string, i: number) => (
              <span key={i} className="bg-green-600 px-3 py-1 rounded-full">{type}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
