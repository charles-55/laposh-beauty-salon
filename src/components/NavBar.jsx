import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Instagram, Tiktok } from 'react-bootstrap-icons';

import logo from '../assets/img/logo.png';

import '../assets/css/navbar.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) { setScrolled(true) } 
            else { setScrolled(false) }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="#home">
					<img className='rounded-circle' src={logo} alt='Logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
						<Nav.Link href="#services" className={activeLink === "services" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("services")}>Services</Nav.Link>
						<Nav.Link href="#products" className={activeLink === "products" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("products")}>Products</Nav.Link>
						<Nav.Link href="#contact" className={activeLink === "contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("contact")}>Contact Us</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="https://www.instagram.com/laposhbeautysupplyandsalon/"><Instagram className='navbar-icon' color='white' /></a>
                            <a href="https://www.tiktok.com/@laposhbeautysupply"><Tiktok className='navbar-icon' color='white' /></a>
						</div>
						<button onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}><span>Let's Connect</span></button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
  	);
}
