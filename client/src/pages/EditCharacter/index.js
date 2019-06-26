import React, { Component } from 'react'
import { Input, Button, Form, FormGroup, Label, Col, Row, Container } from 'reactstrap'
import API from '../../util/API';


export class EditCharacter extends Component {
    state = {
        name: "",
        imageUrl: "",

        STR: "10",
        DEX: "10",
        INT: "10",
        WIS: "10",
        CON: "10",
        CHA: "10"

    }

    submitCharacterCreation = () => {
        //create new variable for new state to be housed in
        const newChar = {
            name: this.state.name,
            imageUrl: this.state.imageUrl,

            STR: this.state.STR,
            DEX: this.state.DEX,
            INT: this.state.INT,
            WIS: this.state.WIS,
            CON: this.state.CON,
            CHA: this.state.CHA
        }
        API.createCharacter(newChar)
            .then(() => this.clearForm())
    }

    clearForm = () => {
        // this.setState( {[field]: ""} )
    }

    //onChange is locked into event function - tracks what we type into input field
    handleInput = field => event => {
        const {value} = event.target;
        this.setState( {
            [field]: value
        })
    }

    render() {
        return (
                this.props.new?
                <Container>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label className="mt-3" >Character Name</Label>
                                <Input 
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInput("name")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Image Url</Label>
                                <Input 
                                    name="Image"
                                    value={this.state.imageUrl}
                                    onChange={this.handleInput("imageUrl")}
                                />
                            </FormGroup>
                            <img alt="" src={this.state.imageUrl} />
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label className="mt-3">Strength</Label>
                                <Input 
                                    name="STR"
                                    value={this.state.STR}
                                    onChange={this.handleInput("STR")}
                                    type="number"
                                    min="3" max="18"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Dexterity</Label>
                                <Input 
                                    name="DEX"
                                    value={this.state.DEX}
                                    onChange={this.handleInput("DEX")}
                                    type="number"
                                    min="3" max="18"

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Intelligence</Label>
                                <Input 
                                    name="INT"
                                    value={this.state.INT}
                                    onChange={this.handleInput("INT")}
                                    type="number"
                                    min="3" max="18"

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Wisdom</Label>
                                <Input 
                                    name="WIS"
                                    value={this.state.WIS}
                                    onChange={this.handleInput("WIS")}
                                    type="number"
                                    min="3" max="18"

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Constitution</Label>
                                <Input 
                                    name="CON"
                                    value={this.state.CON}
                                    onChange={this.handleInput("CON")}
                                    type="number"
                                    min="3" max="18"

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Charisma</Label>
                                <Input 
                                    name="CHA"
                                    value={this.state.CHA}
                                    onChange={this.handleInput("CHA")}
                                    type="number"
                                    min="3" max="18"

                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Button onClick={this.submitCharacterCreation}>
                                Create Character
                            </Button>
                        </Col>
                    </Row>
                </Container>
                : null
        )
    }
}

export default EditCharacter
