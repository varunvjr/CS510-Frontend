import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Nav, NavItem } from "react-bootstrap";
import Search from "./Search";
import Houses from "./Houses";
import Details from "./Details";
function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <h1>Exercise 03</h1>
          <Container>
            <Nav
              className="navContainer navbar navbar-dark bg-light"
              style={{ backgroundColor: "white" }}
            >
              <NavItem className="nav-linkk">
                {" "}
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </NavItem>
              <NavItem className="nav-linkk">
                {" "}
                <Link className="nav-link" to="/search">
                  Search
                </Link>{" "}
              </NavItem>
              <NavItem className="nav-linkk">
                {" "}
                <Link className="nav-link" to="/houses">
                  Houses
                </Link>
              </NavItem>
            </Nav>
          </Container>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/houses" component={Houses} />
          <Route path="/details" component={Details} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
