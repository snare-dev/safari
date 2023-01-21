import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = () => {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  }

  return (
    <>
    {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} /> }

    <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
      <nav>
        <NavLinks />
      </nav>
    </SideDrawer>

    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Safari</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
    </MainHeader>
    </>
  );
};

export default MainNavigation;
