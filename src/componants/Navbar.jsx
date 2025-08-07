import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  blogIcon from "../assets/myLogo.png";
import '../styles/Navbar.css'

const MyNavbar = () => {
  return (
   <Navbar expand="lg" className="navbar bg-body-tertiary" sticky='top'>
  <Container className='container'>
    <Navbar.Brand href="/">
      <img src={blogIcon} alt="Logo" style={{ width: "100px" }} />
    </Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <div className="navbar-links">
        <Nav className="me-auto d-flex align-items-center">
          <Nav.Link href="/">Accueil</Nav.Link>
          <Nav.Link href="/articles">Toutes les articles</Nav.Link>
          <Nav.Link href="/publierArticle">Publier un article</Nav.Link>
        </Nav>

        <ul className="wrapper">
          <li className="icon facebook"><span className="tooltip">Facebook</span><i className="fab fa-facebook-f"></i></li>
          <li className="icon tiktok"><span className="tooltip">TikTok</span><i class="fa-brands fa-tiktok"></i></li>
          <li className="icon instagram"><span className="tooltip">Instagram</span><i className="fab fa-instagram"></i></li>
        </ul>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

  )
}

export default MyNavbar
