import React from "react";
import styled from "@emotion/styled";


const Title = styled.div``;
const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const Home = () => {
  return (
    <Content>
      <Title>
        <h2>Bienvenido a Gordian Knot</h2>
      </Title>
      <p>
        Este es un proyecto en desarrollo. Es una webapp para gestionar pequeñas
        empresas y equipos.
      </p>
      <p>
        Si quieres saber más contactame por{" "}
        <a href="https://linkedin.com/in/joaoemmerich">LinkedIn</a>
      </p>
      <p>João Emmerich</p>

      
    </Content>
  );
};

export default Home;
