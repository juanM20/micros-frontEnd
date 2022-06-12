import React from 'react'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


const Place = (props) => {

    const [state, setstate] = useState(false);


    useEffect(() => {
        setstate(props.statePlace)
    }, [props.statePlace]) 

    const toggleState = () => {
       state ? setstate(false) : setstate(true)
    }

    return (
        <div>
            <Card
                bg="dark"
                key="Dark"
                text="white"
                style={{ width: '15rem', height: '15rem' }}
                className="mb-2"
            >
                <Card.Header>Estacionamiento</Card.Header>
                <Card.Body>
                    <Card.Title>Lugar {props.placeNumber}</Card.Title>
                    {state ? <Card.Text>Apartado</Card.Text> : <Card.Text>Libre</Card.Text>}
                    {state ? <Button onClick={toggleState} variant="danger">Cancelar</Button>: <Button onClick={toggleState} variant="primary">Reservar</Button>}
                </Card.Body>

            </Card>
        </div>
    )
}

export default Place