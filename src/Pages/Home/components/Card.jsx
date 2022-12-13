import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Card({ title, paragraph, icon }) {
  return (
    <CardContainer>
      <i class={icon}></i>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 310px;
  height: auto;
  padding: 15px;
  margin-right: 2rem;
  margin-bottom: 15px;
  text-align: center;
  border-radius: 5px;
  background: #fff;
  :hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in;
  }
  i {
    font-size: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    color: #351d25;
  }

  h3 {
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 28px;
  }
  p {
    padding-bottom: 10px;
  }
  @media (max-width: 552px) {
    margin-right: 0rem;
    margin-bottom: 20px;
  }
`;
