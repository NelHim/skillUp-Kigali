import React from "react";

function HomePage() {
  return (
    <div className="text-center mx-8 mt-8 grid grid-cols-2">
      <div className="bg-blue-100 mt-16 p-6 rounded-2xl shadow-2xl">
        <h1 className="text-2xl text-[#0ccbf1d9] font-bold">Mission</h1>
        <p className="text-gray-900 text-base mt-5 font-medium">
          SkillUp Kigali is a website with a mission to significantly reduce
          unemployment rates on the African continent by democratizing in-demand
          computational and entrepreneurial skills, particularly among African
          youth. This will enable them to create jobs while solving current
          issues in their respective communities. This particular project
          focuses on implementing this mission in Kigali.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
