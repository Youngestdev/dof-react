import React from 'react'
import { Input, Button, Container } from 'mdbreact';

const styles = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20%',
    width: 600
}
class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
    
        this.setState({
          [name]: target.value
        });
    }

    handleLogin() {
            
    }

    render() {
        return(
            <Container style={styles}>
                <form>
                    <p className="h5 text-center mb-4">Log in</p>
                    <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right" onChange={this.handleInputChange}/>
                    <Input label="Your password" icon="lock" group type="password" validate onChange={this.handleInputChange}/>
                    <div className="text-center">
                        <Button color="deep-orange">Sign up</Button>
                    </div>
                </form>
            </Container>
        );
    }
}

export default Login;