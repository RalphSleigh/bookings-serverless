import * as React from 'react'

import {
    Button,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay
}             from 'reactstrap';
import update from "immutability-helper/index";

export default class AdditionalForm extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }

    updateChecked(e) {
        this.props.update('foodOptOut', e.target.checked);
    }

    update(i) {
        return item => e => {

            const existing = this.props.booking.externalExtra.additionalContacts || [{name:'', email:'', phone:''}];

            if(i !== (existing.length - 1))existing.pop();

            this.props.update('additionalContacts', update(existing,
                {[i]:
                        {[item]:
                            {$set: e.target.value}
                        }
                }));
            e.preventDefault()
        }
    }

    render() {

        const contacts = this.props.booking.externalExtra.additionalContacts || [{name:'', email:'', phone:''}];

        if(contacts[contacts.length - 1].name !== '' || contacts[contacts.length - 1].email !== '' || contacts[contacts.length - 1].phone !== '')contacts.push({name:'', email:'', phone:''});

        const rows = contacts.map((r, i) => <ContactRow name={r.name} email={r.email} phone={r.phone} key={i} update={this.update(i)} />);

        return (<React.Fragment>
            <Row>
                <Col>
                    <p>Here you can supply contact details for additional people we can contact about your booking, this optional but may be useful.</p>
                </Col>
            </Row>
            {rows}
        </React.Fragment>);

    }
}

const ContactRow  = props => {
  return <FormGroup row id={props.i}>
        <Col sm={4}>
            <Input
                type="text"
                placeholder="Name"
                value={props.name || ''}
                onChange={props.update("name")}
            />
        </Col>
        <Col sm={4}>
            <Input
                type="text"
                placeholder="e-mail"
                value={props.email || ''}
                onChange={props.update("email")}
            />
        </Col>
        <Col sm={4}>
            <Input
                type="text"
                placeholder="Phone"
                value={props.phone || ''}
                onChange={props.update("phone")}
            />
        </Col>
    </FormGroup>
};