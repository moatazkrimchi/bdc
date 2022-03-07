import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import logo from '../images/logo-gbp.svg'


const LoginPage = () => {
    return (
        <>
            <Container>
                <h1 className=" mt-5 p-3 text-center rounded">
                    <a href="https://www.groupebcp.com"><img className='Logo' src={logo} alt=""/></a>
                </h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control autocomplete="off" type="email" placeholder="Entrer votre identifiant" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Entrer votre mot de passe" />
                            </Form.Group>

                            <Button style={{border:"0px",backgroundColor:'#e37830'}} variant="success btn-block" type="submit">
                                <b>S'identifier</b>                            
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 Seriti Aymen. All Rights Reserved.</h6>
            </Container>
        </>
    );
};

export default LoginPage;