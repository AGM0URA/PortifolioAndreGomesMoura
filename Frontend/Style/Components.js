import styled from "styled-components";

export const Color = {
  Colors: {
    Red: "hsl(14, 86%, 42%)",
    Green: "hsl(159, 69%, 38%)",
    Rose50: "hsl(20, 50%, 98%)",
    Rose100: "hsl(13, 31%, 94%)",
    Rose300: "hsl(14, 25%, 72%)",
    Rose400: "hsl(7, 20%, 60%)",
    Rose500: "hsl(12, 20%, 44%)",
    Rose900: "hsl(14, 65%, 9%)",
    Branco: "#fff",
    Preto: "#010101",
  },
};


export const Main = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background-color: #f8f9fa;
`;

export const Section = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
`;

export const StyledButton = styled.button`
  background-color: #0d6efd;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0b5ed7;
  }
`;