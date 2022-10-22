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

export default class FoodForm extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.updateChecked = this.updateChecked.bind(this);
    }

    updateChecked(e) {
        this.props.update('foodOptOut', e.target.checked);
    }

    render() {
        return (<React.Fragment>
            <FormGroup row>
                <Label sm={2}>Central Food Optout:</Label>
                <Col sm={10}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={!!this.props.booking.externalExtra.foodOptOut}
                                   onChange={this.updateChecked}/>{' '}
                        </Label>
                    </FormGroup>

                </Col>
            </FormGroup>
            <Row>
                <Col sm={2}>
                </Col>
                <Col>
                    {!!this.props.booking.externalExtra.foodOptOut ? foodWarning() : null}
                </Col>
            </Row>
        </React.Fragment>);

    }
}

const foodWarning = () => {

    return <div>
        <h4>Opting out of central food provision</h4><p>
        Our aims as Central KP for Common Ground are to create a menu as directed by the young people in
        the movement through consultation, source the food in an environmental and ethical way, and
        distribute it across the campsite as efficiently as possible.</p><p>
        We recognise that even when a period of consultation has taken place, not everyone will agree with
        the end result.</p><p>
        Finding a compromise and giving individuals freedom to choose is in keeping with the Woodcraft
        way and above all we do not want food to become a barrier preventing any group from attending
        Common Ground.</p><p>
        Therefore, we propose to give groups the option to opt out of the central food provision, their ticket
        price being reduced accordingly, under the following conditions:</p>
        <ol>
            <li>
                There will be no access to central storage, cold or ambient, as this could cause confusion.
            </li>
            <li>
                Food must be delivered at a specified time to a pre-decided point near the site entrance.
            </li>
            <li>
                Someone must meet the delivery and transport it to the village without the use of a car, to
                minimise the number of vehicles onsite.
            </li>
            <li>
                Keep open communication with central KPs before and during the camp.
            </li>
            <li>
                Districts opting out would need to ensure that their food budget came in under the central
                one or subsidise any other groups (Woodcraft districts or International delegations) camping
                with them, so as not to increase the cost for them.
            </li>
        </ol>
        <p>
            While this option is open to any group, we feel that groups should consider the following before
            choosing to opt out.</p>
        <ul>
            <li> Environmental factors – a supermarket delivery is unlikely to result in locally sourced food
                and will certainly result in more vehicles coming and going.
            </li>
            <li>Consultation – groups that camp with you may have wanted to be part of the central menu,
                they may have helped with the process of putting it together, and may feel dictated to.
            </li>
        </ul>
        <p>
            Whether you intend to opt out or not we would encourage everyone to take part in the consultation
            process to make Common Ground the best camp it can be for everyone who attends.</p>
    </div>;
};