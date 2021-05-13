import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeroDetail from '../pages/HeroeDetail/HeroDetail';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import RequireAuth from '../RequireAuth';

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={props => <RequireAuth {...props} Component={Home}/>}/>
                <Route path="/heroes/:id" component={props => <RequireAuth {...props} Component={HeroDetail}/>}/>
            </Switch>
        </Router>
    );
}
 
export default Routes;