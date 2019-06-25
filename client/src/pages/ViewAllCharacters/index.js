import React from 'react';
import { Col, Row, Container, Jumbotron } from 'reactstrap';

export default class ViewAllCharacters extends React.Component {
    state = {
        characters: [
            {
                "name": "Del'ri",
                "imageUrl": "https://i.pinimg.com/originals/92/1b/b2/921bb2b9cfaee0fb768cfb08be6f38be.jpg",
                "race": "Elf",
                "class": "Mystic",
                "level": 1,
                "STR": 8,
                "DEX": 14,
                "CON": 11,
                "INT": 18,
                "WIS": 15,
                "CHA": 12,
                "equipment": []
            },
            {
                "name": "Cain",
                "imageUrl": "https://i.pinimg.com/originals/d5/b4/fb/d5b4fb920d7f27ae22209ee2a83f1e80.jpg",
                "race": "Human",
                "class": "Rogue",
                "level": 1,
                "STR": 13,
                "DEX": 17,
                "CON": 14,
                "INT": 15,
                "WIS": 16,
                "CHA": 15,
                "equipment": []
            },
            {
                "name": "Vigli",
                "imageUrl": "https://vignette.wikia.nocookie.net/kingofkatanova/images/5/52/Dwarf_Warrior.jpg/revision/latest?cb=20160426195958",
                "race": "Dwarf",
                "class": "Warrior",
                "level": 1,
                "STR": 18,
                "DEX": 11,
                "CON": 17,
                "INT": 8,
                "WIS": 11,
                "CHA": 9,
                "equipment": []
            }
        ]
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Jumbotron className="shadow-sm">
                            <h1>Welcome to D20Folio</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {
                            this.state.characters.map( (character, id) => (
                                <div>
                                    {character.name}
                                    <img src={character.imageUrl} alt="" />
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}