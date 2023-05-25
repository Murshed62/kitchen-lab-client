import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCardDetails.css'

const RecipeCardDetails = ({cd}) => {
   
    const {category__id, name, picture, years_of_experience, num_recipes, likes, category} = cd;
  
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-5 custom-design">
        <figure className="h-80 overflow-hidden p-10 bo">
        <img src={picture} alt="Shoes" className="object-cover w-full h-full rounded-3xl" />
    </figure>
        <div className="card-body">
          <h2 className="card-title">Chef Name: {name}</h2>
          <p>Years_of_experience: {years_of_experience}</p>
          <p>Likes: {likes}</p>
          <p>Numbers of recipes: {num_recipes}</p>
          <div className="card-actions justify-end">
          <Link to={`/recipe/${category__id}`}><button className="btn btn-warning font-bold">View Recipes</button></Link>
          </div>
        </div>
      </div>
    );
};

export default RecipeCardDetails;