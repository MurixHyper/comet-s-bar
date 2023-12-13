import React from "react";
import { Form, Button } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () =>{
    //const myFormRef=useRef(null);
    return(
        <Form className="contactform-form">
            <h2 className="contactform-header">Contact Us:</h2>
            <div className="contactform-main">
                <div className="contactform-left-part">
                    <Form.Group controlId="formName" className="contactform-group">
                        <Form.Label className="contactform-group-text">Name</Form.Label>
                        <Form.Control className="contactform-group-input" type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="contactform-group">
                        <Form.Label className="contactform-group-text">Email</Form.Label>
                        <Form.Control className="contactform-group-input" type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="contactform-group">
                        <Form.Label className="contactform-group-text">Phone</Form.Label>
                        <Form.Control className="contactform-group-input" type="tel" placeholder="Enter your phone number" />
                    </Form.Group>
                </div>
                <div className="contactform-right-part">
                    <Form.Group controlId="formMessage" className="contactform-group contactform-group-message">
                        <Form.Label className="contactform-group-text">Your Message</Form.Label>
                        <Form.Control className="contactform-group-input contactform-message" as="textarea" placeholder="Enter your message" />
                    </Form.Group>
                    <div className="contactform-text-right">
                        <Button className="contactform-form-button" variant="primary" type="submit">
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default ContactForm;