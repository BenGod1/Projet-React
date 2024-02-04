import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function Livarot() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button onClick={handleShow} variant="light"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Livarot_%28fromage%29_02.jpg/520px-Livarot_%28fromage%29_02.jpg" /> <p>Le livarot</p></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Le livarot</Modal.Title>
                </Modal.Header>
                <Modal.Body>Le livarot est un fromage à pâte molle à croûte lavée fabriqué en France en Normandie dans le pays d'Auge. Il bénéficie d'une AOC depuis 1975 et d'une AOP depuis 1996.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Quitter</Button>
                    <Button variant="info"><a href="https://fr.wikipedia.org/wiki/Livarot_(fromage)" target="_blank"> En savoir plus</a></Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Livarot;