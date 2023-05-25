import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ViewRecipes from '../ViewRecipes/ViewRecipes';

const SingleRecipe = () => {
    const {_id} = useParams();
    const dataLoad = useLoaderData();
    return (
        <div>
           {
            dataLoad.map(dl=><ViewRecipes
            key={dl._id}
            dl={dl}
            ></ViewRecipes>)
           } 
        </div>
    );
};

export default SingleRecipe;