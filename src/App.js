import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/js/src/collapse";
// import "bootstrap/js/src/dropdown";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Products from './Components/Products';


const App = () => {
  return (
    <>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/products" component={Products} />
			<Route exact path="/about" component={About} />
			<Route exact path="/interest" component={Contact} />
			<Redirect to="/" />
		</Switch>
    </>
  )
}

export default App
