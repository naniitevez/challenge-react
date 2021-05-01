import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeroDetail from '../pages/HeroeDetail/HeroDetail';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/heroes/:id" component={HeroDetail}/>
            </Switch>
        </Router>
    );
}
 
export default Routes;