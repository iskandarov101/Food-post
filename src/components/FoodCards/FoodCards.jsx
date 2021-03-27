import './FoodCards.scss';

import Food from '../../assets/images/food1.png';
import Food1 from '../../assets/images/food2.png';
import Food2 from '../../assets/images/food3.png';
import Food3 from '../../assets/images/food4.png';
const FoodCards = ()=> {
  return(
    <div className="food-cards">
      <button className='card-btn'>
        <img className='card-btn__image' src={Food} alt="food-image"/>
        <h2 className="card-btn__title">Spicy seasoned seafood noodles</h2>
        <p className="card-btn__price">$ 2.29</p>
        <p className="card-btn__valid">20 Bowls available</p>
      </button>

      <button className='card-btn'>
        <img className='card-btn__image' src={Food1} alt="food-image"/>
        <h2 className="card-btn__title">Salted Pasta with mushroom sauce</h2>
        <p className="card-btn__price">$ 2.69</p>
        <p className="card-btn__valid">11 Bowls available</p>
      </button>

      <button className='card-btn'>
        <img className='card-btn__image' src={Food2} alt="food-image"/>
        <h2 className="card-btn__title">Healthy noodle with spinach leaf</h2>
        <p className="card-btn__price">$ 2.99</p>
        <p className="card-btn__valid">16 Bowls available</p>
      </button>

      <button className='card-btn'>
        <img className='card-btn__image' src={Food3} alt="food-image"/>
        <h2 className="card-btn__title">Beef dumpling in hot and sour soup</h2>
        <p className="card-btn__price">$ 2.29</p>
        <p className="card-btn__valid">16 Bowls available</p>
      </button>

      <button className='card-btn'>
        <img className='card-btn__image' src={Food3} alt="food-image"/>
        <h2 className="card-btn__title">Beef dumpling in hot and sour soup</h2>
        <p className="card-btn__price">$ 2.29</p>
        <p className="card-btn__valid">16 Bowls available</p>
      </button>

      <button className='card-btn'>
        <img className='card-btn__image' src={Food3} alt="food-image"/>
        <h2 className="card-btn__title">Beef dumpling in hot and sour soup</h2>
        <p className="card-btn__price">$ 2.29</p>
        <p className="card-btn__valid">16 Bowls available</p>
      </button>

      <button className='card-btn'>
        <img className='card-btn__image' src={Food3} alt="food-image"/>
        <h2 className="card-btn__title">Beef dumpling in hot and sour soup</h2>
        <p className="card-btn__price">$ 2.29</p>
        <p className="card-btn__valid">16 Bowls available</p>
      </button>

      <button className='card-btn'>
        <img className='card-btn__image' src={Food3} alt="food-image"/>
        <h2 className="card-btn__title">Beef dumpling in hot and sour soup</h2>
        <p className="card-btn__price">$ 2.29</p>
        <p className="card-btn__valid">16 Bowls available</p>
      </button>

      <button className='card-btn'>
        <img className='card-btn__image' src={Food3} alt="food-image"/>
        <h2 className="card-btn__title">Beef dumpling in hot and sour soup</h2>
        <p className="card-btn__price">$ 2.29</p>
        <p className="card-btn__valid">16 Bowls available</p>
      </button>

      
    </div>
  )
}

export default FoodCards;