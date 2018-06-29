import React from 'react';
import { Container, Footer, Fa } from 'mdbreact';
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
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-fb mx-1"> <Fa icon="area-chart" size="3x" className="red-text"/> </a>
                            <Fa icon="area-chart" size="3x" className="red-text"/>
                            <Fa icon="bullhorn" size="2x" className="blue-text"/>
                        </li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><Fa className="fa fa-twitter" /></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><Fa className="fa fa-google-plus" /></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><Fa className="fa fa-linkedin" /></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><Fa className="fa fa-dribbble" /></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; Dev Of Future 2018. All Rights Reserved.  with  by DOF
                    </Container>
                </div>
            </Footer>
        );
    }
}
      
export default FooterPage;
                      