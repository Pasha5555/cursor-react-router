import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";


export default function HomePage(){
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>
        </Switch>
    )
};