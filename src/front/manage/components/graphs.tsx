import * as React      from 'react'


//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'

//import {
   // LineChart,
   // Line,
   // XAxis,
   // YAxis,
   // CartesianGrid,
   // Tooltip,
   // Legend,
   // ResponsiveContainer,
   // BarChart,
  //  Bar,
  //  Cell,
   // PieChart,
  //  Pie,
 //   LabelList
//} from 'recharts';


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
    
    constructor(props) {
        super(props);

    }

    componentWillReceiveProps() {
    }

    render() {
        return <p>disabled</p>
    }
}
/* 
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
 */
/* class CustomizedAxisTick extends React.Component<any, any> {
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
} */