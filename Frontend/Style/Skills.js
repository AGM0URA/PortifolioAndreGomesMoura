import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Color } from "./Components.js";

export const SectionSkills = styled.section`
  background: ${Color.Colors.background2};
  padding: 80px 20px;
  text-align: center;

  h1 {
    color: white;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 35px;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const AjustarBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const Base = styled.div`
  background-color: white;
  flex: 1 1 320px;   /* Cresce e encolhe, largura base 320px */
  min-width: 280px;
  max-width: 320px;
  min-height: 350px;
  border-radius: 30px;
  padding: 30px 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5%;

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 20%;
    font-size: 20px;
    color: ${Color.Colors.Primary};
  }

  svg {
    margin-right: 20px;
    font-size: 20px;
    color: ${Color.Colors.Primary};
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
    color: ${Color.Colors.Primary};
    padding: 8px 12px;
    border-radius: 8px;
    transition: background 0.2s;

    &:hover {
      color: white;
      background: ${Color.Colors.Primary};
      cursor: pointer;

      svg {
        color: white;
      }
    }
  }

  @media (max-width: 768px) {
    width: 90vw;
    min-height: auto;
    padding: 20px;

    h4 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .skill-item {
      font-size: 16px;
    }
  }
`;
