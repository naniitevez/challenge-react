import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/" exact component={Login}/>
            </Switch>
        </Router>
    );
}
 
export default Routes;