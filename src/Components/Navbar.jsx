import React from "react";
import styled from "styled-components";
import logo from "./../assets/logo.png";
import Button from "./Button";

export default function Navbar() {
  return (
    <NavContainer>
      <img alt="Logo" src={logo}></img>
      <div className="btn_container">
        <Button className="btn_nav" primary>
          Connexion
        </Button>
        <Button className="btn_nav">Inscription</Button>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 5px 8px rgba(209, 209, 209, 0.25);

  img {
    height: 50px;
    padding-left: 20px;
  }

  .btn_container {
    margin-right: 1.2rem;
    button {
      margin-right: 20px;
    }
  }
`;
