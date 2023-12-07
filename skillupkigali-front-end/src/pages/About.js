import React from "react";
import unemployed from "../assets/SK-Unemployment.png";
import TestimonialCard from "../components/UI/TestimonialCard";

function About() {
  return (
    <div className="my-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <img
          src={unemployed}
          alt="unemployment"
          className="mx-auto rounded-lg"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-xl sm:text-3xl font-medium text-[#0ccbf1d9]">
            Problem Statement:
          </h1>
          <p className="mt-3 sm:mt-5 text-base sm:text-lg">
            Unemployment rates in Kigali and africa as a whole are high, particularly among the youth.
            This is compounded by a lack of access to quality education and
            skills training in computational and entrepreneurial fields. The
            project aims to address this problem by democratizing access to
            these skills.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <h1 className="text-xl sm:text-3xl font-medium text-[#0ccbf1d9]">
          Facts about unemployment in Africa:
        </h1>
        <div className="grid sm:grid-cols-2 gap-8 mt-5">
          <TestimonialCard text="Unemployment among young people in Africa is a significant problem. More than 72 million youth in Africa are not in education, employment, or training1. This includes nearly 60 million young people who would like to work but face obstacles to searching for and/or obtaining jobs" />
          <TestimonialCard text="In South Africa, for example, young people have described unemployment using negative descriptions such as “a huge garbage heap filled with bad things”, “life is over”, “danger and death”, “a man-made grave”, and “a monster”2. One young participant explained that unemployment brought “a black heart full of sorrow and pain; the heart is broken, angry, sore and sad”" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl mt-14 font-medium text-[#0ccbf1d9]">
          What young people say:
        </h1>

        <div className="grid sm:grid-cols-2 gap-8 mt-5">
          <TestimonialCard
            name="Joy Murekatete"
            text="She is the owner of JOTETE INVESTMENT LTD, a multi-service company established in 2013 that offers beautification, floral, and interior design services to the hospitality sector and other clients1. The company grows summer flowers in Rulindo district for local and export purposes1. However, the company was heavily hit by a slump in demand, following the COVID-19 pandemic1. This led her to lay off some of her employees1. Ms. Murekatete successfully applied for financial support under the Young Entrepreneurs Resilience Fund, to revive her business1. With a RWF 5 million (USD 5,000) injection, her business is recovering1. She now employs over 33 permanent employees and more than 208 casual workers."
          />
          <TestimonialCard
            name="Gasana Jean de Dieu"
            text="After graduating from high school, he identified an opportunity of shoe-making business1. He realized that shoes in his rural district of Gisagara are expensive and do not fully benefit his community1. Hence, his business aims at creating jobs and availing affordable shoes to the community1. He launched Gisagara Youth Innovation Center LTD in 2016 and started manufacturing shoes1. His business slowly expanded to four shops until when the COVID-19 pandemic hit the nation1. Consequently, orders fell by half, raw material access was limited, revenue flows were affected, ultimately he closed two of his shops and laid off employees1. Through Young Entrepreneurs Resilience Fund, Gasana was granted RWF 5 million which has supported his business to turn around and recover by purchasing leather and shoe making machinery, hiring extra staff and this has led his monthly sales turnover to increase by 10 percent."
          />
          <TestimonialCard
            name="Namhla Mcimbi"
            text="This is a story of a woman who had to abandon her psychology studies because she could no longer pay the tuition fees. Like many of her fellow students, Mcimbi has now fallen into unemployment"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
