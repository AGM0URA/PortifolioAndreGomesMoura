import styled from "styled-components";



export const Color = {
  Colors: {
    Primary: "#4ADE80",       // Cor principal (verde claro moderno)
    background: "#F8FAF9",    // Fundo claro
    text: "#1E293B",          // Texto principal
    textSecondary: "#94A3B8", // Texto secundário
    accent: "#065F46",        // Detalhes/hover/botões escuros
  },
};


export const NavBar = styled.header`
height: 10vh;
display: flex;
justify-content: space-between; 
align-items: center;
background-color: ${Color.Colors.Primary};
padding: 0 5vh;
`;


export const DivSocial = styled.div`
  display: flex;
  gap: 20px;

svg{
  font-size: 150%;
  fill: ${Color.Colors.text};
}

`;



export const Logo = styled.h1`
color: ${Color.Colors.text};
font-size: 200%;
`;

export const Main = styled.main`
min-height: 100vh;
background-color: ${Color.Colors.background};
`;

export const Section = styled.section`
  background: white;

  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6%; 
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  div {
    max-width: 400px;
  }

  h1 {
    font-size: 100px;
    font-weight: 800;
    margin-top: -10px;
    margin-right: 20%;
  }

  p {
    font-size: 20px;
    margin: 0;
    margin-right: 20%;
  }

  p.bio {
    font-size: 15px;
    color: ${Color.Colors.textSecondary};
    margin-top: 20px;
    margin-right: 20%;
  }
`;


export const Moldura = styled.div`
  display: flex;
  background-color: ${Color.Colors.Primary};
  width: 400px;
  height: 400px;
  border-top-left-radius: 130px;
  border-bottom-right-radius: 130px;
  margin-left: 300px;

  align-items: center;
  justify-content: center;


  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 10%;
    width: 300px;
    height: 300px;

  }



`;

export const MyImg = styled.img`
   max-width: 200px;
   max-height: 200px; 
   border-radius: 30px;






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
