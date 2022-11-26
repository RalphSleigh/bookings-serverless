import * as React         from 'react'
import update        from 'immutability-helper';
import {Typeahead}   from 'react-bootstrap-typeahead';
import ReactMarkdown from 'react-markdown'

import {manageWholeEventCheck} from '../permission'
import csv from 'csv-file-creator'

import {
    Row,
    Col,
    Button,
    FormGroup,
    Table,
    Label,
    Input
} from 'reactstrap';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import Moment from 'moment'

class Roles extends React.Component<any, any> {
    private event: any;

    constructor(props) {
        super(props);
        this.state = {role: 'Manage', org: '', village: '', user: []};

        this.updateOption = this.updateOption.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.addRole = this.addRole.bind(this);
        this.deleteRole = this.deleteRole.bind(this);
        this.exportCSV = this.exportCSV.bind(this);

        this.event = this.props.Event.toJS();
    }

    componentWillMount() {
        this.props.getUserList(this.event.id);
    }

    updateOption(section) {
        return e => {
            this.setState(update(this.state, {[section]: {$set: e.target.value}}));
            e.preventDefault()
        }
    }

    updateUser(user) {
        this.setState(update(this.state, {user: {$set: user}}));
    }

    addRole(e) {

        const role = {
            userId: this.state.user[0].id,
            eventId: this.props.Event.get('id'),
            name: this.state.role,
            organisationId: undefined,
            villageId: undefined
        };
        //@ts-ignore
        if (this.state.org !== '') role.organisationId = parseInt(this.state.org);
        //@ts-ignore
        if (this.state.village !== '') role.villageId = parseInt(this.state.village);

        this.props.addRole(role);

        this.setState({role: 'Manage', org: '', village: '', user: []});
        // @ts-ignore
        this.refs.typeahead.getInstance().clear();
        e.preventDefault()
    }

    deleteRole(id) {
        return e => {
            this.props.deleteRole(id);
            e.preventDefault()
        }
    }

    exportCSV() {

        const event = this.props.Event.toJS();
        const bookings = this.props.bookings

        const headers = ['id', 'name', 'email', 'role', 'note', 'organisation', 'village', 'createdAt', 'booked', 'participants'];

        const exportedData = event.roles.map(r => {

            return [r.id,
                    r.user.userName,
                    r.user.email,
                    r.name,
                    r.note,
                    r.organisation ? r.organisation.name : '',
                    r.village ? r.village.name : '',
                    r.createdAt,
                    bookings.find(b => b.userId === r.user.id) ? 'yes': 'no',
                    bookings.find(b => b.userId === r.user.id) ? bookings.find(b => b.userId === r.user.id).participants.length : '']
        });

        const fileName = this.props.Event.get('name') + "-Roles-" + Moment().format('YYYY-MM-DD') + ".csv";
        csv(fileName, [headers, ...exportedData]);
    }

    render() {

        const event = this.props.Event.toJS();
        const userList = this.props.UserList.toJS().map(u => {
            u.search = u.userName + ' <' + (u.email || '') + '>';
            return u;
        }).sort((a, b) => nameSort(a.search, b.search));

        const globalRoles = event.roles.filter(r => r.villageId === null && r.organisationId === null && r.name !== 'book');

        globalRoles.unshift({id: 0, name: "Owner", user: event.user});

        const globalRows = globalRoles.map(r => <tr key={r.id}>
            <td>{r.user.userName}</td>
            <td>{r.name}</td>
            <td>{r.name === "Owner" ? null :

                <Button onClick={this.deleteRole(r.id)} color="warning" size="sm" className="float-right"
                        aria-label="Delete">
                    <span aria-hidden="true"><FontAwesomeIcon
                        icon={faTimes}/></span>
                </Button>
            }</td>
        </tr>);

        const bookRoles = event.roles.filter(r => r.name === 'book');

        bookRoles.sort((a, b) => a.note > b.note);

        const bookRows = bookRoles.map(r => <tr key={r.id}>
            <td>{r.user.userName}</td>
            <td>
                <ReactMarkdown  children={r.note}/></td>
            <td><Button onClick={this.deleteRole(r.id)} color="warning" size="sm" className="float-right"
                        aria-label="Delete">
                    <span aria-hidden="true"><FontAwesomeIcon
                        icon={faTimes}/></span>
            </Button>
            </td>
        </tr>);

        const orgRoles = event.roles.filter(r => r.organisationId !== null);
        const orgRows = orgRoles.map(r => <tr key={r.id}>
            <td>{r.user.userName}</td>
            <td>{r.name}</td>
            <td>{r.organisation.name}</td>
            <td>
                <Button onClick={this.deleteRole(r.id)} color="warning" size="sm" className="float-right"
                        aria-label="Delete">
                    <span aria-hidden="true"><FontAwesomeIcon
                        icon={faTimes}/></span>
                </Button>
            </td>
        </tr>);

        const villageRoles = event.roles.filter(r => r.villageId !== null);
        const villageRows = villageRoles.map(r => <tr key={r.id}>
            <td>{r.user.userName}</td>
            <td>{r.name}</td>
            <td>{r.village.name}</td>
            <td>
                <Button onClick={this.deleteRole(r.id)} color="warning" size="sm" className="float-right"
                        aria-label="Delete">
                    <span aria-hidden="true"><FontAwesomeIcon
                        icon={faTimes}/></span>
                </Button>
            </td>
        </tr>);

        const orgOptions = event.organisations.map(o => <option key={o.id} value={o.id}>{o.name}</option>);
        const villageOptions = event.villages.map(v => <option key={v.id} value={v.id}>{v.name}</option>);

        return (<React.Fragment>
            <Row>
            <Col sm={12}>
                <Button className="float-right top5" onClick={this.exportCSV}>Export CSV</Button>
                <h6 className="top5">Here you can assign roles to other users so they can help you administer the event</h6>
            </Col>
            </Row>
            <Row>
            <Col sm={5}>
                <FormGroup>
                    <Label>User:</Label>
                    <Typeahead
                        ref="typeahead"
                        options={userList}
                        labelKey="search"
                        onChange={this.updateUser}
                        placeholder="Name"/>
                </FormGroup>
            </Col>
            <Col sm={2}>
                <FormGroup>
                    <Label className="control-label">Role:</Label>
                    <Input type="select" value={this.state.role} onChange={this.updateOption("role")}
                           className="form-control">
                        <option value="Manage">Manage</option>
                        <option value="View">View</option>
                        <option value="Kp">Kp</option>
                        <option value="Money">Money</option>
                        <option value="book">Book</option>
                    </Input>
                </FormGroup>
            </Col>
            <Col sm={2}>
                <FormGroup>
                    <Label className="control-label">Organisation:</Label>
                    <Input type="select" value={this.state.org} onChange={this.updateOption("org")}
                           className="form-control">
                        <option value={''}>All</option>
                        {orgOptions}
                    </Input>
                </FormGroup>
            </Col>
            <Col sm={2}>
                <FormGroup>
                    <Label className="control-label">Village:</Label>
                    <Input type="select" value={this.state.village} onChange={this.updateOption("village")}
                           className="form-control">
                        <option value={''}>All</option>
                        {villageOptions}
                    </Input>
                </FormGroup>
            </Col>
            <Col sm={1}>
                <Label className="control-label">&nbsp;</Label>
                <Button className="form-control" disabled={this.state.user.length !== 1} type="submit" onClick={this.addRole}
                        color="success">Add
                </Button>
            </Col>
            <Col sm={12}>
                <h4>Event Roles</h4>
                <p>These roles grant access to the whole event, Managers here can also assign Villages and Roles.</p>
                <Table striped size="sm">
                    <thead>
                    <tr>
                        <th>User</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {globalRows}
                    </tbody>
                </Table>
                <h4>Book Roles</h4>
                <p>These are users who can book into the event:</p>
                <Table striped size="sm">
                    <thead>
                    <tr>
                        <th>User</th>
                        <th>Note</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookRows}
                    </tbody>
                </Table>
                <h4>Organisation Roles</h4>
                <p>These grant access to bookings within the specified organisation only</p>
                <Table striped size="sm">
                    <thead>
                    <tr>
                        <th>User</th>
                        <th>Role</th>
                        <th>Organisation</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {orgRows}
                    </tbody>
                </Table>
                <h4>Village Roles</h4>
                <p>These grant access to bookings within the specified Village only</p>
                <Table striped size="sm">
                    <thead>
                    <tr>
                        <th>User</th>
                        <th>Role</th>
                        <th>Village</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {villageRows}
                    </tbody>
                </Table>
            </Col>
        </Row>
        </React.Fragment>);

    }
}

export default manageWholeEventCheck(Roles);

const nameSort = (a, b) => {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
};