import React  from 'react';
import Greek from '../assets/greek salad.jpg';
import Brucheta from '../assets/bruchetta.jpg';
import LemonD from '../assets/lemon dessert.jpg';
const Menu = () => {
    const recipes = [
        {
          id: 1,
          title: "Greek salad",
          price: 12.99,
           image : Greek ,
          description:
           "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, ",
        },
        {
          id: 2,
          title: "Bruchetta",
          price: 5.99,
          image: Brucheta ,
          description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        },
        {
          id: 3,
          title: "Lemon Dessert",
          price: 4.78,
          image: LemonD ,
          description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        },
      ];
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2> This week specials!</h2>
                <button>Order Menu</button>
            </div>
            <div className='cards'>
            {
                recipes.map(recipe => <div key={recipe.id}className='menu-items'>
                    <img src={recipe.image} alt=''/>
                    <div className='menu-content'>
                        <div className='heading'>
                            <h3>{recipe.title}</h3>
                            <p>${recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <h4>Order a Delivery</h4>
                    </div>
                </div>)
            }
            </div>
        </div>

    )
}
export default Menu;