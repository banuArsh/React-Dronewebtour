import React from "react";
import GlobalStyle from "./globalstyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Pricing from "./pages/pricing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/signup" element={<SignUp />}></Route>

          <Route path="/pricing" element={<Pricing />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
