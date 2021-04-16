import React, { useState } from 'react';
import { Container, Button, Alert, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import '../styles/style.scss';

function add(x, y) {
    return x + y
}

function App(props) {
    const {
        choice,
        setChoice
    } = useChoice();

    return <div>
        { choice == 'none' ? null :
            <Container>
                <Alert
                    variant={choice == 'characters' ? 'success' : choice == 'about' ? 'danger' : 'primary'}
                >
                    This is an alert: you have chosen {choice}. {(choice != 'nothing' ? <Link to={choice}>Continue here.</Link> : "")}
                </Alert>
            </Container>
        }
        <Container
            className="p-4 bg-light border border-secondary rounded-lg"
        >
            <h2 data-testid="welcome">Welcome</h2>
            <p>Welcome to the Phineas and Ferb Info Site!</p>
            <div className="d-flex justify-content-center">
                <Button variant="primary" size="lg" onClick={() => setChoice('characters')}>Characters</Button>
                <Button variant="secondary mx-1" size="lg" onClick={() => setChoice('nothing')}>Nothing</Button>
                <Button variant="danger" size="lg" onClick={() => setChoice('about')}>About</Button>
            </div>
        </Container>
    </div>

    function useChoice() {
        const [choice, setChoice] = useState('none');
        return {
            choice,
            setChoice
        };
    };
};

export default App;
module.exports = add, App;