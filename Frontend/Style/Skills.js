import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Color } from "./Components.js";


export const SectionSkills = styled.section`
  display:block;
  padding: 80px 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  background-color: red;

  div {
    max-width: 400px;
  }

  h1 {
    color :${Color.Colors.text};
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    margin-left: -32%;
    margin-top: -4%;

    
    @media (max-width: 768px) {
      margin-left: 0px;

    }
}
`;



export const Base = styled.div`
  display: flex;
  background-color: ${Color.Colors.Primary};
  width: 400px;
  height: 400px;
  border-top-right-radius: 130px;
  border-bottom-left-radius: 130px;
  margin-left: 300px;
  margin-top: 30%;

  flex-direction: column;
  justify-content: center;

  h4{
    white-space: nowrap;
  
    margin-bottom: 20%;
    font-size: 30px;
  }

  p{
    margin-left: -50%;
  }





  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 10%;
    max-width: 250px;
    height: 250px;
    border-radius: 30px;

  }

  &:hover {
  
}

`;