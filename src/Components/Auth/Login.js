import React from 'react'
import { Input, Button, Container, Navbar, NavbarNav, NavItem, NavLink} from 'mdbreact';
// import Link from 'react-router-dom/Link';
import { BrowserRouter as Router } from 'react-router-dom'
import Logo from '../../logos.png'
import './Auth.css'

const styles = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1%',
    // width: 600
}

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  };

  handleLogin() {}

<<<<<<< HEAD
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
                    <p className="h5 text-center mb-4">Log in</p>
                    <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right" onChange={this.handleInputChange}/>
                    <Input label="Your password" icon="lock" group type="password" validate onChange={this.handleInputChange}/>
                    <div className="text-center">
                        <Button color="deep-orange">Log In</Button> <br />
                        <b>Don't have an account yet ?. </b> <a href="/Register">Register</a>
                    </div>
                </form>
            </Container>
            </div>
        );
    }
=======
  render() {
    return (
      <Container style={styles}>
        <form>
          <p className="h5 text-center mb-4">Log in</p>
          <Input
            label="Your name"
            icon="user"
            group
            type="email"
            validate
            error="wrong"
            success="right"
            onChange={this.handleInputChange}
          />
          <Input
            label="Your password"
            icon="lock"
            group
            type="password"
            validate
            onChange={this.handleInputChange}
          />
          <div className="text-center">
            <Button color="deep-orange">Sign up</Button>
          </div>
        </form>
      </Container>
    );
  }
>>>>>>> f9de0fb47799a77f30643e72937e3d2ec1e7f6bd
}

export default Login;
