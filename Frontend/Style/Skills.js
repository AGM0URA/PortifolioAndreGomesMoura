import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Color } from "./Components.js";


export const SectionSkills = styled.section`
  background: ${Color.Colors.background2};
  display:block;
  padding: 80px 20px;
  text-align: center;



  div {
    max-width: 400px;
  }

  h1 {
    color :white;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    margin-left: -32%;
    margin-top: -1%;

    
    @media (max-width: 768px) {
      margin-left: 0px;

    }
}
`;



export const Base = styled.div`
  display: flex;
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 30px;
  margin-left: 110%;
  margin-top: 20%;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
  }

  h4{
    white-space: nowrap;
    margin-top: -20%;
    margin-bottom: 20%;
    font-size: 30px;
    color:${Color.Colors.Primary};
  }


  svg{
    margin-right: 20px;
    font-size: 20px;
    color:${Color.Colors.Primary};


  }


  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .skill-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    font-weight: 500;
    color:${Color.Colors.Primary};
    padding: 8px 12px;
    border-radius: 8px;
    transition: background 0.2s;

    &:hover {
      color:white;
      background: ${Color.Colors.Primary};
      cursor: pointer;

      svg {
      color: white; 
    }
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    h4 {
      font-size: 22px;
    }

    .skill-item {
      font-size: 16px;
    }
  }

`;