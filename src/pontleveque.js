import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function PontLeveque() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button onClick={handleShow} variant="light"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pont-l%27%C3%89v%C3%AAque_03.jpg/520px-Pont-l%27%C3%89v%C3%AAque_03.jpg" /> <p>Le Neufchatel</p></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Le Pont l'Eveque</Modal.Title>
                </Modal.Header>
                <Modal.Body>Le pont-l’évêque est un fromage à pâte molle à croûte lavée de lait de vache produit et affiné en France sur le territoire de la Normandie historique. Il est protégé par une appellation d'origine.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Quitter</Button>
                    <Button variant="info"><a href="https://fr.wikipedia.org/wiki/Pont-l%27%C3%A9v%C3%AAque" target="_blank"> En savoir plus</a></Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PontLeveque;