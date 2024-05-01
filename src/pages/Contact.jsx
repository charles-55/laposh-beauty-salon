import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { CalendarWeek, Clock, EnvelopeAt, Facebook, Instagram, Telephone, Tiktok, TwitterX } from 'react-bootstrap-icons';

import 'animate.css';
import '../assets/css/contact.css';

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: ""
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        setTimeout(() => {
            setButtonText("Send");
            setStatus({ success: false, message: "Sorry, contact feature still in progress. Try again later." });
        }, 3000);
        
        // setButtonText("Sending...");
        // let response = await fetch("http://localhost:5000/contact", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "Application/json;charset=utf-8"
        //     },
        //     body: JSON.stringify(formDetails)
        // });
        // setButtonText("Send");
        // let result = response.json();
        // setFormDetails(formInitialDetails);
        // if (result.code === 200) {
        //     setStatus({ success: true, message: "Message sent successfully!" });
        // }
        // else {
        //     setStatus({ success: false, message: "Message failed to send, try again later!" });
        // }
    };

    return (
        <section className='contact' id='connect'>
            <h2>Contact Us</h2>
            <TrackVisibility>
                <div className="animate__animated animate__slideInUp animate__faster">
                    <Row>
                        <Col>
                            <h3>Our Info</h3>
                            <p>
                                <strong>La'Posh Beauty Supply & Salon</strong><br />
                                222 58 Ave SW Suite 100,<br />
                                Calgary, AB T2H 2S3.
                            </p>
                            <p><a href='mailto:laposhbeautyinc@gmail.com'><EnvelopeAt /> laposhbeautyinc@gmail.com</a></p>
                            <p><a href='tel:+14036402548'><Telephone /> (403) 640-2548</a></p>
                        </Col>
                        <Col>
                            <h3>Hours of Operation</h3>
                            <table width={'100%'}>
                                <tbody>
                                    <tr>
                                        <td><CalendarWeek /> Moday - Saturday</td>
                                        <td><Clock /> 9AM - 8PM</td>
                                    </tr>
                                    <tr>
                                        <td><CalendarWeek /> Sunday</td>
                                        <td><Clock /> Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>

                        <Col>
                            <h3>Our Platforms</h3>
                            <p><a href="https://www.instagram.com/laposhbeautysupplyandsalon/"><Instagram /> Instagram</a></p>
                            <p><a href="https://www.tiktok.com/@laposh.beauty.sho"><Tiktok /> TikTok</a></p>
                            <p><a href="https://twitter.com/laposhbeautys"><TwitterX className='navbar-icon' color='white' /> Twitter</a></p>
                            <p><a href="https://www.facebook.com/profile.php?id=61558260822114"><Facebook className='navbar-icon' color='white' /> Facebook</a></p>
                        </Col>
                    </Row>
                </div>
            </TrackVisibility>

            <h3>Leave a message</h3>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col sm={6} className='px-1'>
                        <TrackVisibility>
                            <div className="animate__animated animate__slideInLeft animate__faster">
                                <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </div>
                        </TrackVisibility>
                    </Col>
                    <Col sm={6} className='px-1'>
                        <TrackVisibility>
                            <div className="animate__animated animate__slideInRight animate__faster">
                                <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                            </div>
                        </TrackVisibility>
                    </Col>
                    <Col sm={6} className='px-1'>
                        <TrackVisibility>
                            <div className="animate__animated animate__slideInLeft animate__faster">
                                <input type='email' value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </div>
                        </TrackVisibility>
                    </Col>
                    <Col sm={6} className='px-1'>
                        <TrackVisibility>
                            <div className="animate__animated animate__slideInRight animate__faster">
                                <input type='tel' value={formDetails.phoneNumber} placeholder='Phone Number' onChange={(e) => onFormUpdate('phoneNumber', e.target.value)} />
                            </div>
                        </TrackVisibility>
                    </Col>
                    <Col className='px-1'>
                        <TrackVisibility>
                            <div className="animate__animated animate__slideInUp animate__faster">
                                <textarea row='15' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} />

                                {
                                    status.message &&
                                    <p className={(status.success === false) ? "danger" : "success"}>{status.message}</p>
                                }

                                <div style={{'textAlign': 'center'}}>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </div>
                            </div>
                        </TrackVisibility>
                    </Col>
                </Row>
            </form>
        </section>
    );
}