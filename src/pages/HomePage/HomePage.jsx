import Search from '../../components/Search';
import DishesLink from '../../components/DishLink';
import FoodCards from '../../components/FoodCards';
import Selector from '../../components/ChooseSelect';

import './HomePage.scss';
const HomePage = ()=> {
  return(
    <div className="wrapper">
      <div className="left-side">
        <div className="top-part">
          <div className="top-part-left">
            <h1 className='home-title'>Jaegar Resto</h1>
            <p className="home-date">Tuesday, 2 Feb 2021</p>
          </div>
          <div className="top-part-right">
            <Search/>
          </div>
        </div>

        <div className="link-part">
          <DishesLink />
        </div>
        <Selector />
        <FoodCards/>
      </div>

      <div className="right-side">
        
      </div>
    </div>
  )
};

export default HomePage;