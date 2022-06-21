import {Route, Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites'; 


function App() {
  return (<div>
<Routes>
<Route path='/'>
  <AllMeetupsPage/>
</Route>
<Route path='new'><NewMeetupPage/></Route>
<Route path='favorites'><FavoritesPage/></Route>

</Routes>


  </div>);
}

export default App;
