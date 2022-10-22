import * as React from 'react'

export const name = "whole";
export const selection = "Whole event only";

import {
    Col
} from 'reactstrap';

export class Config extends React.Component<any, any> {

	render() {
		return null
	}

}

export class ParticipantWidget extends React.Component<any, any> {

    render() {
        return <Col sm={11}/>;
    }
}