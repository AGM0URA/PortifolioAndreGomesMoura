import React, { useEffect, useState } from "react";
import {
    Main,Section,StyledButton
} from "../Style/Components"

const Home = () =>{

    return(
        <>
              <header className="bg-primary text-white p-4">
        <h1 className="text-center">Meu Portfólio</h1>
      </header>

      <Main>
        <Section className="container">
          <h2 className="mb-3">Sobre Mim</h2>
          <p>Sou um desenvolvedor apaixonado por criar interfaces modernas e funcionais.</p>

          <StyledButton className="mt-3">Saiba Mais</StyledButton>
        </Section>
      </Main>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 - Todos os direitos reservados</p>
      </footer>
        </>
    )
} 

export default Home