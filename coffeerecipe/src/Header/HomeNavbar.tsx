import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet } from "react-router";
import { Suspense } from "react";

const HomeNabvar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/CoffeeBeans">豆情報</Nav.Link>
            <Nav.Link href="/addrecipe">レシピ追加</Nav.Link>
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
