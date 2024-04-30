import { Container, Row, Col } from 'react-bootstrap';
import { Instagram, Tiktok } from 'react-bootstrap-icons';

import logo from '../assets/img/logo.png';

import '../assets/css/footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <a href='/'><img className='rounded-circle' src={logo} alt='Logo' /></a>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.instagram.com/laposhbeautysupplyandsalon/"><Instagram className='navbar-icon' color='white' /></a>
                            <a href="https://www.tiktok.com/@laposhbeautysupply"><Tiktok className='navbar-icon' color='white' /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
