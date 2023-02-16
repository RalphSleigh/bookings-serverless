import * as React      from 'react'


//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    PieChart,
    Pie,
    LabelList
} from 'recharts';


import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';

import ageFactory from "../../age";

import Moment from 'moment';

export default class Graphs extends React.Component<any, any> {
    private ageWidgets: { BookingFormWidget: (props) => JSX.Element; displayAgeParticipant: (p) => string; participantCardField: (p) => JSX.Element; displayAgeCSV: (p) => string; displayAgeMoment: (age, event) => string } | { BookingFormWidget: (props) => JSX.Element; displayAgeParticipant: (p) => any; participantCardField: (p) => JSX.Element; displayAgeCSV: (p) => string; displayAgeMoment: (age, event) => any };

    constructor(props) {
        super(props);

        this.state = {expanded: null};

        this.ageWidgets = ageFactory(this.props.Event.toJS());
    }

    componentWillReceiveProps() {
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.participants;

        if (participants.length === 0) return <p>No participants to graph</p>;

        const participantsData = [];

        participants.forEach(p => p.createdAt = Moment(p.createdAt));

        const sortedParticipants = participants.sort((a, b) => a.createdAt - b.createdAt);

        const startDate = Moment.utc(sortedParticipants[0].createdAt).endOf('day');
        const endDate = Moment().endOf('day').add(1, 'hour');

        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
//@ts-ignore
            participantsData.push({
                                      'name': m.format('Do MMM'),
                                      tot:    sortedParticipants.filter(p => p.createdAt.isBefore(m)).length
                                  })
        }

        const ageData = [];

        for (let age = 0; age < 101; age++) {
            //@ts-ignore
            ageData.push({'name': age, tot: sortedParticipants.filter(p => p.ageAtStart === age).length})
        }

        const dietData = [
            {name: 'omnivore', value: 0},
            {name: 'pescetarian', value: 0},
            {name: 'vegetarian', value: 0},
            {name: 'vegan', value: 0},
        ];

        participants.forEach(p => {
            //@ts-ignore
            dietData.find(d => d.name === p.diet).value++
        });

        return (<React.Fragment>
            <Row>
                <Col>
                    <h4>Participants booked</h4>
                    <ResponsiveContainer width={"100%"} height={300}>
                        <LineChart
                            data={participantsData}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 40,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name" tick={<CustomizedAxisTick/>} interval={6}/>
                            <YAxis label={{value: 'Participants', angle: -90, position: 'insideLeft'}}/>
                            <Line dot={false} type="stepAfter" dataKey="tot" stroke="#8884d8"/>
                        </LineChart>
                    </ResponsiveContainer>
                    <h4>Age Breakdown</h4>
                    <ResponsiveContainer width={"100%"} height={300}>
                        <BarChart
                            data={ageData}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 30,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name" label="Age" interval={4}/>
                            <YAxis label={{value: 'Participants', angle: -90, position: 'insideLeft'}}/>
                            <Bar dataKey="tot" fill="#8884d8">
                                {
                                    ageData.map((entry, index) => {
                                        const color = ageColour(index);
                                        return <Cell key={entry} fill={color}/>;
                                    })
                                }</Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    <h4>Diet</h4>
                    <ResponsiveContainer width={"100%"} height={300}>
                        <PieChart>
                            <Pie nameKey="name" data={dietData} dataKey="value" cx={"50%"} cy={"50%"} outerRadius={120}
                                 fill="#8884d8" label>
                            </Pie>
                            <Legend align="right" layout="vertical" verticalAlign="middle"/>
                        </PieChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </React.Fragment>);
    }
}

const ageColour = age => {
    switch (age) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return '#FFEE82'
        case 6:
        case 7:
        case 8:
        case 9:
            return '#80FF75'
        case 10:
        case 11:
        case 12:
            return '#8EFFDB'
        case 13:
        case 14:
        case 15:
            return '#706DFF'
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            return '#E7A0FF'
        default:
            return '#FF817A'
    }
}

class CustomizedAxisTick extends React.Component<any, any> {
    render() {
        const {
                  x, y, stroke, payload,
              } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-45)">{payload.value}</text>
            </g>
        );
    }
}