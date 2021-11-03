import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { JobCard } from "../../components";
import Header from "../../components/Header/header";
import { Job } from "../../models";
import { getJobsService } from "../../services";

import { Wrapper } from "./styles";

const Home: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await getJobsService();
      if (response.data) {
        console.log(response.data);

        setJobs(response.data);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Wrapper>
      <Row>
        <Header />
      </Row>
      <Container>
        <Row>
          {jobs?.map((job) => (
            <Col xs>
              <JobCard
                logo={job.logo}
                benefits={job.Benefits}
                jobTitle={job.profession}
                city={job.city}
                salary={job.salary}
                description={job.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Home;
