import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class WaDivider extends Component {
	render() {
		return(
			<Container>
				<div style={{'width': '100%', 'border': '1px solid black'}}/>
			</Container>
  	)
	}
}
