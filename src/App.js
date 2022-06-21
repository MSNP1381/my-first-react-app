import {Route, Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites'; 


function App() {
  return (<div>
<Routes>
<Route path='/' element={<AllMeetupsPage/>}></Route>
<Route path='/new' element={<NewMeetupPage/>}></Route>
<Route path='/favorites' element={<FavoritesPage/>}></Route>

</Routes>


  </div>);
}

export default App;
