import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as messages from '../messages'
import * as user from '../user'
import * as events from '../events'
import * as bookings from '../bookings'

import { withRouter } from 'react-router-dom';
import { matchPath } from 'react-router'

import {
    Container,
    Row,
    Col
} from 'reactstrap';


class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("App componentWillMount fetching props")
        this.props.getUser();
        this.props.getEvents();
        this.props.getUserBookings();
    }

    componentWillReceiveProps(nextProps) { //refresh bookings/events if we log in/out

        console.log("App componentWillReceivePropss now does nothing")
        /*
        if(nextProps.User !== null && nextProps.Events === null){
            console.log("events refresh123")
            this.props.getEvents();
        }
        if(nextProps.User !== null && nextProps.Bookings === null) {
            console.log("bookings refresh")
            this.props.getUserBookings();

        }
        if (this.props.User !== null && this.props.User !== nextProps.User) {
            console.log("Refreshing bookings/evens")
            this.props.getUserBookings();
            this.props.getEvents(); //need to drop the detailed event models if present
        }
        */
    }

    render() {


        //@ts-ignore
        const inManage = !!matchPath(location.pathname, {
            path: "/event/:eventId/manage",
            exact: false,
            strict: false
        });

        const isHome = !!matchPath(location.pathname, {
            path: "/",
            exact: true,
            strict: true
        });

        const isUser = !!matchPath(location.pathname, {
            path: "/user",
            exact: true,
            strict: true
        });


        const isCreate = !!matchPath(location.pathname, {
            path: "/event/create",
            exact: true,
            strict: true
        });

        //prevent render until we have the basic data available, this makes child components much simpler.
        if (this.props.User === null || this.props.Events === null || this.props.Bookings === null || ((!isHome && !isUser && !isCreate) && this.props.Events !== null && Object.entries(this.props.Events.toJS()).length === 0)) {

            console.log("NOT rendering, users:")
            console.log(this.props.User)
            console.log("NOT rendering: events:")
            console.log(this.props.Events)
            console.log("NOT rendering: bookings")
            console.log(this.props.Bookings)

            return (
                <div className="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>);
        }

        console.log("rendering")

        const envMarker = this.props.Env === 'dev' ? <div className="envMarker"><p>TEST</p></div> : null;

        return (
            <React.Fragment>
                {envMarker}
                <Container fluid={inManage}>
                    <Row className="align-items-center">
                        <Col>
                            <h2 className="align-middle">{window.location.hostname}</h2>
                        </Col>
                        <Col sm="auto">
                            <img className="float-right" src="/logo.png" style={{ height: "75px" }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/">Home</Link>
                        </Col>
                        <Col sm="auto">
                            <user.loginStatus />
                        </Col>
                    </Row>
                    <Row>
                        <messages.messages />
                    </Row>
                    {this.props.children}
                    <Row>
                        <Col>
                            <footer><p className="small text-center">&copy; 2023 <a
                                href="https://www.woodcraft.org.uk/">Woodcraft
                                Folk</a>, Source on <a href="https://github.com/RalphSleigh/bookings-serverless">Github</a>.</p>
                            </footer>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

//store.dispatch(user.actions.getUser());

const mapStateToProps = (state) => {
    let User = state.getIn(["User", "user"]);
    let Events = state.getIn(["Events", "events"]);
    let Bookings = state.getIn(["Bookings", "bookings"]);
    let Env = state.get("App");
    return { User, Events, Bookings, Env };
};

const mapDispatchToProps = {
    getUser: user.actions.getUser,
    getEvents: events.actions.getEvents,
    getUserBookings: bookings.actions.getUserBookings
};

var VisibleApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default withRouter(VisibleApp);




