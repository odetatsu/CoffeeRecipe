import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet } from "react-router";
import { Suspense } from "react";
import "./styles.css"
import { useNavigate } from 'react-router-dom';

const HomeNabvar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark"  className="  navbar-dark bg-info fixed-top">
        <Container className="container" >
          <Navbar.Brand  onClick={()=>navigate("/" )} ><img className="nav-img" src={window.location.origin + "/BRdrop.png"} alt="Home"/>HOME</Navbar.Brand>
          <Nav className="me-auto nav-child">
            <Nav.Link onClick={()=>navigate("/CoffeeBeans" )} ><img className="nav-img2" src={window.location.origin + "/materials.png"}  alt="Material"/>Material</Nav.Link>
            <Nav.Link onClick={()=>navigate("/gears" )} className="nav-links" ><img className="nav-img2" src={window.location.origin + "/kettle.png"}  alt="gear"/>Gear</Nav.Link>
            <Nav.Link onClick={()=>navigate("/brewed" )} ><img className="nav-img2" src={window.location.origin + "/mag.png"}  alt="brewed"/>Brewed</Nav.Link>
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
