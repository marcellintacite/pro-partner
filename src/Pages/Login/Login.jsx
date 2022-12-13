import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import styled from "styled-components";
import FormContainer from "../Signup/components/FormContainer";
import { supabase } from "../../lib/api";
import { loginValidation, SignupValidation } from "../Signup/validation";
import { Link, useNavigate } from "react-router-dom";
export default function Login({ isSignedIn }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isSignedIn) {
      navigate("/accueil");
    }
  });
  const [data, setData] = useState({
    mail: "",
    psw: "",
  });
  const [error, setError] = useState(null);
  const [showLoad, setShowLoad] = useState(false);
  const [showPass, setShow] = useState("password");

  const handleEye = () => {
    setShow(!showPass);
  };
  //login

  const handleChange = (e) => {
    const ndata = { ...data, [e.target.name]: e.target.value };
    setData(ndata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = loginValidation(data);
    if (errors.length > 0) {
      setError(errors);
    } else {
      setShowLoad(true);
      const email = data.mail;
      const password = data.psw;
      const { data: res, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.log(error);
        error === "AuthApiError: Invalid login credentials"
          ? setError(["Mot de passe ou email incorrect"])
          : setError([
              "Mot de passe ou email incorrect || verifier votre adresse mail si ce n'est pas encore fait",
            ]);
        setShowLoad(false);
      } else {
        setShowLoad(false);
        navigate("/accueil");
        sessionStorage.setItem("user", JSON.stringify(res.user));
      }
    }
  };
  return (
    <SignupContainer>
      <Navbar />
      <div className="signup">
        <div className="conte">
          <h3>Connexion</h3>
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
              value={data.psw}
              handleChange={handleChange}
            />
            <Button type="submit">
              {!showLoad && "Connexion"}
              {showLoad ? <Load /> : null}
            </Button>
          </form>
          <div className="foot">
            <p>
              Vous n'avez pas de compte ?{" "}
              <Link to="/signup">Inscrivez-vous</Link>
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
        margin-top: 15px;
      }
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
