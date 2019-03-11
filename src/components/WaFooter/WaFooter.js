import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class WaFooter extends Component {
  render() {
    return(
      <footer style={{'background': '#31CB00'}}>
        <Container>
          <Row>
            <Col md={12}>
              <p>Wala Energy, Inc. 2019</p>
            </Col>

            <Col md={6}>
              <h5>Careers</h5>
              <ul>
                <li>Contact</li>
                <li>Contact</li>
                <li>Contact</li>
              </ul>
            </Col>

            <Col md={6}>
              <h5>Careers</h5>
              <ul>
                <li>Contact</li>
                <li>Contact</li>
                <li>Contact</li>
              </ul>
            </Col>

            <Col md={6}>
              <h5>Careers</h5>
              <ul>
                <li>Contact</li>
                <li>Contact</li>
                <li>Contact</li>
              </ul>
            </Col>

            <Col md={6}>
              <h5>Careers</h5>
              <ul>
                <li>Contact</li>
                <li>Contact</li>
                <li>Contact</li>
              </ul>
            </Col>

          </Row>
        </Container>
      </footer>
    )
  }
}
