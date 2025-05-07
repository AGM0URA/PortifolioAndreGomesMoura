import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Color } from "./Components.js";


export const SectionSkills = styled.section`
  
  padding: 80px 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  background-color: red;

  div {
    max-width: 400px;
  }

  h1 {
    font-size: 50px;
    font-weight: 600;
    margin-left: -65%;
    margin-top: -3%;
    
    @media (max-width: 768px) {
      margin-left: 0px;

    }
}
`;

export const Titulo = styled.h1`
    color :${Color.Colors.text};
    margin-left: -67%;
    margin-top: -5%;

`;