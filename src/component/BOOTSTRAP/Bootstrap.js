import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    Row,
    Col,
    Navbar,
    Offcanvas,
    Nav,
    Form,
    Button,
    Carousel,
    Card,
    Tabs,
    Tab,
} from "react-bootstrap";
import "./Bootstrap.scss";
const Bootstrap = () => {
    const [key, setKey] = useState("tab1");
    return (
        <div>
            <Navbar expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="img/bootstrap/logo.svg" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3 gap-3">
                                <Nav.Link href="" className="hover-text-primary">
                                    HOME
                                </Nav.Link>
                                <Nav.Link href="" className="hover-text-primary">
                                    TOURS
                                </Nav.Link>
                                <Nav.Link href="" className="hover-text-primary">
                                    DESTINATIONS
                                </Nav.Link>
                                <Nav.Link href="" className="hover-text-primary">
                                    BLOG
                                </Nav.Link>
                                <Nav.Link href="" className="hover-text-primary">
                                    PAGES
                                </Nav.Link>
                                <Nav.Link href="" className="hover-text-primary">
                                    CONTACT
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Do you want to travel...."
                                    className="me-2"
                                    aria-label="Do you want to travel...."
                                />
                                <Button
                                    variant="outline-success"
                                    className="text-primary border-primary hover-bg-primary"
                                >
                                    Search
                                </Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Carousel>
                <Carousel.Item className="carousel-before">
                    <img
                        className="d-block w-100"
                        src="img/bootstrap/slide-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="top-50 translate-middle-y">
                        <h3 className="text-big w-75 m-auto mb-3">
                            Life is a adventure, makethe best of it
                        </h3>
                        <p className="font-light">
                            Enjoythe breathtaking view of nature. Relax and cherish your dreams to
                            the fullest
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-before">
                    <img
                        className="d-block w-100 font-light"
                        src="img/bootstrap/slide-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="top-50 translate-middle-y">
                        <h3 className="text-big w-75 m-auto mb-3">
                            Life is a adventure, makethe best of it
                        </h3>
                        <p className="font-light">
                            Enjoythe breathtaking view of nature. Relax and cherish your dreams to
                            the fullest
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add more Carousel.Items for additional slides */}
            </Carousel>
            <Container className="mt-5">
                <div className="headline-tour">
                    <h3>Perfect destination</h3>
                    <h2>Trending destinations</h2>
                </div>
                <Tabs
                    className="border-0 justify-content-center"
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="tab1" title="New york">
                        <Row>
                            <Col lg={3}>
                                <Card className="border-0 shadow-sm">
                                    <div className="position-relative">
                                        <Card.Img variant="top" src="img/bootstrap/tour-1.jpg" />
                                        <span className="position-absolute top-0 start-0 bg-danger text-white mt-2 ms-2 py-1 px-2 h6 rounded">
                                            12 off
                                        </span>
                                    </div>
                                    <Card.Body>
                                        <p>
                                            <i class="fa-solid fa-map-pin"></i> New York City
                                        </p>
                                        <Card.Title>
                                            Yellowstone and Grand Teton Adventure – 6 Day
                                        </Card.Title>
                                        <Card.Text>
                                            From <span>$169.99</span> <span>$199.000</span>
                                        </Card.Text>
                                        <div>
                                            <div>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star-half-stroke"></i>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="tab2" title="London">
                        Content for Tab 2
                    </Tab>
                    <Tab eventKey="tab3" title="Tokyo">
                        Content for Tab 3
                    </Tab>
                    <Tab eventKey="tab4" title="Los Angeles">
                        Content for Tab 3
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};

export default Bootstrap;
