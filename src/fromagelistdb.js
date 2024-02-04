import React, { useState } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://fvniggiddjwhmrgqbrra.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bmlnZ2lkZGp3aG1yZ3FicnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODcxNjMsImV4cCI6MjAyMjQ2MzE2M30.o-xPq1qIYKD-252XVLgmqLs_tVBcEQEQyUiP4NftBXg");


const ButtonDB = () => {
    const [showModal, setShowModal] = useState(false);
    const [fromagesData, setFromagesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const { data, error } = await supabase.from('fromages').select('name, description');

            if (error) {
                throw new Error('Erreur lors de la récupération des données');
            }

            setFromagesData(data);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const openModal = () => {
        fetchData();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <div>
            <Button variant="primary" onClick={openModal}>
                Autres fromages français
            </Button>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Fromages depuis Supabase</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoading ? (
                        <p>Chargement...</p>
                    ) : isError ? (
                        <p>Erreur lors du chargement des données</p>
                    ) : (
                        fromagesData.map((fromage) => (
                            <Card key={fromage.name}>
                                <Card.Body>
                                    <Card.Title>{fromage.name}</Card.Title>
                                    <Card.Text>{fromage.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ButtonDB;