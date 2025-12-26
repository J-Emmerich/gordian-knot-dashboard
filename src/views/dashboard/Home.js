import React from "react";
import styled from "@emotion/styled";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

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

      <hr />
      <Title>
        <h2>Roadmap</h2>
      </Title>
      <List>
        <ListItem>
          <ListItemIcon>
            <Checkbox disabled checked={true} />
          </ListItemIcon>
          <ListItemText>MVP</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox disabled  />
          </ListItemIcon>
          <ListItemText>User Roles</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox disabled />
          </ListItemIcon>
          <ListItemText>
            Gestión de Usuarios / Añadir Colaboradores
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox disabled />
          </ListItemIcon>
          <ListItemText>Dashboard con estadísticas</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox disabled />
          </ListItemIcon>
          <ListItemText>
            Subir ficheros / Gestionar contratos de los clientes
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox disabled checked={true}/>
          </ListItemIcon>
          <ListItemText>Validación de los formularios</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox disabled />
          </ListItemIcon>
          <ListItemText>Notificaciones con Socket.IO</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox disabled />
          </ListItemIcon>
          <ListItemText>
            Establecer tema front-end / Añadir tema oscuro
          </ListItemText>
        </ListItem>
      </List>
    </Content>
  );
};

export default Home;
