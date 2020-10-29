import React from "react";
import Hero from "../components/Hero/Hero"

const About = () => {
    return (
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80">
                <h1>React Employee Search</h1>
                <h2>We <strong><em>React</em></strong></h2>
            </Hero>
        </div>
    );
};

export default About;