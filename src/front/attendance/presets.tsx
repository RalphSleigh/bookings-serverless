import * as React from 'react'
import cloneDeep from 'lodash/cloneDeep'

export const name = "presets";
export const selection = "Predefined options";

import {
    Button,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody
} from 'reactstrap';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

export class Config extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.updateMask = this.updateMask.bind(this);
    }

    update(id) {
        return key => e => {
            const out = cloneDeep(this.props.data);
            out.find(o => o.id === id)[key] = e.target.value;
            this.props.update(out);
            e.preventDefault()
        }
    }

    updateMask(id) {
        return e => {
            const out = cloneDeep(this.props.data);
            out.find(o => o.id === id).mask = parseInt(e.target.value);
            this.props.update(out);
            e.preventDefault()
        }
    }

    add(e) {
        const out = cloneDeep(this.props.data) || [];
        out.push({id: Math.round((Math.random() * 100000))});//TODO: Holy f*** fix this
        this.props.update(out);
        e.preventDefault()
    }

    delete(id) {
        return e => {
            const out = cloneDeep(this.props.data) || [];
            this.props.update(out.filter(o => o.id !== id));
            e.preventDefault()
        }
    }

    render() {
        //<AttendanceConfig data={this.state.event.partialDatesData} update={this.updateData('partialDatesData')} />
        const options = this.props.data || [];

        const optionRows = options.map(o => <RowC key={o.id} name={o.name} mask={o.mask} update={this.update(o.id)}
                                                  delete={this.delete(o.id)} updateMask={this.updateMask(o.id)}/>);

        return (
            <React.Fragment>
                <Row>
                    <Col sm={7}>
                        <h4>Description</h4>
                    </Col>
                    <Col sm={5}>
                        <h4>Day Mask</h4>
                    </Col>
                </Row>
                {optionRows}
                <Row>
                    <Col>
                        <Button type="submit" color="success" onClick={this.add}>Add</Button>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export class ParticipantWidget extends React.Component<any, any> {

    constructor(props) {
        super(props);

    }

    render() {

        const options = this.props.event.partialDatesData.map(o => <option key={o.id} value={o.mask}>{o.name}</option>);

        return (<React.Fragment>
            <Label sm={2}>
                Attendance:
            </Label>
            <Col sm={3}>
                <Input type="select" value={this.props.days} onChange={this.props.update}>
                    {options}
                </Input>
            </Col>
        </React.Fragment>);
    }
}

const RowC = props =>
    <FormGroup row>
        <Col sm={7}>
            <Input type="text" value={props.name || ''}
                   onChange={props.update('name')}
                   placeholder="Option name"/>
        </Col>
        <Col sm={4}>
            <Input type="number" value={props.mask || 0}
                   onChange={props.updateMask}
                   placeholder="0"/>
        </Col>
        <Col sm={1}>
            <Button type="submit" onClick={props.delete} color="warning">
                <span style={{color: 'white'}}><FontAwesomeIcon icon={faTimes}/></span>
            </Button>
        </Col>
    </FormGroup>;