import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </Router>
    );
}
 
export default Routes;