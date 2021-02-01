import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom"
import routes from './routes'
import {GlobalProvider} from './context/Provider'
import  isAuthenticated  from "./utils/isAuthenticated";

const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title || "TrulyContacts";

  if (route.needsAuth && !isAuthenticated()) {
    history.push("/auth/login");
  };

  return(
    <Route 
      path={route.path} 
      exact 
      render={(props) => <route.component{...props} />} // since component is a imported in the routes file from other file, hence we use spread operator (...) to spread out all the props
    ></Route>
  );
};

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => ( //mapping all the routes in the routes array that is imported
            <RenderRoute {...route} key = {index} />
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
