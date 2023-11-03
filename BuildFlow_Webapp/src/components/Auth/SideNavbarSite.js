import React, { useState } from "react";

//All the svg files
import Home from "../assets/home-solid.svg";
import Team from "../assets/social.svg";
import Calender from "../assets/sceduled.svg";
import Projects from "../assets/trash.svg";
import Documents from "../assets/inbox.svg"
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
    position: fixed;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 65vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  height: 60vh;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  padding: 0.5rem 0;
  position: absolute;
  justify-content: space-between;
  top: 1rem;
  left: 0;
  width: ${(props) => (props.clicked ? "16rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const SideNavbarSite = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <Container>
            <Button clicked={click} onClick={() => handleClick()}>
                Click
            </Button>
            <SidebarContainer>
                <SlickBar clicked={click}>
                    <Item
                        onClick={() => setClick(false)}
                        exact activeClassName="active"
                        to="/Dashborad">
                        <img src={Home} alt="Home" />
                        <Text clicked={click}>Dashboard</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/DisplayOrderDeliverdStatus">
                        <img src={Team} alt="Team" />
                        <Text clicked={click}>Order Request View</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/AllOrdersSite">
                        <img src={Calender} alt="Calender" />
                        <Text clicked={click}>Order Delivered Status</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/DisplayApprovedOrderSite">
                        <img src={Documents} alt="Documents" />
                        <Text clicked={click}>All Orders</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/DisplayRejectOrderSite">
                        <img src={Projects} alt="Projects" />
                        <Text clicked={click}>Request Orders</Text>
                    </Item>
                </SlickBar>
            </SidebarContainer>
        </Container>
    );
};

export default SideNavbarSite