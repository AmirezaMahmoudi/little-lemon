import React from "react";
import Dessert from "../images/desert.jpg";
import Greek from "../images/greek salad.jpg";
import Bruchetta from "../images/bruchetta.jpg";

const Menu = () => {
  const recipes = [
    {
      id: 1,
      title: "Greek salad",
      price: 12.99,
      image: Greek,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      id: 2,
      title: "Bruchetta",
      price: 5.99,
      image: Bruchetta,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: 4.78,
      image: Dessert,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <h4>Order a Delivery</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
