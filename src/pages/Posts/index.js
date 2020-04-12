import React from "react";
import { Switch, Route } from "react-router-dom";

import Posts from "./posts";

export default function PostsPage(){
  return(
      <Switch>
          <Route exact path='/posts' component = {Posts}/>
      </Switch>
  )
};