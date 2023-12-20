import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function StoryDetails() {
  const [story, setStory] = useState();
  const { id } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const bookLink = query.get("bookLink");
  console.log(bookLink, "BookLink")

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
          {bookLink && <div className="bg-blue-400 w-full text-white mt-10 p-2 rounded-md md:w-80 text-center hover:bg-blue-500 font-bold">
            <a href={bookLink} target="_blank" rel="noopener noreferrer">
              Read {story?.name}'s Biography
            </a>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default StoryDetails;
