import * as React from 'react'

import feeFactory from '../../../../shared/fee/feeFactory'


export default class FeeForm extends React.Component<any, any> {

	constructor(props) {
		super(props);

		this.updatePermission = this.updatePermission.bind(this);
	}

	updatePermission(e) {
		this.props.update();
	}

	render() {

        const BookingFeeForm = feeFactory(this.props.event).BookingForm;

        return (
            <BookingFeeForm event={this.props.event} feeData={this.props.event.feeData}
                            participants={this.props.participants} booking={this.props.booking}/>
		)
	}
}