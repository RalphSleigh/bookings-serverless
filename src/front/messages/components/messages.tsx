import * as React from 'react'
import { connect } from 'react-redux'
import {
    UncontrolledAlert,
    Col
} from 'reactstrap';

class Messages extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render() {
		const data = this.props.Messages.toObject();

        let success: any, warning: any = null

        if (data.success && new Date().getTime() - data.success.time.getTime() < 10000)success = <UncontrolledAlert
            color="success">{data.success.message}</UncontrolledAlert>
        if (data.warning && new Date().getTime() - data.warning.time.getTime() < 10000)warning = <UncontrolledAlert
            color="warning">{data.warning.message}</UncontrolledAlert>
		if (!success && !warning) return null;

        return (<Col sm={12}>
            {success}
            {warning}
        </Col>)
	}
}

const mapStateToProps = (state) => {
    const Messages = state.get("Messages");
    const router = state.get("router");
    return {Messages, router};
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    doLogin:(credentials) => dispatch(doLogin(credentials))
  }
}
*/

const mapDispatchToProps = {};

var VisibleMessages = connect(
	mapStateToProps,
	mapDispatchToProps
)(Messages);

export default VisibleMessages;