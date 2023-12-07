import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StoryDetails() {
  const [story, setStory] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getStory(storyId) {
      const storyRef = doc(db, "stories", storyId);
      const storySnapshot = await getDoc(storyRef);
      if (storySnapshot.exists()) {
        const storyData = storySnapshot.data();
        setStory(storyData);
      }
    }

    getStory(id);
  }, [id]);

  return (
    <div className="mt-10">
      <div className="grid lg:grid-cols-2 gap-5 sm:gap-20">
        <img
          src={story?.image}
          alt={story?.name}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div>
          <h4 className="text-2xl font-medium text-[#0ccbf1d9]">
            Who is {story?.name} :
          </h4>
          <p className="mt-5">{story?.storydetails}</p>
        </div>
      </div>
    </div>
  );
}

export default StoryDetails;
