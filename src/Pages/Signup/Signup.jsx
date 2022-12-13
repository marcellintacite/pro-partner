import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import FormContainer from "./components/FormContainer";
import { SignupValidation } from "./validation";
import { supabase } from "./../../lib/api";

export default function Signup() {
  const navigate = useNavigate();
  const [showPass, setShow] = useState("password");
  const [data, setData] = useState({
    mail: "",
    psw: "",
    vpsw: "",
  });
  const [error, setError] = useState([]);
  const [showLoad, setShowLoad] = useState(false);
  const navigation = useNavigate();

  const handleEye = () => {
    setShow(!showPass);
  };

  const handleChange = (e) => {
    const ndata = { ...data, [e.target.name]: e.target.value };
    setData(ndata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = SignupValidation(data);
    if (errors.length > 0) {
      setError(errors);
    } else {
      setShowLoad(true);
      const email = data.mail;
      const password = data.psw;
      const { data: res, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setShowLoad(false);
        error === "AuthApiError: Invalid login credentials"
          ? setError(["Mot de passe ou email incorrect"])
          : setError([
              "une erreur s'est produite, verifiez si votre mot de passe a plus de 6 caractères",
            ]);
        console.log(errors);
      } else {
        setShowLoad(false);
        localStorage.getItem("mail", res.user.email);
        navigate("/verification");
        console.log(res);
      }
    }
  };

  return (
    <SignupContainer>
      <Navbar />
      <div className="signup">
        <div className="conte">
          <h3>Inscription</h3>
          {error
            ? error.map((i) => (
                <p className="error" key={i}>
                  {i}
                </p>
              ))
            : null}

          <form onSubmit={(e) => handleSubmit(e)}>
            <FormContainer
              nom="mail"
              LeftIcon="fas fa-envelope"
              label="Adresse mail :"
              type="email"
              min={6}
              required
              placeholder="ad@gmail.com"
              value={data.mail}
              handleChange={handleChange}
            />
            <FormContainer
              nom="psw"
              LeftIcon="fas fa-lock"
              label="Mot de passe :"
              typee={showPass ? "password" : "text"}
              placeholder="xxxxxxxxxxx"
              handleEye={handleEye}
              required
              min={6}
              value={data.psw}
              handleChange={handleChange}
            />
            <FormContainer
              nom="vpsw"
              LeftIcon="fas fa-lock"
              label="Confirmation mot de passe :"
              typee={showPass ? "password" : "text"}
              placeholder="xxxxxxxxxxx"
              handleEye={handleEye}
              required
              min={6}
              value={data.vpsw}
              handleChange={handleChange}
            />
            <Button type="submit">
              {!showLoad && "Inscription"}
              {showLoad ? <Load /> : null}
            </Button>
          </form>
          <div className="foot">
            <p>
              Avez-vous déjà un compte ? <Link to="/login">Connectez-vous</Link>
            </p>
          </div>
        </div>
      </div>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
  width: 100%;
  height: 100vh;
  .signup {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbf3f3;
    padding-bottom: 20px;
    padding-top: 10px;
    .conte {
      width: 350px;

      background-color: #fff;
      padding: 15px;
      h3 {
        text-align: center;
        padding: 10px;
        font-size: 24px;
      }

      .error {
        width: 90%;
        margin: auto;
        padding: 8px;
        color: #ff5353;

        @media (max-width: 380px) {
          width: 98%;
        }
      }

      @media (max-width: 380px) {
        width: 90%;
        margin-top: 30px;
      }
    }
  }
  @media (max-width: 380px) {
    .signup {
      padding-top: 20px;
    }
  }
  .foot {
    width: 90%;
    margin: auto;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: none;
  background-color: #351d25;
  color: #fff;
  margin-top: 18px;
  margin-left: 15px;
  cursor: pointer;
`;

const Load = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #fff;
  border-bottom: 2px dashed #fff;
  border-right: 2px dashed #fff;
  animation: circle 0.9s ease-in infinite;

  @keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    40% {
      border-left: 2px dashed #fff;
    }
    70% {
      border-top: 2px dashed #fff;
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
