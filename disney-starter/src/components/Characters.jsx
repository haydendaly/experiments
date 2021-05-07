import React from 'react';
import { Container, Button, Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styles/style.scss';

const characters = [
    { color: 'danger', name: 'Phineas', description: 'As an incurable optimist, Phineas constantly looks on the brighter side of things. He is also extremely smart, creative, persistent, and able to endeavor in immensely large projects and activities with the help of his step-brother. His hospitality is a driving force behind many of his plans.', img: 'https://vignette.wikia.nocookie.net/phineasandferb/images/e/ea/Profile_-_Phineas_Flynn.PNG/revision/latest?cb=20200401182458'},
    { color: 'success', name: 'Ferb', description: 'Ferb speaks very rarely, but is not actually shallow as others may assume. He is very courageous and has the ability to think quickly and stay calm in the midst of desperate scenarios. A notable skill of his is a technical and technological proficiency he shares with his stepbrother, which he can easily take advantage of and build almost anything he chooses to.', img: 'https://lumiere-a.akamaihd.net/v1/images/ce17e66e3dd28cefad55fbd18262c660b4cd8294.jpeg?region=0,0,600,600&width=320' },
    { color: 'info', name: 'Perry', description: "Perry the Platypus, code named Agent P, or simply Perry, is Phineas  and Ferb's pet platypus, who, unbeknownst to his owners, lives a double life as a secret agent for the O.W.C.A. (The Organization Without a Cool Acronym a.k.a. The Agency), a government organization of animal spies. In the Agency, his immediate superior is Major Monogram.", img: 'https://live.staticflickr.com/5810/24042089255_164ef110f5_b.jpg' }
];

function Characters(props) {

    return <div>
        <Container
            className="p-4 bg-light border border-secondary rounded-lg"
        >
            <CardDeck>
            { characters.map((data, idx) => (
                <Card
                    bg={data.color}
                    key={idx}
                    text={data.color === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Img variant="top" src={data.img} />
                    <Card.Header>{data.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>{data.description}</Card.Text>
                    </Card.Body>
                </Card>
            )) }
            </CardDeck>
            <div className="d-flex justify-content-center">
                <Link to="/"><Button variant="secondary mx-1" size="lg">Go Back</Button></Link>
            </div>
        </Container>
    </div>
};

export default Characters;