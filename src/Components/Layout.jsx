import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./About";
import Contactus from "./Contactus";
import Footer from "./Footer";
import Header from "./Header";
import { Navbar } from "./Navbar";
const Layout = () => {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "950px",
        backgroundColor: "Red",
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />{" "}
          <Route path="/contactus" element={<Contactus />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
      <Header />
      <Footer />
    </div>
  );
};

export default Layout;
