import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/logo_bg.png";

function Footer(props) {
  return (
    <>
      <FooterContainer>
        <div className="first">
          <div style={{ width: "80%" }}>
            <img src={logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              voluptatibus qui est vitae incidunt odio
            </p>
          </div>
        </div>
        <div className="second">
          <h4>Liens importants</h4>
          <div className="links">
            <Link to="/">Accueil</Link>
            <Link to="/">A propos</Link>
            <Link to="/">Donation</Link>
            <Link to="/">Contribution</Link>
          </div>
        </div>
        <div className="three">
          <h4>Suivez-nous sur : </h4>
          <div className="iconContainer">
            <div className="ico">
              <span className="fab fa-facebook"></span>
            </div>
            <div className="ico">
              <span className="fab fa-instagram"></span>
            </div>
            <div className="ico">
              <span className="fab fa-twitter"></span>
            </div>
            <div className="ico">
              <span className="fab fa-github"></span>
            </div>
          </div>
        </div>
      </FooterContainer>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#351d25",
          color: "#fff",
          borderTop: "1px solid #fff",
          padding: "5px",
        }}
      >
        <p>&copy; aksanti bahiga 2022</p>
      </div>
    </>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  background-color: #351d25;
  color: #fff;
  padding-bottom: 40px;
  .first {
    flex: 1;
    img {
      width: 250px;
    }
  }
  .second {
    flex: 1;
    .links {
      display: flex;
      flex-direction: column;
      padding-top: 10px;

      a {
        text-decoration: none;
        color: #fff;
        padding: 4px;

        :hover {
          color: #fbf3f3;
          transform: translateX(-5px);
          transition: all 0.2s ease-in;
        }
      }
    }
  }
  .three {
    flex: 1;

    .iconContainer {
      display: flex;
      padding-top: 25px;
      width: 60%;
      justify-content: space-between;

      .ico {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fbf3f3;
        border-radius: 5px;
        cursor: pointer;

        :hover {
          background-color: #df9095;
          transition: all 0.2s ease-in;
          span {
            color: #fff;
          }
        }

        span {
          color: #333;
        }
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    .first,
    .second,
    .three {
      padding-bottom: 15px;
    }
    .first {
      img {
        width: 200px;
      }
    }
  }
`;
