import React from 'react'
import { Container } from 'react-bootstrap'

import WaNav from '../../components/WaNav/WaNav'

export default () => (
  <div>
	  <WaNav/>
	  <Container style={{'padding': '4em 0', 'textAlign': 'center'}}>
			<h1>Why.</h1>
			<h2>Come be part of a team that wants to change the world.</h2>
			<br></br>
			<h4>We're a passionate team that wants to bring the next 100m people onto renewables.</h4>
	  </Container>
  </div>
)
