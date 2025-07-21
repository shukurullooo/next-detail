// src/app/recipe/page.tsx
import Food from "@/components/Food";
import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

const Recipes = async () => {
  const data = await fetch("https://dummyjson.com/recipes", { cache: "force-cache" });
  const recipes = await data.json();

  return (
    <ProtectedRoute>
      <div>
        <Food data={recipes} />
      </div>
    </ProtectedRoute>
  );
};

export default Recipes;
