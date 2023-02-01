import * as React                       from 'react'
import update                      from 'immutability-helper';
import * as P                      from '../../../shared/permissions'
import debounce                    from 'debounce'
import Moment     from 'moment'

import Select from 'react-select'

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
    CardImgOverlay,
    Nav,
    NavItem,
    NavLink,
    TabContents,
    TabPane
} from 'reactstrap';

export default class Filter extends React.Component<any, any> {
    private bounceUpdate: any;

    constructor(props) {
        super(props);

        const participants = this.props.bookings.reduce((r, b) => [...r, ...b.participants], []);


        this.state = {
            orgs:     [],
            villages: [],
            day:      null,
            search:   '',
            food:     'all',
            data:     {bookings:      this.props.bookings,
                participants:         participants,
                filteredBookings:     this.props.bookings,
                filteredParticipants: participants
            }
        };
        this.updateOrgs = this.updateOrgs.bind(this);
        this.updateVillages = this.updateVillages.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.updateDay = this.updateDay.bind(this);
        this.searchBooking = this.searchBooking.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateFood = this.updateFood.bind(this);
        this.bounceUpdate = debounce(() => this.updateData(this.props), 500);
    }

    componentWillReceiveProps(nextProps) {
        this.updateData(nextProps)
    }

    updateOrgs(orgs) {
        this.setState(update(this.state, {orgs: {$set: orgs}}));
        this.bounceUpdate();
    }

    updateVillages(villages) {
        this.setState(update(this.state, {villages: {$set: villages}}));
        this.bounceUpdate();
    }

    updateDay(day) {
        this.setState(update(this.state, {day: {$set: day}}));
        this.bounceUpdate();
    }

    updateFood(e) {
        this.setState(update(this.state, {food: {$set: e.target.value}}));
        this.bounceUpdate();
    }

    updateSearch(e) {
        this.setState(update(this.state, {search: {$set: e.target.value}}));
        this.bounceUpdate();
    }

    updateData(source) {
        let filteredBookings = source.bookings.filter(b => {
            if (this.state.food === 'all') return true;
            if (this.state.food === 'out' && b.externalExtra.foodOptOut) return true;
            if (this.state.food === 'central' && !b.externalExtra.foodOptOut) return true;
            return false;
        }).filter(b => {
            if (b.totalParticipants) b.participants = b.totalParticipants;
            if (this.state.orgs.length === 0) return true;
            return this.state.orgs.find(o => o.value === b.organisationId)
        }).filter(b => {
            if (this.state.villages.length === 0) return true;
            return this.state.villages.find(v => v.value === b.villageId)
        });

        if (this.state.day) filteredBookings = filteredBookings.map(b => {
            b.totalParticipants = b.participants;
            b.participants = b.participants.filter(p => p.days & this.state.day.value);
            return b;
        });

        let searchedBookings = filteredBookings;

        if (this.state.search.length > 2) searchedBookings = filteredBookings.reduce(this.searchBooking, []);

        const participants = searchedBookings === this.state.data.bookings ? this.state.data.participants : searchedBookings.reduce((r, b) => [...r, ...b.participants], []);//just easier to do this here than find a plain javascript object map function
        const filteredParticipants = filteredBookings.reduce((r, b) => [...r, ...b.participants], []).filter(p => p.name.toLowerCase().includes(this.state.search.toLowerCase().trim()));

        this.setState(update(this.state, {
            data: {
                $set: {
                    participants:         participants,
                    bookings:             searchedBookings,
                    filteredParticipants: filteredParticipants,
                    filteredBookings:     filteredBookings
                }
            }
        }));

    }

//TODO: Proper server side database searching
    searchBooking(R, booking) {
        const term = this.state.search.toLowerCase().trim();

        booking.totalParticipants = booking.participants;

        // const newParticipants = booking.participants.filter(p => p.name.includes(term));

        booking.district = booking.district || '';

        const bookingFound = (
            booking.userName.toLowerCase().includes(term)
            || booking.userEmail.toLowerCase().includes(term)
            || booking.userContact.toLowerCase().includes(term)
            || booking.district.toLowerCase().includes(term));

        //if (bookingFound || newParticipants.length > 0) {
        if (bookingFound) {
            //booking.participants = newParticipants;
            R.push(booking);
            return R
        }
        return R
    }

    render() {

        const user = this.props.User.toJS();
        const event = this.props.Event.toJS();
        const wholeEvent = P.manageWholeEvent(user, event);

        const orgOptions = this.props.Event.get("organisations").map(o => {
            return {label: o.get("name"), value: o.get("id"), id: o.get("id")}
        }).toArray();

        const villageOptions = this.props.Event.get("villages").map(v => {
            return {label: v.get("name"), value: v.get("id"), id: v.get("id")}
        }).toArray();

        orgOptions.forEach(o => {
            o.isDisabled = !P.viewOrganisation(user, event, o)
        });


        villageOptions.forEach(v => {
            v.isDisabled = !P.viewVillage(user, event, v)
        });

        const startDate = Moment.utc(event.startDate).startOf('day');
        const endDate = Moment.utc(event.endDate).startOf('day').add(1, 'days');
        const days = [];
        let mask = 0;

        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {//@ts-ignore
            days.push({label: m.format("dddd Do"), value: Math.pow(2, mask)});
            mask++;
        }

        const {Bookings, Participants, bookings, ...rest} = this.props;

        return (
            <React.Fragment>
                <Form>
                    <FormGroup row className="mt-3">
                        {event.bigCampMode ? <React.Fragment>
                            {event.organisationsEnabled ?
                                <Col sm={3}>
                                    <Label>Filter by Organisation:</Label>
                                    <Select
                                        isMulti
                                        onChange={this.updateOrgs}
                                        placeholder={wholeEvent ? "All Organisations" : "All Permissible Organisations"}
                                        options={orgOptions}
                                    />
                                </Col> : null}
                            <Col sm={3}>
                                <Label>Filter by Village:</Label>
                                <Select
                                    isMulti
                                    onChange={this.updateVillages}
                                    placeholder={wholeEvent ? "All Villages" : "All Permissible Villages"}
                                    options={villageOptions}
                                />
                            </Col></React.Fragment> : null}
                        <Col sm={3}>
                            <Label>Filter by Day:</Label>
                            <Select
                                onChange={this.updateDay}
                                placeholder="Any"
                                options={days}
                            />
                        </Col>
                        <Col sm={3}>
                            <Label className="control-label">Search:</Label>
                            <Input type="text"
                                   value={this.state.search}
                                   onChange={this.updateSearch}
                                   placeholder="Search"/>
                        </Col>
                        {event.customQuestions.foodOptOut ?
                            <Col sm={3}>
                                <Label className="control-label">Food:</Label>
                                <Input type="select"
                                       value={this.state.food}
                                       onChange={this.updateFood}>
                                    <option value="all">All</option>
                                    <option value="central">Central Only</option>
                                    <option value="out">Opt-out Only</option>
                                </Input>
                            </Col> : null}
                    </FormGroup>
                </Form>
                {         // @ts-ignore
                    React.cloneElement(this.props.children, {...this.state.data, ...rest})}
            </React.Fragment>
        );

    }
}
