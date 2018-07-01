import React from 'react'
import { Input, Button, Container, Navbar, NavbarNav, NavItem, NavLink} from 'mdbreact';
import './Auth.css'
import Logo from '../../logos.png'
const styles = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1%',
    // width: 600?
}

class Registration extends React.Component {

    render() {
        return(
            <div>
                <img src={Logo} alt="Logo" className="text-center mb-4"/>
                <Navbar fixed="top" >
                <NavbarNav right>
                    <NavItem>
                        <NavLink to=""><Button>Home</Button></NavLink>
                        </NavItem>
                        </NavbarNav>
                        </Navbar>

            <Container style={styles}>
                <form>
                    <p className="h5 text-center mb-4">Sign up</p>
                    <Input label="Your name" icon="user" group  validate error="wrong" success="right"/>
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Your password" icon="lock" group type="password" validate/>
                    <div className="text-center">
                        <Button color="deep-orange">Sign up</Button>
                    </div>
                </form>
            </Container>
            </div>
        );
    }
}

export default Registration;