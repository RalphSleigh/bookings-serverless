import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import paymentReference from '../../../../shared/paymentReference'

import {
    Button,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay
} from 'reactstrap';

export default class PaymentForm extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.selectPaymentType = this.selectPaymentType.bind(this);
    }

    selectPaymentType(e) {
        this.props.updateValidation();
        this.props.update("paymentType", e.target.value);
    }

    valid(item) {
        if (this.props.validating && (!item || item === "")) return false;
        return null;
    }

    render() {
        const radios = this.props.event.paymentTypes.map(p =>
            <FormGroup check inline key={p}>
                <Label check>
                    <Input type="radio" value={p}
                           onChange={this.selectPaymentType}
                           checked={this.props.chosen === p}/>
                    {p}
                </Label>
            </FormGroup>);

        const paymentText = this.props.booking.id ? this.props.event.paymentInfo.replace(/(%%%%)/g, paymentReference(this.props.booking.id)) : this.props.event.customQuestions.annonPayment || this.props.event.paymentInfo;

        return (<React.Fragment>
            <FormGroup row>
                <Label sm={2}>Payment Method:</Label>
                <Col sm={10} className="pt-2">
                    {radios}
                </Col>
            </FormGroup>
            <Row>
                <Col>
                    <ReactMarkdown  children={paymentText}/>
                </Col>
            </Row>
        </React.Fragment>);

    }
}