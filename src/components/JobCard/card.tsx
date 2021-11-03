import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Benefit } from "../../models";
// import {cardStyle}  from './styles';

// import logo from "../../asset/images/logo.svg";
// import { Container } from './styles';

export interface JobCardProps {
  logo: string;
  benefits: Benefit[];
  jobTitle: string;
  city: string;
  description: string;
  salary: string | number;
}

const JobCard: React.FC<JobCardProps> = ({
  logo,
  jobTitle,
  salary,
  city,
  description,
  benefits,
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Row>
        <Col>
          <Card.Img variant="top" src={logo} />
        </Col>
        <Col>
          <p>Salário: {salary}</p>
        </Col>
      </Row>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <h3> {jobTitle} </h3>
            </Col>
          </Row>
          <Row>
            <Col>{city}</Col>
          </Row>
        </Card.Title>
        <Row>
          <Col>
            <Card.Text><p>{description}</p></Card.Text>
          </Col>
        </Row>
        <Card.Text>
          <Row>
            <Col>{benefits.map((b) => b.name)}</Col>
          </Row>
        </Card.Text>
        <Button variant="primary">Ir para vaga</Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
