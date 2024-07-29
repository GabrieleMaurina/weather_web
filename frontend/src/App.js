import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

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

const Weather = () => (
  <div className="text-center">
    <h2>Weather</h2>
  </div>
);

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
