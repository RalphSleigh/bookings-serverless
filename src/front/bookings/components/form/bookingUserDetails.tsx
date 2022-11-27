import * as React from 'react'

import {
    Col,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

export default class BookingUserDetails extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
        this.valid = this.valid.bind(this);
        this.updateOrg = this.updateOrg.bind(this);
    }

    update(item) {
        return (e) => {
            this.props.update(item, e.target.value);
            e.preventDefault();
        }
    }

    updateOrg(e) {
        this.props.update('organisationId', parseInt(e.target.value));
        e.preventDefault();
    }

    valid(item) {
        if (this.props.validating && (!item || item === "")) return false;
        return null;
    }

    render() {

        const district = this.props.event.bigCampMode ?
            <FormGroup row>
                <Label sm={3}>Group/District:</Label>
                <Col sm={9}>
                    <Input type="text"
                           placeholder="Group/District"
                           value={this.props.district || ''}
                           onChange={this.update("district")}
                           valid={this.valid(this.props.district)}
                    />
                </Col>
            </FormGroup> : null;

        let organisations: any = null;

        if (this.props.event.organisationsEnabled) {
            if (this.props.organisations.length === 1) {
                organisations =
                    <FormGroup row>
                        <Label sm={3}>Organisation:</Label>
                        <Col sm={9}>
                            <Input type="text"
                                   value={this.props.organisations[0].name}
                                   disabled/>
                        </Col>
                    </FormGroup>
            } else {
                const options = this.props.organisations.map(o => <option key={o.id} value={o.id}>{o.name}</option>)
                organisations = <FormGroup row>
                    <Label sm={3}>Organisation:</Label>
                    <Col sm={9}>
                        <Input type="select" value={this.props.organisationId} onChange={this.updateOrg}>
                            {options}
                        </Input>
                    </Col>
                </FormGroup>
            }
        }

        return (<React.Fragment>
            <FormGroup row>
                <Label sm={3}>Your Name:</Label>
                <Col sm={9}>
                    <Input
                        type="text"
                        placeholder="Name"
                        value={this.props.userName || ''}
                        onChange={this.update("userName")}
                        valid={this.valid(this.props.userName)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={3}>Your e-mail:</Label>
                <Col sm={9}>
                    <Input type="text"
                           placeholder="e-mail"
                           value={this.props.userEmail || ''}
                           onChange={this.update("userEmail")}
                           valid={this.valid(this.props.userEmail)}
                    /></Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={3}>Phone Number:</Label>
                <Col sm={9}>
                    <Input type="text"
                           placeholder="Phone"
                           value={this.props.userContact || ''}
                           onChange={this.update("userContact")}
                           valid={this.valid(this.props.userContact)}
                    />
                </Col>
            </FormGroup>
            {district}
            {organisations}
        </React.Fragment>)
    }
};