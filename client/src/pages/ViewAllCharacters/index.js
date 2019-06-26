import React from 'react';
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import CharacterCard from '../../component/CharacterCard/index';
import API from '../../util/API';


export default class ViewAllCharacters extends React.Component {
    state = {
        characters: []
    }

    fetchCharacters = () => (
        API.getAllCharacters()
            .then( characters => this.setState({characters: characters}) )
    )

    componentDidMount() {
        this.fetchCharacters();
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
                                <CharacterCard character={character} key={id} />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}