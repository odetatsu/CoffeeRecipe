import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet } from "react-router";
import { Suspense } from "react";
import "./styles.css"
import { useNavigate } from 'react-router-dom';

const HomeNabvar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark"  className=" navbar navbar-expand navbar-dark bg-info fixed-top">
        <Container className="container" >
          <Navbar.Brand  onClick={()=>navigate("/" )} ><img className="nav-img" src={window.location.origin + "/drip-glass.png"} alt="Home"/>HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate("/CoffeeBeans" )} ><img className="nav-img2" src={window.location.origin + "/icon_512.png"}  alt="Beans"/>Beans</Nav.Link>
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
