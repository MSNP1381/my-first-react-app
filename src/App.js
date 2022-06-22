import {Route, Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites'; 

import {Layout} from "./components/layout/Layout"
function App() {
  return (<div>
<Layout>
    <Routes>
        <Route path='/' element={<AllMeetupsPage/>}></Route>
        <Route path='/new' element={<NewMeetupPage/>}></Route>
        <Route path='/favorites' element={<FavoritesPage/>}></Route>

    </Routes>
</Layout>



  </div>);
}

export default App;
