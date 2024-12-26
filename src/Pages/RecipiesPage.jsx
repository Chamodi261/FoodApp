import React from 'react';
import PreviuousSearches from '../Components/PreviuousSearches';
import RecipiesCard from '../Components/RecipiesCard';

const RecipiesPage = () => {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chefis/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chefis/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chefis/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chefis/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chefis/img_6.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chefis/img_1.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviuousSearches />
      <div className="recipies-container">
        {recipes.map((recipe, index) => (
          <RecipiesCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipiesPage;
