import React, { useEffect, useState } from "react";
import RecipeCardDetails from "../RecipeCardDetails/RecipeCardDetails";


const RecipeDetails = () => {
  const [cards, setCards] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://shishir-recipe-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      });
  }, []);

  if(loading){
    return <progress className="progress w-56"></progress>;
  }

  cardDetails.map(cd=>setCardDetails(cd))

  return (
    
   <div className="grid lg:grid-cols-3">
    {
      cards.map(cd=><RecipeCardDetails
      key={cd._id}
      cd={cd}
      ></RecipeCardDetails>)
    }
   </div>
  );
};

export default RecipeDetails;
