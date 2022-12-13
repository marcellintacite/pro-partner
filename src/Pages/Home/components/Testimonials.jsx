import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import l from "./../../../assets/user.jpg";
import i from "./../../../assets/user1.jpg";

export default function Testimonials() {
  return (
    <TestimonialContainer>
      <h2>Temoignage</h2>
      <div className="temoignage">
        {/* <Icons>
          <div className="iconCo">
            <span className="fas fa-arrow-left"></span>
          </div>
          <div className="iconCo">
            <span className="fas fa-arrow-right"></span>
          </div>
        </Icons> */}
        <div className="cardC">
          <CardTest className="one">
            <p>
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              maxime exercitationem tempore amet iusto odio. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Deleniti, expedita."
            </p>
            <span>Ahadi Bahiga</span>
            <img src={i} alt="User" />
          </CardTest>
          <CardTest className="two">
            <p>
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              maxime exercitationem tempore amet iusto odio. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Deleniti, expedita."
            </p>
            <span>Ahadi Bahiga</span>
            <img src={l} alt="User" />
          </CardTest>
          <CardTest className="three">
            <p>
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              maxime exercitationem tempore amet iusto odio. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Deleniti, expedita."
            </p>
            <span>Ahadi Bahiga</span>
            <img src={l} alt="User" />
          </CardTest>
          <CardTest className="three">
            <p>
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              maxime exercitationem tempore amet iusto odio. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Deleniti, expedita."
            </p>
            <span>Ahadi Bahiga</span>
            <img src={i} alt="User" />
          </CardTest>
        </div>
      </div>
    </TestimonialContainer>
  );
}

const TestimonialContainer = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
  h2 {
    text-align: center;
    padding-top: 10px;
  }
  .temoignage {
    width: 100%;
  }
  .cardC {
    width: 80%;

    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 850px) {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }
`;

const CardTest = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  margin-right: 5px;

  p {
    width: 75%;
    text-align: center;
    border-right: 2px dashed #df9095;
    padding-right: 5px;
  }

  span {
    font-weight: 700;
    font-style: italic;
    padding-top: 15px;
  }

  img {
    width: 100px;
    height: 100px;
    margin-top: 10px;
    border-radius: 50%;
  }

  @media (max-width: 850px) {
    margin-top: 5px;
    p {
      width: 90%;
    }
    img {
      width: 70px;
      height: 70px;
      margin-top: 5px;
    }
  }
`;

const Icons = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .iconCo {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    background-color: #3333;
  }
`;
