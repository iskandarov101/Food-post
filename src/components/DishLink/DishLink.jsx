import { Link } from 'react-router-dom';

import './DishLink.scss';


const DishesLink = () => {

  return (
    <div className="dishes-wrapper">
      <Link>
        <button className="dishes-wrapper__link">Hot Dishes</button>
      </Link>
      <Link>
        <button className="dishes-wrapper__link">Cold Dishes</button>
      </Link>
      <Link>
        <button className="dishes-wrapper__link">Soup</button>
      </Link>
      <Link>
        <button className="dishes-wrapper__link">Grill</button>
      </Link>
      <Link>
        <button className="dishes-wrapper__link">Appetizer</button>
      </Link>
      <Link>
        <button className="dishes-wrapper__link">Dessert</button>
      </Link>
    </div>
  )
}

export default DishesLink;