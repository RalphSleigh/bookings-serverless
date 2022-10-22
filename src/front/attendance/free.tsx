import * as React     from 'react'

export const name = "free";
export const selection = "Free Choice";

import {
    Button,
    ButtonGroup,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody
} from 'reactstrap';

import Moment          from "moment/moment";

export class Config extends React.Component<any, any> {

    render() {
        return null
    }
}

export class ParticipantWidget extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.updateDays = this.updateDays.bind(this);
    }

    updateDays(mask) {
        return e => {
            const value = this.props.days ^ mask;
            this.props.updateDirect(value);
            e.preventDefault()
        }
    }

    render() {

        const startDate = Moment.utc(this.props.event.startDate).startOf('day');
        const endDate = Moment.utc(this.props.event.endDate).startOf('day').add(1, 'days');
        const dayButtons: any = [];
        let mask = 0;

        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
            const active = (this.props.days & Math.pow(2, mask)) !== 0;
            dayButtons.push(<Button active={active}
                                    outline={!active}
                                    size="sm"
                                    key={mask}
                                    color="success"
                                    onClick={this.updateDays(Math.pow(2, mask))}>{m.format("ddd Do")}</Button>);
            //B, value: Math.pow(2, mask)});
            mask++;
        }

        return (<React.Fragment>
            <Label sm={2}>
                Attendance:<br/>
            </Label>
            <Col sm={9}>
                <small>Deselect days if you are not staying for the whole event</small>
                <ButtonGroup>
                    {dayButtons}
                </ButtonGroup>
            </Col>
        </React.Fragment>);
    }
}
