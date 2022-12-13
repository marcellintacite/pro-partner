import React from "react";
import styled from "styled-components";
import Card from "./Card";

export default function Valeur() {
  return (
    <ValueContainer>
      <h4>Nos valeurs</h4>
      <div className="cardContainer">
        <Card
          title="Rapidité"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatibus qui est vitae incidunt odio esse ab error cumque voluptatem?"
          icon="fa-solid fa-person-running"
        />
        <Card
          title="Fiabilité"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatibus qui est vitae incidunt odio esse ab error cumque voluptatem?"
          icon="fa-solid fa-layer-group"
        />
        <Card
          title="Honneteté"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatibus qui est vitae incidunt odio esse ab error cumque voluptatem?"
          icon="fa-solid fa-users"
        />
      </div>
    </ValueContainer>
  );
}

const ValueContainer = styled.div`
  width: 100%;
  height: auto;
  background: #fbf3f3;
  padding: 10px;
  padding-bottom: 40px;

  h4 {
    font-weight: 500;
    font-size: 36px;
    line-height: 90px;
    /* or 250% */

    text-align: center;
  }
  .cardContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
