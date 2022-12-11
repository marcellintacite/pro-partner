import styled, { css } from "styled-components";

const Button = styled.a`
  padding: 10px 8px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#62ADC2" : "#351D25")};
  border-radius: 5px;
`;
export default Button;
