import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./../assets/logo.png";
import Button from "./Button";

export default function Navbar() {
  return (
    <NavContainer>
      <img alt="Logo" src={logo}></img>
      <div className="btn_container">
        <Link to="/login" className="btn_link">
          Connexion
        </Link>
        <Link to="/signup" className="btn_link">
          Inscription
        </Link>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  background-color: #fff9;
  filter: blur(30);
  z-index: 1000;
  box-shadow: 0px 5px 8px rgba(209, 209, 209, 0.25);

  img {
    height: 50px;
    padding-left: 20px;
  }

  .btn_container {
    margin-right: 30px;
    .btn_link {
      padding: 7px 8px;
      margin-right: 10px;
      text-decoration: none;
      color: #333;
    }
    .btn_link:first-child {
      border: 1px solid #333;
    }
  }

  @media (max-width: 700px) {
    .btn_container {
      margin-right: 0;
    }
    img {
      height: 35px;
    }
  }
`;
