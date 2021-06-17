import {HashRouter, Route, Switch} from 'react-router-dom'
import HeroDetail from '../pages/HeroeDetail/HeroDetail';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Searchresult from '../pages/SearchResult/SearchResult';
import RequireAuth from '../RequireAuth';

const Routes = () => {

    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={props => <RequireAuth {...props} Component={Home}/>}/>
                <Route path="/heroes/:id" component={props => <RequireAuth {...props} Component={HeroDetail}/>}/>
                <Route path="/search/:name" component={props => <RequireAuth {...props} Component={Searchresult}/>}/>
            </Switch>
        </HashRouter>
    );
}
 
export default Routes;