import * as React from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import update from 'immutability-helper';

//import bookings from '../bookings'
import {manageWholeEventCheck} from '../permission'
import * as Immutable from "immutable";

import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,
    Input,
    Table,
    CardColumn,
    CardDeck
} from 'reactstrap';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

import { woodcraft as W } from '../../../shared/woodcraft.js'

//import W from '../../../shared/woodcraft.js'

class Villages extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {newVillageName: ''};

        this.onDragEnd = this.onDragEnd.bind(this);
        this.updateVillageName = this.updateVillageName.bind(this);
        this.addVillage = this.addVillage.bind(this);
        this.renameVillage = this.renameVillage.bind(this);
    };

    static textColour(total) {
        if (total < 80) return "green";
        if (total < 100) return "gold";
        return "red";
    };

    updateVillageName(e) {

        this.setState(update(this.state, {newVillageName: {$set: e.target.value}}));

        e.preventDefault()
    }

    addVillage(e) {
        this.props.addVillage({
            name: this.state.newVillageName,
            eventId: this.props.Event.get("id")
        });
        e.preventDefault();
        this.setState(update(this.state, {newVillageName: {$set: ''}}));
    }

    deleteVillage(id) {
        return e => {
            //@ts-ignore
            if (confirm("Are you sure you want to delete this village?")) {
                this.props.deleteVillage(id);
            }
            e.preventDefault();
        }
    }

    renameVillage(id, oldName) {
        return e => {
            //@ts-ignore
            const newName = prompt("Rename Village", oldName)
            if(newName && newName !== "") this.props.renameVillage(id, newName);
            e.preventDefault();
        }
    }

    onDragEnd(result) {
        if (result.destination === null) return;
        //@ts-ignore
        const bookingId = parseInt(/b([\d]+)/.exec(result.draggableId)[1]);
        //@ts-ignore
        const villageId = result.destination.droppableId === "empty" ? null : parseInt(/v([\d]+)/.exec(result.destination.droppableId)[1]);

        this.props.assignVillage(bookingId, villageId);
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = bookings.reduce((r, b) => [...r, ...b.participants], []);
        //const participants = this.props.Bookings.reduce((r, b) => r.concat(b.get("participants")), Immutable.List()).toJS();

        const villages = (event.villages || []).map(v => {

            v.participants = bookings.reduce((a, b) =>
                    b.villageId === v.id ? a + participants.filter(p => p.bookingId === b.id).length : a
                , 0);
            v.bookings = bookings.filter(b => b.villageId === v.id).map(b => {
                return {...b, size: participants.filter(p => p.bookingId === b.id).length}
            }).sort((a, b) => b.size - a.size);
            return v;
        }).sort((a,b) => {
            const numberA = /Village ([0-9]+)/.exec(a.name)
            const numberB = /Village ([0-9]+)/.exec(b.name)

            if(numberA && numberB){
                return parseInt(numberA[1]) - parseInt(numberB[1])
            } else {
                return (a.name || "").localeCompare((b.name || ""))
            }
        });

        const unassignedBookings = bookings.filter(b => b.villageId === null).map(b => {
            return {...b, size: participants.filter(p => p.bookingId === b.id).length}
        }).sort((a, b) => b.size - a.size);

        const unassignedBoxes = unassignedBookings.map(b =>
            <Draggable key={b.id} draggableId={'b' + b.id}>
                {(provided, snapshot) => {
                    const style = {
                        ...provided.draggableStyle,
                        cursor: 'pointer'
                    };

                    const participantList = b.participants.length < 6 ? b.participants.map(p => <li key={p.id}>{p.name}</li>) : null

                    return (
                        <div ref={provided.innerRef}
                             style={style}
                             {...provided.dragHandleProps}>
                            <Card className="mb-3">
                                <CardBody>
                                    <CardTitle>{(event.bigCampMode ? b.district : b.userName) + " (" + b.size + ")"}</CardTitle>
                                    <p>{b.campWith}</p>
                                    <ul>{participantList}</ul>
                                </CardBody>
                            </Card>
                        </div>)
                }}
            </Draggable>);

        const villageBoxes = villages.map(v => {
            const groups = W.reduce((a, w) => {
                const people = v.bookings.reduce((acc,c) => {
                    const current = c.participants.filter((p) => p.ageGroup === '' ? false : p.ageGroup === w.singular)
                    acc += current.length
                    return acc
                },0)
                if (people === 0) return a;
                return a + ` ${w.name}: ${people}`;
            }, '');


            const bookings = v.bookings.map(b =>

                <Draggable key={b.id} draggableId={'b' + b.id}>
                    {(provided, snapshot) => {

                        const style = {
                            ...provided.draggableStyle,
                            cursor: 'pointer'
                        };

                        return (
                            <div ref={provided.innerRef}
                                 style={style}
                                 {...provided.dragHandleProps}>
                                {(event.bigCampMode ? b.district : b.userName) + ' (' + b.size + ')'}
                            </div>)
                    }}
                </Draggable>
            );

            return <Droppable key={v.id} droppableId={'v' + v.id}>
                {(provided, snapshot) => (
                    <Card>
                        <CardBody>
                            <Button outline color="warning" onClick={this.deleteVillage(v.id)}
                                    className="float-right"
                                    aria-label="Close"><span aria-hidden="true"><FontAwesomeIcon
                                icon={faTimes}/></span>
                            </Button>
                            <CardTitle onClick={this.renameVillage(v.id, v.name)}>{v.name}</CardTitle>
                            <div ref={provided.innerRef} style={{minHeight: "20px"}}>
                                {bookings}
                                {provided.placeholder}
                            </div>
                            <p>
                                <b style={{color:Villages.textColour(v.participants)}}>Total: {v.participants}</b><br />
                                <span style={{fontSize:"80%"}}>{groups}</span>
                            </p>
                        </CardBody>
                    </Card>
                )}
            </Droppable>;
        });

        villageBoxes.push(<Card key="new">
                <CardBody>
                    <CardTitle>Add Village</CardTitle>
                    <Input type="text"
                           placeholder="Name"
                           value={this.state.newVillageName}
                           onChange={this.updateVillageName}

                    />
                    <Button className="mt-2"
                            disabled={this.state.newVillageName === ''}
                            color="success"
                            onClick={this.addVillage}>
                        <span aria-hidden="true"><FontAwesomeIcon
                            icon={faPlus}/></span> Add
                    </Button>
                </CardBody>
            </Card>
        );


        const villageCardDecks = villageBoxes.reduce((a, c) => {
            a[a.length - 1].length > 2 ? a.push([c]) : a[a.length - 1].push(c)
            return a
        }, [[]])
            .map((a, i) => <CardDeck className="mb-3" key={i}>{a}</CardDeck>);

        return (<DragDropContext onDragEnd={this.onDragEnd}>
            <Row>
                <Col>
                    <h4>Drag and drop to configure villages</h4>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <h5>Unassigned:</h5>
                    <Droppable droppableId="empty">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} className="unassignedVillages">
                                {unassignedBoxes}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </Col>
                <Col sm={9}>
                    {villageCardDecks}
                </Col>
            </Row>
        </DragDropContext>);
    }
}

export default manageWholeEventCheck(Villages);