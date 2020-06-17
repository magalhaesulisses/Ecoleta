import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

//Pages
import Home from './pages/Home/';
import CreatePoint from './pages/CreatePoint/'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Route path="/" component={Home}  exact={true} />
            <Route path="/create-point" component={CreatePoint}  />
        </BrowserRouter>
    );
}

export default Routes;