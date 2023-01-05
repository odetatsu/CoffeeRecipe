import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet } from "react-router";
import { Suspense } from "react";
import "./styles.css"

const HomeNabvar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container >
          <Navbar.Brand href="/" ><img className="nav-img" src={window.location.origin + "/drip-glass.png"} alt="Home"/>HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/CoffeeBeans" ><img className="nav-img2" src={window.location.origin + "/icon_512.png"}  alt="Beans"/>Beans</Nav.Link>
            <Nav.Link href="/addrecipe"><img className="nav-img2" src={window.location.origin + "/plus.png"} alt="Add"/>Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomeNabvar;
