import * as React from 'react'
//import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import {Route, Switch} from 'react-router-dom';

import App from './app'
import * as user from './user'
import * as events from './events'
import * as bookings from './bookings'
import * as manage from './manage'

export default (
    <App>
        <Switch>
            <Route exact path="/" component={events.listPage}/>
            <Route path="/user" component={user.userPage}/>
            <Route path="/event/create" component={events.createPage}/>
            <Route path="/event/:eventId(\d+)">
                <Switch>
                    <Route exact path="/event/:eventId(\d+)/book" component={bookings.myBookingPage}/>
                    <Route exact path="/event/:eventId(\d+)/book/thanks" component={bookings.thanksPage}/>
                    <Route exact path="/event/:eventId(\d+)/apply" component={bookings.applyPage}/>
                    <Route exact path="/event/:eventId(\d+)/apply/thanks" component={bookings.applyThanksPage}/>
                    <Route exact path="/event/:eventId(\d+)/edit" component={events.editPage}/>
                    <Route path="/event/:eventId(\d+)/manage"
                           component={manage.containerPage /* Loads all Bookings for an event */}/>
                </Switch>
            </Route>
            <Route path="/booking/:bookingId" component={bookings.loader}/>
            <Route path="/cancel" component={bookings.cancelPage}/>
            <Route path="/guestUUID/:eventId(\d+)/:guestUUID" component={bookings.myBookingPage}/>
        </Switch>
    </App>
)
