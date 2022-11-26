import * as React from 'react'
import update from 'immutability-helper';
import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

let orgkey = 0;

export default class OrganisationForm extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);

        this.state = {};
        // @ts-ignore
        this.state.orgs = this.props.orgs || [{id: 'TEMP'}]
    }

    componentWillReceiveProps(nextProps) {
        this.setState(update(this.state, {orgs: {$set: (nextProps.orgs || [{id: 'TEMP'}])}}))
    }

    update(id) {
        return e => {
            const org = this.state.orgs.find(o => o.id === id);
            org.name = e.target.value;
            this.props.update(this.state.orgs);
            e.preventDefault()
        }
    }

    delete(id) {
        return e => {
            const orgs = this.state.orgs.filter(o => o.id !== id);
            this.props.update(orgs);
            e.preventDefault()
        }
    }

    add(e) {
        this.state.orgs.push({id: "temp" + orgkey});
        orgkey++;
        this.props.update(this.state.orgs);
        e.preventDefault()
    }

    render() {
        const orgRows = this.state.orgs.map(o => <OrgRow key={o.id} org={o} update={this.update}
                                                         delete={this.delete}/>);
        return (
            <React.Fragment>
                {orgRows}
                <Row>
                    <Col>
                        <Button type="submit" color="success" onClick={this.add}>Add</Button>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const OrgRow = props =>
    <FormGroup row>
        <Col sm={10}>
            <Input type="text" value={props.org.name || ''}
                   onChange={props.update(props.org.id)}
                   placeholder="Organisation Name"/>
        </Col>
        <Col>
            {typeof props.org.id === 'string' ? 'Save to view' : props.org.id}
        </Col>
        <Col>
            <Button type="submit" onClick={props.delete(props.org.id)} color="warning">
                <span style={{color: 'white'}}><FontAwesomeIcon icon={faTimes}/></span>
            </Button>
        </Col>
    </FormGroup>;
