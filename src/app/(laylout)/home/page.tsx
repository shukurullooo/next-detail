import React from "react";
import Hero from "@/components/Hero";
import ProtectedRoute from "@/components/ProtectedRoute";

const page = async () => {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "force-cache",
  });
  const users = await res.json();

  return (
    <div>
      <ProtectedRoute>
        <Hero res={users} />
      </ProtectedRoute>
    </div>
  );
};

export default page;
