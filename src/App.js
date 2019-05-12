import React, { Component } from "react"
import NavBar from "./components/navbar"
import Contact from "./components/contact"
import Home from "./components/home"
import About from "./components/about"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./index.css"
import "bootstrap"

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </>
    </Router>
  )
}

export default App
