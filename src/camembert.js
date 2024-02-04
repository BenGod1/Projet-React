import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function Camembert() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button onClick={handleShow} variant="light"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Camembert_%28Cheese%29.jpg/520px-Camembert_%28Cheese%29.jpg" /> <p>Le camembert</p></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Le camembert</Modal.Title>
                </Modal.Header>
                <Modal.Body>Camembert est une appellation générique qui désigne généralement un fromage à pâte molle et à croûte fleurie. Commercialement, cette appellation d'origine normande ne fait l'objet d'aucune protection et se voit utilisée pour des fromages n'ayant parfois que peu de rapport avec le camembert originel. Dans certaines régions de France, le camembert est appelé « claquos », « clacos », « calendos .</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Quitter</Button>
                    <Button variant="info"><a href="https://fr.wikipedia.org/wiki/Camembert_(fromage)" target="_blank"> En savoir plus</a></Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Camembert;