import React, { useEffect, useState } from "react";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import RecipeProcedure from "../RecipeProcedure/RecipeProcedure";
import './ViewRecipes.css'
import useTitle from "../../hooks/useTitle";

const ViewRecipes = ({ dl }) => {
  useTitle('Recipes');

  const {
    _id,
    name,
    picture,
    years_of_experience,
    num_recipes,
    likes,
    category__id,
    description,
    recipes,

  } = dl;

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="flex justify-center items-center bg-amber-200 py-10">
        <div className="pr-28">
          <img className="chef-img" src={picture} alt="" />
        </div>
        <div className="chef-content" style={{ width: "480px" }}>
          <h1 className="text-3xl font-bold pb-5">Chef Name: {name}</h1>
          <h1 className="pb-10">
            <span className="font-bold text-2xl">Short Description:</span>{" "}
            {description}
          </h1>
          <h1>
            <span className="font-bold text-2xl">Likes:</span> {likes}
          </h1>
          <h1>
            <span className="font-bold text-2xl">Number of Recipes:</span>{" "}
            {num_recipes}
          </h1>
          <h1>
            <span className="font-bold text-2xl">Experience in Years:</span>{" "}
            {years_of_experience}
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-3">
      {
        recipes.map(sr=><RecipeProcedure
        key={sr.category__id}
        sr={sr}
        ></RecipeProcedure>)
      }
      </div>
    </div>
  );
};

export default ViewRecipes;
