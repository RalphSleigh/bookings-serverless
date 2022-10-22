import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as Immutable from 'immutable'
import {Route, Switch} from 'react-router-dom';

import * as bookings from '../../bookings'
import * as events from '../../events'
import {manageEventCheck, manageWholeEventWrapper, manageMoneyWrapper, manageRolesWrapper} from '../permission'
import {
    togglePaid,
    approve,
    decline,
    assignVillage,
    addVillage,
    deleteVillage,
    renameVillage,
    addRole,
    deleteRole,
    addPayment,
    deletePayment,
    syncMax,
    approveMembership,
    unapproveMembership,
    approveDBS,
    unapproveDBS
} from '../actions'
import {getUserList} from "../../user/actions";

import Filter           from './filter'
import BookingsPage     from './bookings'
import ParticipantsPage from './participants'
import KpPage           from './kp'
import ApplicationPage  from './applications'
import VillagePage      from './villages'
import RolesPage        from './roles'
import MoneyPage        from './money'
import EmailsPage       from './emails'
import BirthdaysPage    from './birthdays'
import GraphsPage       from './graphs'
import MembershipsPage  from './membership'

import { woodcraft as W } from '../../../shared/woodcraft'

import {
    Row,
    Col,
    Nav,
    NavItem,
    NavLink
}                 from 'reactstrap';

import classnames from 'classnames';
import ageFactory from "../../age";
import Moment     from "moment/moment";
import Memberships from "./membership";


//this component sits at the root of our management pages and ensures all the booking information for the event is loaded. This will include other peoples bookings so  we need to check we have permission to view them.


class ManageContainerPage extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getEventDetails(this.props.match.params.eventId);
        this.props.getEventBookings(this.props.match.params.eventId);

        this.prepData(this.props.Bookings, this.props.Event)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.Bookings !== this.props.Bookings) this.prepData(nextProps.Bookings, nextProps.Event)
    }

    prepData(Bookings, Event) {
        //DeImmutable data and calculate ages, to avoid needing to do it on render. Store result in State.

        const event = Event.toJS();

        const ageWidgets = ageFactory(event);

        const startDate = Moment(event.startDate); //todo store this as a Moment.

        const bookings = Bookings.valueSeq().toJS().filter(b => b.eventId === event.id);
        bookings.forEach(b => {
            b.externalExtra = b.externalExtra || {};
            b.participants.forEach(p => {
                p.ageAtStart = startDate.diff(Moment(p.age), 'years');//@ts-ignore
                p.ageGroup = W.find(w => w.filter(p.ageAtStart)).singular;
                p.displayAge = ageWidgets.displayAgeParticipant(p);
                p.prettyUpdatedAt = Moment(p.updatedAt).format('L');
                p.prettyCreatedAt = Moment(p.createdAt).format('L');
                p.externalExtra = p.externalExtra || {};
                p.internalExtra = p.internalExtra || {};
            })
        });

        this.setState({bookings: bookings})
    }

    render() {

        //prevent render until we have the data available.
        if (!this.props.Event || !this.props.Bookings || !this.props.Event.get("user")) return <div>Loading Data</div>;


        const event = this.props.Event.toJS();

        const showApplications = event.bookingPolicy === 'approved' && event.applications;

        const ApplicationsTab = showApplications ?
            manageWholeEventWrapper(() => <CustomTab
                to={"/event/" + this.props.match.params.eventId + "/manage/applications"}
                label={'Applications (' + event.applications.length + ')'} activeOnlyWhenExact={undefined}/>) : () => null;

        const VillagesTab = manageWholeEventWrapper(() => event.bigCampMode ? <CustomTab
            to={"/event/" + this.props.match.params.eventId + "/manage/villages"} label="Villages"
            activeOnlyWhenExact={undefined}/> : null);
        const RolesTab = manageWholeEventWrapper(() => <CustomTab
            to={"/event/" + this.props.match.params.eventId + "/manage/roles"} label="Roles"
            activeOnlyWhenExact={undefined}/>);

        const MoneyTab = manageMoneyWrapper(() => <CustomTab
            to={"/event/" + this.props.match.params.eventId + "/manage/money"} label="Money"
            activeOnlyWhenExact={undefined}/>);

        const MembershipsTab = manageWholeEventWrapper(() => event.customQuestions.adultEmail ? <CustomTab
            to={"/event/" + this.props.match.params.eventId + "/manage/memberships"} label="Memberships"
            activeOnlyWhenExact={undefined}/> : null);

        const {Bookings, ...props} = this.props;
        // @ts-ignore
        return (<React.Fragment>
                <Row>
                    <Col>
                        <Nav tabs>
                            <CustomTab activeOnlyWhenExact to={"/event/" + this.props.match.params.eventId + "/manage"}
                                       label="Participants"/>
                            <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/bookings"}
                                       label="Bookings" activeOnlyWhenExact={undefined}/>
                            <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/kp"} label="Kp"
                                       activeOnlyWhenExact={undefined}/>
                            <VillagesTab {...this.props}/>
                            <RolesTab {...this.props}/>
                            <ApplicationsTab {...this.props}/>
                            <MoneyTab {...this.props} />
                            <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/emails"}
                                       label="Emails" activeOnlyWhenExact={undefined}/>
                            <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/birthdays"}
                                       label="🎂" activeOnlyWhenExact={undefined}/>
                            <CustomTab to={"/event/" + this.props.match.params.eventId + "/manage/graphs"}
                                       label="📈" activeOnlyWhenExact={undefined}/>
                            <MembershipsTab {...this.props} />
                        </Nav>
                    </Col>
                </Row>
                <Switch>
                    <Route exact path="/event/:eventId(\d+)/manage">
                        <Filter bookings={this.state.bookings} {...props} >
                            <ParticipantsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/participants">
                        <Filter bookings={this.state.bookings} {...props} >
                            <ParticipantsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/bookings">
                        <Filter bookings={this.state.bookings} {...props} >
                            <BookingsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/kp">
                        <Filter bookings={this.state.bookings} {...props} >
                            <KpPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/emails">
                        <Filter bookings={this.state.bookings} {...props} >
                            <EmailsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/birthdays">
                        <Filter bookings={this.state.bookings} {...props} >
                            <BirthdaysPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/applications">
                        <ApplicationPage bookings={this.state.bookings} {...props} />
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/villages">
                        <VillagePage bookings={this.state.bookings} {...props} />
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/roles">
                        <RolesPage bookings={this.state.bookings} {...props} />
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/money">
                        <MoneyPage bookings={this.state.bookings} {...props} />
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/graphs">
                        <Filter bookings={this.state.bookings} {...props} >
                            <GraphsPage/>
                        </Filter>
                    </Route>
                    <Route path="/event/:eventId(\d+)/manage/memberships">
                        <Filter bookings={this.state.bookings} {...props} >
                            <MembershipsPage/>
                        </Filter>
                    </Route>
                </Switch>
            </React.Fragment>


        );
    }
}


//we could still have no bookings..
const mapStateToProps = (state, props) => {

    const User = state.getIn(["User", "user"]);
    const UserList = state.getIn(["User", "list"]);
    const Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    const Bookings = state.getIn(["Bookings", "bookings"]);
    return {User, UserList, Event, Bookings};
};

const mapDispatchToProps = {
    getEventBookings: bookings.actions.getEventBookings,
    getEventDetails: events.actions.getEventDetails,
    togglePaid: togglePaid,
    approve: approve,
    decline: decline,
    assignVillage: assignVillage,
    addVillage: addVillage,
    deleteVillage: deleteVillage,
    renameVillage: renameVillage,
    getUserList: getUserList,
    addRole: addRole,
    deleteRole: deleteRole,
    addPayment: addPayment,
    deletePayment: deletePayment,
    syncMax: syncMax,
    approveMembership: approveMembership,
    unapproveMembership: unapproveMembership,
    approveDBS: approveDBS,
    unapproveDBS: unapproveDBS
};

const VisibleManageContainerPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(manageEventCheck(ManageContainerPage));

export default VisibleManageContainerPage;

const CustomTab = ({label, to, activeOnlyWhenExact}) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({match}) => (
            <NavItem>
                <NavLink className={classnames({active: match})} tag={Link} to={to}>
                    {label}
                </NavLink>
            </NavItem>)}
    />
);


