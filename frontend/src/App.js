import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import getWeather from "./api";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h2>Home Page</h2>
      <br />
      <br />
      <Button
        className="text-center"
        variant="outline-primary"
        size="lg"
        onClick={() => navigate("/weather")}
      >
        Go to Weather
      </Button>
    </div>
  );
};

const About = () => (
  <div className="text-center">
    <h2>This Web App is made using Flask, React, and Bootstrap.</h2>
  </div>
);

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather(setWeather);
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="text-center">
        <h2>Weather</h2>
      </div>
      <br />
      <br />
      <Container>
        <Row className="justify-content-md-center align-self-center">
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Title>
                <h2>{weather.address}</h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h3>Latitude: {weather.lat}</h3>
                <h3>Longitude: {weather.lon}</h3>
              </Card.Subtitle>
              <ListGroup>
                <ListGroup.Item variant="danger">
                  Max Temperature: {weather.max_temp}°F
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  Current Temperature: {weather.current_temp}°F
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                  Min Temperature: {weather.min_temp}°F
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/weather">
              Weather
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
