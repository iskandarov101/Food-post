import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Discount from './pages/Discount';
import Statistics from './pages/Statistics';
import Messages from './pages/Messages';
import Notification from './pages/Notification';
import SettingsPage from './pages/SettingsPage';
import Quit from './pages/Quit';

import Sidebar from './containers/Sidebar';

import Order from './components/Order';

import './assets/styles/main.scss'
function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Sidebar />
          <Switch>
            <Route cvcg path='/home'>
              <HomePage/>
              <Order />
              </Route>
            <Route path='/discount'>
              <Discount/>
            </Route>
            <Route path='/statistics'>
              <Statistics />
            </Route>
            <Route path='/messages'>
              <Messages />
            </Route>
            <Route path='/notification'>
              <Notification />
            </Route>
            <Route path='/settings'>
              <SettingsPage />
            </Route>
            <Route path='/Quit'>
              <Quit />
            </Route>    
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
