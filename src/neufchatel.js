import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function Neufchatel() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button onClick={handleShow} variant="light"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/C%C5%93urs_de_Neufch%C3%A2tel_01.jpg/520px-C%C5%93urs_de_Neufch%C3%A2tel_01.jpg" /> <p>Le Neufchatel</p></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Le Neufchatel</Modal.Title>
                </Modal.Header>
                <Modal.Body>Le neufchâtel est un fromage français fabriqué dans le pays de Bray et plus particulièrement aux alentours de Neufchâtel-en-Bray. Cette appellation d'origine est préservée via une AOC depuis 1969.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Quitter</Button>
                    <Button variant="info"><a href="https://fr.wikipedia.org/wiki/Neufch%C3%A2tel_(fromage)" target="_blank"> En savoir plus</a></Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Neufchatel;