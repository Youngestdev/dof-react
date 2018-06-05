import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container, FormInline } from 'mdbreact';
import Logo from '../../logos.png';

const logo = {
    width: 90,
    heigth: 60
}

class Navigation extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
          collapse : false
        }

        this.onClick = this.onClick.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
      }
    
      onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
      }
    
      handleNavbarClick(){
        this.setState({
          collapse: false
      });
    }

    render() {
        const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
        return(
            <Router>
                <div>
                    <Navbar dark expand="md" fixed="top" scrolling>
                        <Container>
                            <NavbarBrand>
                                <img src={Logo} alt="DOF" style={logo}/>
                            </NavbarBrand>
                            <NavbarToggler onClick = { this.onClick } />
                            <Collapse isOpen = {this.state.collapse} navbar>
                                <NavbarNav left>
                                <NavItem active>
                                    <NavLink to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/login">Login</NavLink>
                                </NavItem>
                                </NavbarNav>
                                <NavbarNav right>
                                <NavItem>
                                    <FormInline waves>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                                    </div>
                                    </FormInline>
                                </NavItem>
                                </NavbarNav>
                            </Collapse>
                            </Container>
                        </Navbar>
                    { this.state.collapse && overlay}
                </div>
            </Router>
        )
    }
}

export default Navigation;