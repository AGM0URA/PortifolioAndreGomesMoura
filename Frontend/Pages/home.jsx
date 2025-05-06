import React from "react";
import {
  NavBar,
  Logo,
  DivSocial,
  Moldura,
  MyImg,
  Main,
  Section,
  StyledButton
} from "../Style/Components";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Home = () => {
  return (
    <>
      <NavBar className="navbar navbar-expand-lg">
        <Logo className="navbar-brand">AGM</Logo>
        <DivSocial className="d-flex gap-3">
          <FaGithub />
          <FaLinkedin />
        </DivSocial>
      </NavBar>

      <Main className="container-fluid py-5">
        <Section className="row justify-content-center align-items-center">
          <div className="col-md-5">
            <p>Olá, eu sou</p>
            <h1>André</h1>
            <p>Gomes Moura</p>
            <p className="bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus a turpis at congue. Integer vehicula leo eleifend maximus interdum. Duis semper, mauris nec semper.
            </p>

            <StyledButton className="mt-4">Saiba mais</StyledButton>
          </div>

          <div className="col-md-5 d-flex justify-content-center mt-4 mt-md-0">
            <Moldura>
              <MyImg src="Frontend\Public\images\eu1.png" alt="Minha imagem" />
            </Moldura>
          </div>
        </Section>
      </Main>

      <footer className="text-center py-3 bg-light text-muted">
        <p>&copy; 2025 - Todos os direitos reservados</p>
      </footer>
    </>
  );
};

export default Home;
