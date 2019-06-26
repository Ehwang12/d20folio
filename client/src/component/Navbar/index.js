import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="bg-info shadow" light expand="md">
          <NavbarBrand href="/" style={{fontFamily: '"Press Start 2P", cursive', fontSize: '1em', color: 'white'}}>
              <img style={{height: '40px', marginRight: '.5rem'}} src="/images/d20-folio-logo-1.png" />
              D20Folio</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link className='text-white' to='/'>Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className='text-white' to='/mychars'>My Characters</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className='text-white' to='/new'>New Character</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}

export default NavigationBar;