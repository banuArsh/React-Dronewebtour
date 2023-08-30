import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuMotion } from "react-icons/cg";
import { IconContext } from "react-icons";
import { MdRocket } from "react-icons/md";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./Navbarstyle";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../../data/NavbarData";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    }
    navigate(to);
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            <MdRocket />
            Omicron
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuMotion />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => {
              return (
                <NavItem key={index}>
                  <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                    {el.text}
                  </NavLinks>
                </NavItem>
              );
            })}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
