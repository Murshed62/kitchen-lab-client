import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const handleTost = () =>{
    toast("Favorite Recipe Added");
}

const RecipeProcedure = ({sr}) => {
    const [btnDisabled, setBtnDisabled] = useState(false);
    const {recipe_name, ingredients, cooking_method, rating} = sr;

    const handleClick=()=>{
        setBtnDisabled(true);
    }

    return (
        <>
        <div style={{width:"350px"}} className='mx-auto mt-10'>
            <h1 className='text-3xl font-bold'>Recipe: {recipe_name}</h1>
            <h1 className='font-bold'>Ingredients</h1>
            {
                ingredients.map(ig=><li>{ig}</li>)
            }
            <h1><span className='font-bold pt-2'>Cooking Process:</span> <br />{cooking_method}</h1>
            <h1 className='pb-5 pt-2'><span className='font-bold'>Rating:</span> {rating}</h1>
            <span onClick={handleClick}><button onClick={handleTost} className='btn btn-warning' disabled={btnDisabled}>ADD TO FAVORITES</button></span>
        </div>
        <ToastContainer></ToastContainer>
        </>
        
    );
};

export default RecipeProcedure;