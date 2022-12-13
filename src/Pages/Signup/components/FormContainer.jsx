import React from "react";
import styled from "styled-components";

export default function FormContainer({
  nom,
  handleChange,
  LeftIcon,
  label,
  typee,
  handleEye,
  ...rest
}) {
  return (
    <FormContent className="form_container">
      <label htmlFor={nom}>{label}</label>
      <div className="input_group">
        {LeftIcon && <span className={LeftIcon}></span>}
        <input
          type={typee ? typee : "text"}
          name={nom}
          id=""
          onChange={(e) => handleChange(e)}
          autoComplete={false}
          {...rest}
        />
        {typee === "password" && (
          <span className="fas fa-eye right" onClick={handleEye}></span>
        )}
        {typee === "text" && (nom === "psw" || nom === "vpsw") && (
          <span className="fas fa-eye-slash right" onClick={handleEye}></span>
        )}
      </div>
    </FormContent>
  );
}

const FormContent = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 9px;

  .input_group {
    border: 1px solid #3335;
    height: 40px;
    display: flex;
    margin-top: 2px;
    align-items: center;

    span {
      padding-left: 10px;
      color: #333;
    }
    .right {
      padding-right: 10px;
      color: #3333;

      :hover {
        color: #333;
        transition: all 0.1s ease-in;
        cursor: pointer;
      }
    }
    input {
      flex: 1;
      height: 100%;
      padding-left: 10px;
      border: none;
      outline: none;
    }
  }
  @media (max-width: 380px) {
    width: 98%;
  }
`;
