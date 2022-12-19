import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Links() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="Explore" element={<Users />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <section className="section">
      <ul className="links-list">
        <li>
          <Link to="/about" className="links-items">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="links-items">
            Explore
          </Link>
        </li>
        <li>
          <Link to="/about" className="links-items">
            About us
          </Link>
        </li>
        <li>
          <Link to="/about" className="links-items">
            Contact Us
          </Link>
        </li>
      </ul>
    </section>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Error() {
  return <h2>oops</h2>;
}
export default Links;
