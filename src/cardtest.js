import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import fromageData from './fromage.json';
import './image.css';

const CardComponent = ({ name, image, description, link }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Card style={{ width: '18rem' }} className='cardCenter'>
                {<Card.Img variant="top" className='cardImg' src={image} />}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.length > 100 ? description.substring(0, 100) + '...' : description}</Card.Text>
                    <Button variant="dark" onClick={handleShow} className='buttonCenter'>
                        Voir plus
                    </Button>
                    <Button variant="info" ><a href={link} target="_blank"> En savoir plus</a></Button>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={image} alt={name} style={{ maxWidth: '100%' }} />
                    <p>{description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"  onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
function ItemList1() {
    return (
        <div className="centered" >
            {fromageData.map((fromage, key) => (
                <CardComponent
                    key={key}
                    name={fromage.fromagename}
                    description={fromage.fromagesummary}
                    image={fromage.fromageimg}
                    link={fromage.fromagelink}
                />
            ))}
        </div>
    );
}

export default ItemList1;
