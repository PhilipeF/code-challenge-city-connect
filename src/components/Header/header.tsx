import React from "react";
import {
  Button,
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import logo from "../../asset/images/logoCityc.png";
// import { ButtonsContainer } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xs md={3}>
          <img src={logo} alt="logoCityConnect" />
        </Col>
        <Col
          xs
          md={{ span: 2, offset: 2 }}
          className="align-self-center align-items-center"
        >
          <p className="text-white">Precisa de ajuda</p>
        </Col>
        <Col
          xs
          md={{ span: 2, offset: 0 }}
          className="align-self-center align-items-center"
        >
          <Button> Entrar </Button>
        </Col>
        <Col
          xs
          md={{ span: 3, offset: 0 }}
          className="align-self-center align-items-center"
        >
          <Button variant="secondary"> Cadastrar na Vaga </Button>
        </Col>
      </Row>
      <Row>
        <Col xs md={{ span: 5, offset: 4 }}>
          <p className="text-white">
            Procure uma <b>oportunidade de emprego </b>
          </p>
          <InputGroup className="mb-3" align-itens='align-self-center align-items-center'>
            <FormControl
              placeholder="Digite Cargo, empresa ou localização"
              
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>
      {/* <ButtonsContainer> */}
      {/* </ButtonsContainer> */}
    </Container>
  );
};

export default Header;
