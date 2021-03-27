import deleteIcon from '../../assets/icons/icons';

import './OrderCard.scss';


const OrderCard = ({foodImg, foodTitle, foodCost, foodValue, foodTotalPrice})=> {
  return(
    <div className='order-card'>
      <div className='order-card__top'>
        <img className='order-card__food-img' src={foodImg} alt="" />
        <div className='order-card__price-wrap'>
          <p className='order-card__food-name'>{foodTitle}</p>
          <span className='order-card__food-cost'>{foodCost}</span>
        </div>
        <span className='order-cardd__value'>{foodValue}</span>
        <p className='order-card__total-price'>{foodTotalPrice}</p>
      </div>
      <div className='order-card__input-wrap'>
        <input className='order-card__input' type="text" placeholder='Please, just a little bit spicy only.' />
        <button className='delete-icon'>{deleteIcon}</button>
      </div>
    </div>
  )
};

export default OrderCard;
