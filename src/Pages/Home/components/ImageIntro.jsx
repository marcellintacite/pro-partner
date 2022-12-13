import React from "react";
import styled, { css } from "styled-components";
import "./imageIntro.css";
export default function ImageIntro() {
  return (
    <div className="imageContainer">
      <ContentContainer>
        <h3>
          Trouvez le meilleur partenaire pour votre futur projet avec
          <span>Pro-partner</span>.
        </h3>
        <div
          style={{
            marginTop: "2.3rem",
            display: "flex",
          }}
        >
          <Button style={{ background: "#351d25", color: "#FFF" }}>
            Inscription
          </Button>
          <Button>Apprendre plus</Button>
        </div>
      </ContentContainer>
    </div>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  h3 {
    width: 80%;
    font-weight: 700;
    font-size: 80px;
    line-height: 90px;
    color: #fff;

    span {
      color: #df9095;
      padding-left: 1.5rem;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    h3 {
      width: 95%;
      font-weight: 700;
      font-size: 60px;
      line-height: 70px;
    }
  }
  @media (max-width: 550px) {
    width: 100%;

    h3 {
      width: 95%;
      font-weight: 700;
      font-size: 34px;
      line-height: 44px;
    }
  }
  @media (max-width: 345px) {
    h3 {
      font-size: 30px;
      line-height: 40px;
    }
  }
`;

const Button = styled.button`
  padding: 10px 8px;
  width: 200px;
  height: 45px;
  font-size: 18px;
  border-radius: 5px;
  background: #fbf3f3;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 30px;
  transition: all 0.2s ease-in;
  :hover {
    transform: scale(0.92);
    box-shadow: 1px 5px 10px #fbf3f399;
  }
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: #fff;
    `}

  @media (max-width: 550px) {
    padding: 14px 25px;
    height: auto;
    width: auto;
  }
  @media (max-width: 345px) {
    padding: 10px 20px;
    height: auto;
    width: auto;
  }
`;
