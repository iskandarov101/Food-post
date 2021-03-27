import Selector from '../Selector';

import './ChooseSelect.scss';

const ChooseSelect = () => {
  return(
    <div className='choose-select'>
      <h1 className='choose-select__title'>choose dishes</h1>
      <Selector />
    </div>
  )
};

export default ChooseSelect;