import React from 'react';
import CustomImage from './CustomImage';

const RecipiesCard = ({ recipe }) => { // Fix the prop name to match "recipe"
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" /> {/* Use recipe.image */}
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg} alt="Author" /> {/* Fix the src */}
        <p className="recipe-title">{recipe.title}</p> {/* Use recipe.title */}
        <p className="recipe-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae.
        </p>
        <a className="view-btn" href="#!">
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
};

export default RecipiesCard;
