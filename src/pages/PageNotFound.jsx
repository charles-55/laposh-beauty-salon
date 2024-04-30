import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import lostImg from '../assets/img/lost2.png';

import '../assets/css/error.css';

export const PageNotFound = () => {
    return (
        <div className="mt-5 error-page">
            <Row className="align-items-center">
                <Col xs={7} md={7} xl={7}>
                    <h1><strong>PAGE NOT FOUND!!!</strong></h1>
                    <p>We can't seem to find the page you're looking for.</p>
                    <Button href="/">Back to Home</Button>
                </Col>
                <Col xs={4} md={3} xl={3}>
                    <img src={lostImg} alt="Lost" />
                </Col>
            </Row>
        </div>
    );
}
