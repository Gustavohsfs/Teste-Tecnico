import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import aws from "../assets/img/AWS.svg";
import angular from "../assets/img/AngularJS.svg";
import html5 from "../assets/img/html5.png";
import javascript from "../assets/img/javascript.svg";
import python from "../assets/img/Python.png";
import react from "../assets/img/react.svg";
import node from "../assets/img/nodejs.svg";
import github from "../assets/img/github.png";
import csharp from "../assets/img/CSHARP.svg";

const Home = () => {
  return (
    <>
      <div className="fundo">
        <section className="tela">
          <Container maxWidth="lg">
            <h1 className="TituloTopo">
              <img className="imagem" src={github} width="50" alt="github" />{" "}
              Procurando Vagas Programador? <br></br> Selecione sua
              especialidade
            </h1>
            <div className="grid">
              <div className="box1">
                <Typography
                  align="center"
                  variant="h4"
                  component="h2"
                  mt={5}
                  mb={2}
                >
                  Front-End
                </Typography>
                <p>
                  Você é Programador Front-End? <br></br>
                  &nbsp;Está procurando uma vaga de emprego, consulte aqui as
                  melhores oportunidades no GitHub e garanta seu espaço no mundo
                  da programação!
                </p>
                <div className="button">
                  <Link to="/front">
                    <Button variant="contained" color="primary">
                      Vagas Front-End
                    </Button>
                  </Link>
                </div>
                <div className="imagens">
                  <img
                    className="imagem"
                    src={angular}
                    width="90"
                    alt="angular"
                  />
                  <img className="imagem" src={html5} width="60" alt="html5" />
                  <img className="imagem" src={react} width="75" alt="react" />
                  <img
                    className="imagem"
                    src={javascript}
                    width="40"
                    alt="javascript"
                  />
                </div>
              </div>
              <div className="box2">
                <Typography
                  align="center"
                  variant="h4"
                  component="h2"
                  mt={5}
                  mb={2}
                >
                  Back-End
                </Typography>
                <p>
                  Programadores Back-End <br></br>
                  &nbsp;As vagas de emprego do GitHub lhe aguardam, garanta já
                  uma oportunidade em grandes empresas do mundo da Tecnologia,
                  acesse!
                </p>
                <div className="button">
                  <Link to="/back">
                    <Button variant="contained" color="primary">
                      Vagas Back-End
                    </Button>
                  </Link>
                </div>
                <div className="imagens">
                  <img className="imagem" src={aws} width="40" alt="AWS" />
                  <img className="imagem" src={node} width="90" alt="node" />
                  <img className="imagem" src={python} width="60" alt="react" />
                  <img
                    className="imagem"
                    src={csharp}
                    width="50"
                    alt="github"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Home;
