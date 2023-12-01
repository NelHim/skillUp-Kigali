import React, { useEffect, useState } from "react";
import Story from "./Story";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {

    async function getStories() {
      const storiesCol = collection(db, "stories");
      const storySnapshot = await getDocs(storiesCol);
      const storyList = storySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      return storyList
    }
    getStories().then((storyList) => { 
      console.log(storyList, "storyList")
      setStories(storyList)
    }).catch((error) => {
      console.log(error, "error")
    })

   }, []);

  return (
    <div className="mx-20 mt-10">
      <h1 className="text-center text-2xl font-semibold">
        Learn how other entreprenuers did it
      </h1>
      <div className="mt-16 grid grid-cols-3 gap-16">
        {stories.map((story) => (
          <Story
            name={story.name}
            image={story.image}
            bookLink={story.bookLink}
            id={story.id}
            key={story.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Stories;
