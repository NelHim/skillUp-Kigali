import React from "react";
import jobCreation from "../assets/SK-job-creation.png";

function HomePage() {
  return (
    <div className="grid md:grid-cols-2 md:gap-20 mb-10">
      <div className="sm:mt-16 text-center">
        <div
          className="grid gap-15 bg-blue-100 mt-8 p-10 sm:p-16 rounded-2xl shadow-2xl "
          id="homeCard"
        >
          <h1 className="text-2xl text-[#0ccbf1d9] font-bold">Mission</h1>
          <p className="text-gray-900 text-base mt-5 font-medium">
            SkillUp Kigali is a platform that aims significantly reducing
            unemployment rates on the African continent by democratizing
            entrepreneurial skills, as well as in-demand digital skills
            particularly among African youth. This will enable young africans to
            create jobs while solving current issues in their respective
            communities.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <img src={jobCreation} alt="Job Creation" className="rounded-lg" />
      </div>
    </div>
  );
}

export default HomePage;
