import React from "react";
import { Link } from "react-router-dom";

const Story = ({ name, image, bookLink, id }) => {
  return (
    <div className="grid rounded-xl shadow-2xl">
      <div className="h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full object-top h-full object-cover"
        />
      </div>
      <div className="mt-5 grid p-5">
        <h5>{name}</h5>
        {bookLink ? (
          <a
            href={bookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold mt-1 hover:text-[#0ccbf1d9] justify-self-start"
          >
            Read {name}'s book
          </a>
        ) : (
          "No Book"
        )}
        <Link
          className="text-xs font-bold mt-1 hover:text-[#0ccbf1d9] justify-self-start"
          to={{
            pathname: `/stories/${id}`,
            search: `?bookLink=${bookLink ? bookLink : ""}`,
          }}
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Story;
