import React from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import CharactersContainer from './components/characters/CharactersContainer'
import CharacterDetail from './components/characters/CharacterDetail'

const Navbar = () => (
  <div className="navbarr">
    <NavLink exact to="/" activeClassName="nav-active">
      Home
    </NavLink>
    <NavLink exact to="/characters" activeClassName="nav-active">
      Characters
    </NavLink>
  </div>
)

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/characters" component={CharactersContainer} />
      <Route exact path="/character/:id" component={CharacterDetail} />
    </Switch>
  </BrowserRouter>
)

export default Router
