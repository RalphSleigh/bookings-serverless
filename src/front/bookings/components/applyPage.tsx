import * as React from 'react'
import {connect} from 'react-redux'

import {applyEventCheck} from '../permission'
import {applyToBook} from '../actions'
import update from 'immutability-helper';

import {
    Button,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Form
} from 'reactstrap';


//Apply to be able to book an event

class ApplyPage extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {message: ''};

        this.apply = this.apply.bind(this);
        this.updateMessage = this.updateMessage.bind(this)
    }

    apply(e) {
        this.props.applyToBook({message: this.state.message, eventId: this.props.Event.get('id')});
        e.preventDefault();
    }

    updateMessage(e) {
        this.setState(update(this.state, {message: {$set: e.target.value}}));
        e.preventDefault();
    }

    render() {

        const event = this.props.Event.toJS();
        const user = this.props.User.toJS();

        return (<React.Fragment>
            <Row>
                <Col>
                    <h3>Apply to book for <b>{event.name}</b></h3>
                    <Form>
                        <FormGroup>
                            <Label>Hi {user.userName}, Please fill in your name, which IFM-SEI organisation or
                                Woodcraft Folk district are you from and approximately how many people are you planning to bring below: </Label>
                            <Input rows={10} type="textarea" value={this.state.message || `Name:

Which Woodcraft District/IFM organisation are you booking:

Approximately how many people are you planning to bring:`}
                                   onChange={this.updateMessage}/>
                        </FormGroup>
                        <Button color="primary"
                                onClick={this.apply}
                                disabled={this.state.message === ''}
                        >Submit</Button>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>);
    }
}


const mapStateToProps = (state, props) => {
    const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    const User = state.getIn(["User", "user"]);
    return {Event, User};
};

const mapDispatchToProps = {
    applyToBook: applyToBook,
};

const VisibleApplyPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(applyEventCheck(ApplyPage));

export default applyEventCheck(VisibleApplyPage);

