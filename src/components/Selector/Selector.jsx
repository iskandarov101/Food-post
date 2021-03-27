
import './Selector.scss';

const Selector = ()=> {
  return(
    <select className='user-select'>
      <option value="Dine in">dine in</option>
      <option value="To go">to go</option>
      <option value="Delivery">delivery</option>
    </select>
  )
};

export default Selector;