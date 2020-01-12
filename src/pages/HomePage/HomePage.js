import React from 'react'
import { Form, FormGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap'

import WaNav from '../../components/WaNav/WaNav'
import WaDivider from '../../components/WaDivider/WaDivider'
import WaFooter from '../../components/WaFooter/WaFooter'

import logo from '../../resources/images/logo.png'

import crazyMan from '../../resources/images/crazy-man.png'
import dogGiraffe from '../../resources/images/dog-giraffe.png'
import drawing from '../../resources/images/drawing.png'
import weirdPerson from '../../resources/images/weird-person.png'
import longLegs from '../../resources/images/long-legs.png'


import video from '../../resources/video/solar-footage.mp4'

import './Home.css'

export default () => (
  <div>

    <WaNav/>

    <Container>

      <Row style={{'padding': '4em 0'}}>
        <Col xl={8}>
          <h1 style={{'padding': '0.1em 0'}}>Save money.<br></br>Save the planet.<br></br>Meet Wala.</h1>
          <Form inline style={{'padding': '0.2em 0 4em 0'}}>
            <FormGroup>
              <FormControl type="tel" autoComplete="off" placeholder="Enter your mobile number"/>
            </FormGroup>
            <Button type="submit">Join us</Button>
          </Form>
        </Col>
        <Col xl={4} style={{ 'margin': 'auto' }}>
          <img style={{ 'width': '120%' }} src={longLegs}/>
        </Col>
      </Row>

      <Row style={{'padding': '8em 0'}}>
         <Col xl={6} style={{ 'margin': 'auto' }}>
          <img style={{ 'width': '100%' }} src={crazyMan}/>
        </Col>
        <Col xl={6}>
          <h2 style={{'padding': '0.1em 0', 'textAlign': 'right'}}>Understand the energy use in your home.</h2>
        </Col>
      </Row>

      <Row style={{'padding': '8em 0'}}>
        <Col xl={6}>
          <h2 style={{'padding': '0.1em 0'}}>Access the cheapest electricity in your city.</h2>
        </Col>
        <Col xl={6} style={{ 'margin': 'auto' }}>
          <img style={{ 'width': '80%', 'float': 'right' }} src={dogGiraffe}/>
        </Col>
      </Row>

      <Row style={{'padding': '8em 0'}}>
      <Col xl={6} style={{ 'margin': 'auto' }}>
          <img style={{ 'width': '100%' }} src={drawing}/>
        </Col>
        <Col xl={6}>
          <h2 style={{'padding': '0.1em 0', 'textAlign': 'right'}}>100% renewable, guaranteed.</h2>
        </Col>
      </Row>
    </Container>

    <Container style={{'background': 'red'}}>
      <Row style={{'padding': '8em 0', 'textAlign': 'center'}}>
        <Col xl={12}>
          <h2 style={{'padding': '0.1em 0'}}>What are you waiting for?</h2>
          <Form inline style={{'padding': '0.2em 0 4em 0', 'justifyContent': 'center'}}>
            <FormGroup>
              <FormControl type="email" autoComplete="off" placeholder="Enter your mobile number"/>
            </FormGroup>
            <Button type="submit">Join us</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    
    <WaFooter/>
  </div>
)