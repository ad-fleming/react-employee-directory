import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Route exact path="/react-employee-directory" component={About}/>
        <Route exact path="/react-employee-directory/about" component={About}/>
        <Route exact path="/react-employee-directory/search" component={Search}/>
      </>
    </Router>
  );
}

export default App;
