import React from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

import logo from '../../resources/images/logo.png'

export default () => (
  <div style={{ height: '100%', textAlign: 'center' }}>
  	<div>
  		<img style={{ paddingTop: '310px', width: '300px' }} src={logo} />
  		<p>Join the revolution. 100% renewable.</p>
{/*  		<Form inline style={{ justifyContent: 'center' }}>
            <FormGroup>
                <FormControl type="email" value="" autoComplete="off" placeholder="Enter your email address" onChange=""/>
            </FormGroup>
            <Button type="submit" className="btn-concierge" onClick="">Join us</Button>
        </Form>*/}
  	</div>
  </div>
)
