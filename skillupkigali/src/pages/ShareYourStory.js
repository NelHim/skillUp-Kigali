import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(50),
  image: z.string().url(),
  bookLink: z.string().url(),
  storydetails: z.string().min(10).max(500),
});

function ShareYourStory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await addDoc(collection(db, "stories"), data);
      console.log("Story successfully added!");
    } catch (error) {
      console.log("Error adding story: ", error);
      console.error("Error adding story: ", error);
    }
  };

  console.log(errors, "errors")

  return (
    <div className="mx-20 my-10">
      <h1 className="text-center text-2xl font-semibold">
        Share your entrepreneurial journey!
      </h1>

      <div className="mt-20">
        <form className="grid gap-20" onSubmit={handleSubmit(onSubmit)}>

          <div className="grid grid-cols-3 gap-16 justify-between">
            <div className="grid gap-1">
              <label className="font-semibold">
                Name
              </label>
              <input
                className="border border-gray-400 p-2 rounded-md w-full"
                {...register("name")}
                placeholder="Enter your name..."
              />
              {errors.name && <p className="text-red-700">{errors.name.message}</p>}
            </div>

            <div className="grid gap-1">
              <label className="font-semibold">Image Link</label>
              <input
                className="border border-gray-400 p-2 rounded-md w-full"
                {...register("image")}
                placeholder="Enter the link to your image..."
              />
              {errors.image && <p className="text-red-700">Invalid Url</p>}
            </div>

            <div className="grid gap-1">
              <label className="font-semibold">Book Link (Your Biography)</label>
              <input
                className="border border-gray-400 p-2 rounded-md w-full"
                {...register("bookLink")}
                placeholder="Enter the link to your book..."
              />
              {errors.bookLink && <p className="text-red-700">Invalid Url</p>}
            </div>
          </div>

          <textarea
            {...register("storydetails")}
            rows="10"
            className="mt-1 p-2 w-full border rounded"
            placeholder="Talk about your journey in detail..."
          ></textarea>
          {errors.storydetails && <p className="text-red-700">{errors.storydetails.message}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-400 text-white p-2 rounded-md w-40 hover:bg-blue-500 font-bold"
            >
              Share your story
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShareYourStory;
