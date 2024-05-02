import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { Facebook, Instagram, Tiktok, TwitterX } from 'react-bootstrap-icons';

import logo from '../assets/img/logo.png';

import '../assets/css/navbar.css';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) { setScrolled(true) } 
            else { setScrolled(false) }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

	const handleAuth = async () => {
		if (auth?.currentUser) {
			try {
				await signOut(auth);
				window.location = "/";
			} catch (err) {
				console.error(err);
			}
		} else {
			window.location = "/login";
		}
	};

    return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="/">
					<img className='rounded-circle' src={logo} alt='Logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/" className={["", "/"].includes(window.location.pathname) ? "active navbar-link" : "navbar-link"}>Home</Nav.Link>
						<Nav.Link href="/products" className={["/products", "/products/"].includes(window.location.pathname) ? "active navbar-link" : "navbar-link"}>Products</Nav.Link>
						<Nav.Link href="/booking" className={["/booking", "/booking/"].includes(window.location.pathname) ? "active navbar-link" : "navbar-link"}>Book Appointment</Nav.Link>
						<Nav.Link className="navbar-link" onClick={handleAuth}>{auth?.currentUser ? "Logout" : "Login"}</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="https://www.instagram.com/laposhbeautysupplyandsalon/"><Instagram className='navbar-icon' color='white' /></a>
                            <a href="https://www.tiktok.com/@laposh.beauty.sho"><Tiktok className='navbar-icon' color='white' /></a>
                            <a href="https://twitter.com/laposhbeautys"><TwitterX className='navbar-icon' color='white' /></a>
                            <a href="https://www.facebook.com/profile.php?id=61558260822114"><Facebook className='navbar-icon' color='white' /></a>
						</div>
						<button onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}><span>Contact Us</span></button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
  	);
}
