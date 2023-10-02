import Abdol from '../images/Abdool.jpeg'
import Jose from  '../images/Jose.jpeg'
import Aaron from  '../images/Aaron.jpeg'

import React  from 'react';
const Test = () => {
    const reviews = [
        {
          id: 1,
          name: "Jose",
          rating: 5,
          image: Jose,
          description:
            "The  greek salad was amazing  ",
        },
        {
          id: 2,
          name: "Aaron",
          rating: 4,
          image: Aaron,
          description:
            "worcestershire sauce ",
        },
        {
            id: 3,
            name: "Abdol",
            rating: 5,
            image: Abdol,
            description:
              "The Lemon dessert tastes nice with tea",
        },
      ];
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>Testimonial</h2>
            </div>
            <div className='test-cards'>
            {
                reviews.map(review => <div key={review.id} className='test-content'>
                     <h3>{review.name}</h3>
                    <img src={review.image} alt=''/>
                    <div className='menu-content'>
                        <div>
                            <h3> Rating : {review.rating}</h3>
                        </div>
                        <p>{review.description}</p>
                    </div>
                </div>)
            }
            </div>
        </div>

    )
}
export default Test;