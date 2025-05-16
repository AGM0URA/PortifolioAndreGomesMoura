import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'


export const Color = {
  Colors: {
    Primary: "#4ADE80",       // Cor principal (verde claro moderno)
    background: "radial-gradient(circle, #FFFFFF 0%, #F1F5F9 60%, #D1D5DB 100%)", // Centro branco, bordas levemente mais escuras
    background2: "linear-gradient(135deg, #4ADE80 0%, #34D399 50%, #10B981 100%)",
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
  font-size: 250%;
  fill: ${Color.Colors.text};
}

  @media (max-width: 768px) {
  svg{
    font-size: 150%;
    fill: ${Color.Colors.text};
  }
  }

`;



export const Logo = styled.h1`
display: flex;
justify-content: center;
align-items: center;
color: ${Color.Colors.text};
font-size: 200%;
gap: -30px;

svg{
  font-size: 50px;
}

  @media (max-width: 768px) {
    font-size: 100%;

    svg{
       font-size: 30px;
    }

  }
`;

export const Main = styled.main`
min-height: 100vh;
background-color: ${Color.Colors.background};
`;

export const Section = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6%;
  padding-bottom:10% ;
  flex-direction: row;
  margin-top: -4%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-top: -13%;
  }

  div {
    max-width: 400px;
  }

  h1 {
    font-size: 100px;
    font-weight: 800;
    margin-top: -10px;
    margin-left: -40%;
  
    @media (max-width: 768px) {
      margin-left: 0px;

    }

  }

  p {
    font-size: 20px;
    margin: 0;
    margin-left: -40%;

    @media (max-width: 768px) {
      margin-left: 0px;

    }
  }

  p.bio {
    font-size: 15px;
    color: ${Color.Colors.textSecondary};
    margin-top: 20px;
    margin-left: -40%;

    @media (max-width: 768px) {
      margin-left: 0px;

    }

    
  }

  h1:hover,p:hover {
    transform: scale(1.01);
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
    width: 250px;
    height: 250px;
    border-radius: 30px;

  }

  &:hover {
    transform: scale(1.01);
}



`;

export const MyImg = styled.img`
   max-width: 400px;
   max-height: 400px; 
   border-bottom-right-radius: 130px;


   @media (max-width: 768px) {
    margin-left: 0px;
    border-radius: 30px;
    width: 250px;
    height: 250px;
    

  }



`;




export const StyledButton  = styled.button`
display: flex;
width: 300px;
height: 70px;
gap: 10px;
background-color:${Color.Colors.Primary};
color: white;
padding: 0.5rem 1rem;
border: none;
border-radius: 0.25rem;
transition: background 0.3s ease;
margin-left: -40%;
justify-content: center;
align-items: center;
font-size: 25px;
border-radius: 30px;


@media (max-width: 768px) {
  
   margin-left: auto;
   margin-right: auto;

}

&:hover {
  background-color:${Color.Colors.accent};
  transform: scale(1.01);
}
`;
