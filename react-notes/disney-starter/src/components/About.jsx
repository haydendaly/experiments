import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styles/style.scss';

function About(props) {

    return <div>
        <Container
            className="p-4 bg-light border border-secondary rounded-lg"
        >
            <h2>About</h2>
            <p>Phineas and Ferb is an American animated television comedy and Disney Channel Original Series produced by Disney Television Animation for Disney Channel. The series first aired on August 17, 2007 and its last episode aired on June 12, 2015. The show is a Daytime Emmy Award-winning American animated television series about two young stepbrothers who turn their dreams into reality every day. Their teenage sister is jealous and tries to get them in trouble, but the evidence always seem to disappear before their mom sees it. Meanwhile, an evil but weird scientist, Dr. Doofenshmirtz seeks to wreak havoc in the Tri-State Area and only the two kids' pet platypus Perry, a.k.a. Agent P, can stop him.</p>
            <div className="d-flex justify-content-center">
                <Link to="/"><Button variant="secondary mx-1" size="lg">Go Back</Button></Link>
            </div>
        </Container>
    </div>
};

export default About;