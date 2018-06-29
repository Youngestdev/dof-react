import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import {
  Collapse,
  Mask,
  Row,
  Col,
  Fa,
  Button,
  View,
  Container,
  FormInline
} from "mdbreact";
import Footer from "../Footer/Footer";
import Fload from "../../../public/images/desk.png";
import House from "../../../public/images/house.png";
import Heart from "../../../public/images/hearts.svg";
import dev from "../../../public/images/dev.png";
import artboard from "../../../public/images/artboard.png";
import Navigation from "../Layout/Navigation";

class Home extends React.Component {
  render() {
    return (
      <div id="apppage">
        <Navigation />
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Together we create new generation of developers
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    A vast amount of the knowledge that would be valuable to
                    many people is currently only available to a few — either
                    locked in people's heads, or only accessible to select
                    groups. We want to connect the people who have knowledge to
                    the people who need it, to bring together people with
                    different perspectives so they can understand each other
                    better, and to empower everyone to share their knowledge for
                    the benefit of the rest of the world.
                  </h6>
                  <Button color="white">JOIN THE CROWD</Button>
                  {/* <Button outline color="white">Learn More</Button> */}
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src={Fload} className="img-fluid" />
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>

        <Container fluid>
          <Row className="py-4">
            <Col md="12" className="text-center">
              <section className="text-center my-5">
                <Row>
                  <Col md="4">
                    <Fa icon="area-chart" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Analytics</h5>
                    <p className="mb-md-0 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores aperiam minima assumenda deleniti
                      hic.
                    </p>
                  </Col>
                  <Col md="4">
                    <Fa icon="book" size="3x" className="cyan-text" />
                    <h5 className="font-weight-bold my-4">Tutorials</h5>
                    <p className="mb-md-0 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores aperiam minima assumenda deleniti
                      hic.
                    </p>
                  </Col>
                  <Col md="4">
                    <Fa icon="comments-o" size="3x" className="orange-text" />
                    <h5 className="font-weight-bold my-4">Support</h5>
                    <p className="mb-md-0 mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores aperiam minima assumenda deleniti
                      hic.
                    </p>
                  </Col>
                </Row>
              </section>
            </Col>
          </Row>

          <hr />
          <Container>
            <Row className="py-5">
              <Col md="12" className="text-center">
                <section className="my-5">
                  <Row>
                    <Col lg="5" className="text-center text-lg-left">
                      <img
                        className="img-fluid"
                        src={House}
                        alt="Sample image"
                      />
                    </Col>
                    <Col lg="7">
                      <Row className="mb-3">
                        <Col size="1">
                          <Fa
                            icon="mail-forward"
                            size="lg"
                            className="indigo-text"
                          />
                        </Col>
                        <Col xl="10" md="11" size="10">
                          <p>
                            We know that it takes a village to raise a coder!
                            There are a lot of great technical resources for
                            software developers out there, but not a lot of
                            places you can go where you can talk about your life
                            as a programmer with other people who really
                            understand what’s got you feeling like a coding
                            genius or like you’re surrounded by idiots. It's why
                            we created our virtual village called Dev Of Future.
                            Join us and we'll lead you to the future!
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </section>
              </Col>
            </Row>
          </Container>
          <hr />

          <Container>
            <Row className="py-5">
              <section>
                <Row>
                  <Col lg="7" md="6" style={{ marginTop: 120 }}>
                    We know that it takes a village to raise a coder! There are
                    a lot of great technical resources for software developers
                    out there, but not a lot of places you can go where you can
                    talk about your life as a programmer with other people who
                    really understand what’s got you feeling like a coding
                    genius or like you’re surrounded by idiots. It's why we
                    created our virtual village called Dev Of Future. Join us
                    and we'll lead you to the future!
                  </Col>
                  <Col lg="5" md="6" className="text-center text-lg-left">
                    <img
                      className="img-fluid"
                      src={dev}
                      alt="Sample image"
                      style={{ height: 400 }}
                    />
                  </Col>
                </Row>
              </section>
            </Row>
          </Container>
          <hr />

          <Container>
            <Row className="py-5">
              <Col md="12" className="text-center">
                <section className="my-5">
                  <Row>
                    <Col lg="5" className="text-center text-lg-left">
                      <img
                        className="img-fluid"
                        src={artboard}
                        alt="Sample image"
                      />
                    </Col>
                    <Col lg="7">
                      <Row className="mb-3">
                        <Col size="1">
                          <Fa
                            icon="mail-forward"
                            size="lg"
                            className="indigo-text"
                          />
                        </Col>
                        <Col
                          xl="10"
                          md="11"
                          size="10"
                          style={{ marginTop: 120 }}
                        >
                          <p>
                            We know that it takes a village to raise a coder!
                            There are a lot of great technical resources for
                            software developers out there, but not a lot of
                            places you can go where you can talk about your life
                            as a programmer with other people who really
                            understand what’s got you feeling like a coding
                            genius or like you’re surrounded by idiots. It's why
                            we created our virtual village called Dev Of Future.
                            Join us and we'll lead you to the future!
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </section>
              </Col>
            </Row>
          </Container>
          <hr />

          <Row className="py-5">
            <Col md="12" className="text-center">
              <img src={Heart} alt="heart" />
              <h3> Our Supporters</h3>
              <p>
                Our community is supported with resources, freebies and other
                cool stuff from our partners. That's one more reason to join.
              </p>
            </Col>
          </Row>

          <Footer />
        </Container>
      </div>
    );
  }
}

export default Home;
