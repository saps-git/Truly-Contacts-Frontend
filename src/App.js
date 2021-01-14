import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => ( //mapping all the routes in the routes array that is imported
            <Route 
              key={index} 
              path={route.path} 
              exact 
              render={(props) => <route.component{...props} />} // since component is a imported in the routes file from other file, hence we use spread operator (...) to spread out all the props
            ></Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
