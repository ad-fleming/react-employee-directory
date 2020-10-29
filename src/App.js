import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";


function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Wrapper>
        <Route exact path="/react-employee-directory" component={About}/>
        <Route exact path="/react-employee-directory/about" component={About}/>
        <Route exact path="/react-employee-directory/search" component={Search}/>
        </Wrapper>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
