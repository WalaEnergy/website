import React from 'react'
import { Form, FormGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap'
import WaNav from '../../components/WaNav/WaNav'
import WaDivider from '../../components/WaDivider/WaDivider'
import WaFooter from '../../components/WaFooter/WaFooter'

import logo from '../../resources/images/logo.png'
import video from '../../resources/video/solar-footage.mp4'

import './Home.css'

export default () => (
  <div>
    <WaNav/>

    <div className="background">
      <section className="section">
        <Container>
          <Row style={{'padding': '4em'}}>
            <Col xl={10}>
              <h1 style={{'padding': '0.1em 0', 'color': 'black'}}>Save money.<br></br>Save the planet.<br></br>Meet Wala.</h1>
              <Form inline style={{'padding': '0.2em 0 4em 0'}}>
                <FormGroup>
                  <FormControl type="email" autoComplete="off" placeholder="Enter your mobile number"/>
                </FormGroup>
                <Button type="submit">Join us</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>

    <Container>
      <Row style={{'padding': '4em 0'}}>
        <Col xl={4}></Col>
        <Col xl={8}>
          <h1 style={{'padding': '0.1em 0', 'color': 'black', 'textAlign': 'right'}}>Understand the energy use in your home.</h1>
        </Col>
      </Row>

      <Row style={{'padding': '4em 0'}}>
        <Col xl={8}>
          <h1 style={{'padding': '0.1em 0', 'color': 'black'}}>Access the cheapest electricity in your city.</h1>
        </Col>
      </Row>

      <Row style={{'padding': '4em 0'}}>
        <Col xl={4}></Col>
        <Col xl={8}>
          <h1 style={{'padding': '0.1em 0', 'color': 'black', 'textAlign': 'right'}}>100% renewable, guaranteed.</h1>
        </Col>
      </Row>

      <Row style={{'padding': '8em 0', 'textAlign': 'center'}}>
        <Col xl={12}>
          <h2 style={{'padding': '0.1em 0', 'color': 'black'}}>What are you waiting for?</h2>
          <Form inline style={{'padding': '0.2em 0 4em 0', 'justifyContent': 'center'}}>
            <FormGroup>
              <FormControl type="email" autoComplete="off" placeholder="Enter your mobile number"/>
            </FormGroup>
            <Button type="submit">Join us</Button>
          </Form>
        </Col>
      </Row>
    </Container>

    <div className="layer">
      <WaFooter/>
    </div>
  </div>
)