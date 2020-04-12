import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Components/Header';
import './App.css';
import ContactsPage from "./pages/Contacts";
import PostsPage from "./pages/Posts";
import HomePage from "./pages/Home";
import GalleryPage from "./pages/Gallery";

export default function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <Switch>
         <Route path="/posts">
            <PostsPage />
          </Route>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}