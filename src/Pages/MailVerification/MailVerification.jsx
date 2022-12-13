import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import Lottie from "lottie-react";
import success from "./../../assets/lotties/congratulation-success-batch.json";

export default function MailVerification({ user }) {
  console.log(user);
  return (
    <Verification>
      <Navbar />
      <div className="verfication_card">
        <div className="content">
          <Lottie
            animationData={success}
            loop={true}
            style={{ width: 150, height: 150 }}
          />
          <h3>Félicitation</h3>
          <div className="line"></div>
          <p>
            Pour terminer avec votre inscription, veuillez verifier votre boite
            mail et terminer avec la confirmation.
          </p>
        </div>
      </div>
    </Verification>
  );
}

const Verification = styled.div`
  width: 100%;
  height: 100vh;
  .verfication_card {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      width: 300px;
      background: #fbf3f3;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        text-align: center;
      }
    }
  }
`;
