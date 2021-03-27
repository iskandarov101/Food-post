import OrderCard from '../OrderCard';
import foodData from '../../data/dataFoods'

import './Order.scss';

const Order = ()=> {
  return(
   <div className='order'>
      <h1 className='order__title'>Orders #34562</h1>

      <div className='order__inner-wrapper'>
        <button className='order__btn'>Dine In</button>
        <button className='order__btn'>To Go</button>
        <button className='order__btn'>Delivery</button>
      </div>

      <div className='order__inner-quota'>
        <p className='order__quota'>item</p>
        <div className='order__inner-quota__wrapper'>
          <p className='order__quota'>Qty</p>
          <p className='order__quota'>Price</p>
        </div>
      </div>
      <div className='line'></div>

    <div>
      {
        foodData.map(food => {
          return <OrderCard 
          foodImg={food.imgFood} 
          foodTitle={food.foodTitle} 
          foodCost = {food.cost}
          foodValue = {food.value}
          foodTotalPrice = {food.totalPrice}
          />
        })
      }
    </div>
      
   </div>
  )
};

export default Order;