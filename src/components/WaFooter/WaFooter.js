import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class WaFooter extends Component {
  render() {
    return(
      <div className="footer padd-top-lg padd-bottom-lg">
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Row><a href="/careers">Careers</a></Row>
              <Row><a href="http://help.empower.me/" target="_blank">Help</a></Row>
            </Col>

            <Col xs={6} md={3}>
              <Row><a href="/terms">Terms of Service</a></Row>
              <Row><a href="/privacy">Privacy</a></Row>
              <Row><a href="/legal">Legal</a></Row>
            </Col>

            <Col xs={6} md={3}>
              <Row><a href="https://www.facebook.com/empowerfinance" target="_blank">Facebook</a></Row>
              <Row><a href="https://www.instagram.com/empower.app" target="_blank">Instagram</a></Row>
              <Row><a href="https://twitter.com/empowermeapp" target="_blank">Twitter</a></Row>
            </Col>

            <Col xs={4} md={3}>
              <Row>
                <a><img className="appIcon"/></a>
                <a><img className="appIcon"/></a>
                <a><img style={{'height': '28px'}}/></a>
              </Row>
            </Col>
          </Row>

          <Row className="margin-top-md">
            <Col md={12}>
              <small style={{color: '#535353'}}>© 2019 Wala Energy, Inc.</small>
            </Col>
        </Row>
      </Container>
    </div>
    )
  }
}
