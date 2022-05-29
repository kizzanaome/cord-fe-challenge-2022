import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

import menu from "../../images/menu.png"
import closeImg from "../../images/cancel.png"

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  /* TODO: Write the necessary functions to open and close the sidebar */

  const openNavBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div
        className={isOpen ? "cover" : ""}
        onClick={isOpen ? (() => setIsOpen(false)) : () => { }}>
      </div>

      <HamburgerMenu className={isOpen ? 'invisible' : ''} onClick={openNavBar}>
        <img src={menu} alt="menu" />
      </HamburgerMenu>

      <SideNavBarCont className={isOpen ? 'visible' : ''}>
        <CloseMenu className={isOpen ? 'visible' : ''} onClick={openNavBar}>
          <img src={closeImg} alt="menu" />
        </CloseMenu>
        {/* TODO: Implement a hamburger icon that controls the open state of the sidebar. This control should only be visible on mobile devices via CSS media queries */}
        {/* The sidebar should slide in from left */}
        <SideNavHeader>
          Wesley
          <img src={Arrow} alt="Arrow pointing down" />
        </SideNavHeader>
        <SideNavMainLink to="/discover" exact>
          Discover
          <img src={SearchWhite} alt="Magnifying glass" />
        </SideNavMainLink>
        <SideNavSectionTitle><HeaderText>Watched</HeaderText></SideNavSectionTitle>
        <NavLink to="/watched/movies">Movies</NavLink>
        <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
        <SideNavSectionTitle><HeaderText>Saved</HeaderText></SideNavSectionTitle>
        <NavLink to="/saved/movies">Movies</NavLink>
        <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
      </SideNavBarCont>
    </>
  );
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  // transition: all 0.5s ease 0s;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;

  // /* --- smartphone and tablet responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 1439px) {
    // display: none;
    visibility: hidden;
    // transition: all 0.5s ease 0s;
    // width: 0;
  }
`;

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}

  // /* --- smartphone and tablet responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 1439px) {
    margin-top: 25px;
  }
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: .8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover, &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active { 
    background: ${colors.primaryColor};
    opacity: 1;
  }
`

const HamburgerMenu = styled.div`
  display: none;

  // /* --- smartphone and tablet responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 1439px) {
    display: block;
    position: absolute;
    margin: 25px 0 0 25px;
    cursor:pointer;

    img {
      width:35px;
    }
  }
`;

const CloseMenu = styled.div`
  display: none;

  // /* --- smartphone and tablet responsiveness --- */
  @media only screen and (min-device-width: 270px) and (max-device-width: 1439px) {
    display: block;
    position: absolute;
    z-index: 5;
    margin: 15px 15px 0 25px;
    right: 0;
    cursor:pointer;

    img {
      width:25px;
    }
  }
`;
