import * as React from 'react';

import {
    Row,
    Col,
    Table
} from 'reactstrap';


//confirmation page for booking cancallation


class CancelPage extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render() {
        return (
            <Row>
                <Col>
                    <h3>Your booking has been cancelled</h3>
                    <p>You may book again if you reconsider</p>
                </Col>
            </Row>
        );
	}
}

export default CancelPage;