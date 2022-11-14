import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from './netflix_logo.png';
import logo from './web_logo.png';
import profile from './profile.png'



import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);

  const navigate = useNavigate();



  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener('scroll', transitionNavBar)
  }, []);

  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <h1 onClick={() => {navigate('/')}} >CineClub</h1>
        <img
          className="nav__logo"
          onClick={() => navigate('/')}
          src={logo}
          alt="Netflix"
        />

        <img
          className="nav__avatar"
          onClick={() => {navigate('/profile')}}
          src={profile}
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
