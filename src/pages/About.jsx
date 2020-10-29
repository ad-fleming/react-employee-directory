import React from "react";
import Hero from "../components/Hero/Hero";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

const About = () => {
    return (
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80">
                <h1>React Employee Search</h1>
            </Hero>
            <Container style={{marginTop: 30}}>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">Welcome to the React Employee Search</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p className="text-center mt-3">
                            We help manage your growing business by leveraging intelligent design and powerful web technologies. React Employee Search helps you keep track of your employee database with ease. Go on...give it a try! 
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;