import React from "react";
import {
  NavBar,
  Logo,
  DivSocial,
  Moldura,
  MyImg,
  Main,
  Section,
  StyledButton,
  Color
} from "../Style/Components";
import {
  SectionSkills,
  Base,
  AjustarBase

} from "../Style/Skills"

import Particulas from "../Style/Particle"


import { MdOutlineCircle } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";



const Home = () => {
  return (
    <>
      <NavBar className="navbar navbar-expand-lg">
        <Logo className="navbar-brand">AGM</Logo>
        <DivSocial className="d-flex gap-3">
          <a href="https://github.com/AGM0URA" ><FaGithub /></a>
          <a href="https://www.linkedin.com/in/andr%C3%A9gomesmoura/" ><FaLinkedin /></a>
        </DivSocial>
      </NavBar>

      <Main className="container-fluid py-5">
        <div style={{ position: "relative" }}>
          <Particulas />

          <Section className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <p>Olá, eu sou</p>
              <h1>André</h1>
              <p>Gomes Moura</p>
              <p className="bio">
                Olá! Me chamo André Gomes Moura, sou um desenvolvedor web em constante evolução. Este é o meu portfólio, feito para mostrar meu trabalho e minha jornada. Espero que gostem e aproveitem para explorar tudo por aqui!
              </p>
              <StyledButton className="mt-4">Saiba mais</StyledButton>
            </div>

            <div className="col-md-5 d-flex justify-content-center mt-4 mt-md-0">
              <Moldura>
                <MyImg src="/images/eu1.png" alt="Minha imagem" />
              </Moldura>
            </div>
          </Section>
        </div>
        <SectionSkills className="row justify-content-center align-items-center">
          <h1>Skills Front-End</h1>
          <AjustarBase className="col-md-5 d-flex flex-column flex-md-row  mt-4 mt-md-0  align-items-center " >
            <Base>
              <h4>Linguagens e Tecnologias</h4>
              <div className="skills-list">
                <div className="skill-item"><MdOutlineCircle />HTML5</div>
                <div className="skill-item"><MdOutlineCircle />CSS</div>
                <div className="skill-item"><MdOutlineCircle />JavaScript</div>
              </div>
            </Base>
            <Base>
              <h4>Frameworks e Bibliotecas</h4>
              <div className="skills-list">
                <div className="skill-item"><MdOutlineCircle />React.js</div>
                <div className="skill-item"><MdOutlineCircle />Bootstrap</div>
                <div className="skill-item"><MdOutlineCircle />Styled Components</div>
              </div>
            </Base>
            <Base>
              <h4>Ferramentas e Práticas</h4>
              <div className="skills-list">
                <div className="skill-item"><MdOutlineCircle /> Git/GitHub</div>
                <div className="skill-item"><MdOutlineCircle />Consumo de APIs REST </div>
                <div className="skill-item"><MdOutlineCircle />Responsividade</div>
              </div>
            </Base>
          </AjustarBase>

        </SectionSkills>
      </Main>


      <footer className="text-center py-3 bg-light text-muted">
        <p>&copy; 2025 - Todos os direitos reservados</p>
      </footer>
    </>
  );
};

export default Home;
