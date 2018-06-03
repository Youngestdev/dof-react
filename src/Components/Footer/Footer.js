import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import './Footer'

const footer = {
  margin: -20,
}
class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4 footer" style={footer}>
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> d</i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> d</i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> d</i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin">d </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> d</i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; © Dev Of Future 2018. All Rights Reserved.  with  by DOF
                    </Container>
                </div>
            </Footer>
        );
    }
}
      
export default FooterPage;
                      