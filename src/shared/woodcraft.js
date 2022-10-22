const moment = require('moment');
//this file contains age groups, etc

export const woodcraft = [
    {
        name: "Woodchips",
        singular: "Woodchip",
        filter: age => {
            return age < 6
        },
        getAge: event => Moment(event.startDate).subtract(3, 'years').toISOString()
    },
    {
        name: "Elfins",
        singular: "Elfin",
        filter: age => {
            return age > 5 && age < 10
        },
        getAge: event => Moment(event.startDate).subtract(7, 'years').toISOString()
    },
    {
        name: "Pioneers",
        singular: "Pioneer",
        filter: age => {
            return age > 9 && age < 13
        },
        getAge: event => Moment(event.startDate).subtract(11, 'years').toISOString()
    },
    {
        name: "Venturers",
        singular: "Venturer",
        filter: age => {
            return age > 12 && age < 16
        },
        getAge: event => Moment(event.startDate).subtract(14, 'years').toISOString()
    },
    {
        name: "DFs/Adults",
        singular: "DF/Adult",
        filter: age => {
            return age > 15
        },
        getAge: event => Moment(event.startDate).subtract(19, 'years').toISOString()
    },
];