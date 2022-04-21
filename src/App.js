import {Switch,Route, Redirect} from 'react-router-dom'
import Main from './pages/Main';
import Photo from './pages/Photo';

const App = () => {
  return (
    <Switch>
      <Route path='/' >
        <Main/>
      </Route>
      <Redirect to='/'/>
    </Switch>
  );
}

export default App;