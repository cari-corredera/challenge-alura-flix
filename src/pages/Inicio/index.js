import Cabecera from "../../Components/Cabecera/Cabecera";
import Banner from "../../Components/Banner/Banner";
import Categorias from "../../Components/Categorias/Categorias";
import Footer from "../../Components/Footer/Footer"
// import styles from "./index.module.css"
import Modal from "Components/Modal/Modal";
import EditForm from "Components/EditForm/EditForm";
import { useState, useEffect } from "react";



function Inicio() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cards, setCards] = useState({
        frontend: [],
        backend: [],
        innovgestion: []
    });

    const [currentCard, setCurrentCard] = useState(null);

    const [currentCategory, setCurrentCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const responses = await Promise.all([
                fetch('http://localhost:3001/frontend'),
                fetch('http://localhost:3001/backend'),
                fetch('http://localhost:3001/innovgestion')
            ]);
            const data = await Promise.all(responses.map(response => response.json()));
            setCards({
                frontend: data[0],
                backend: data[1],
                innovgestion: data[2]
            });
        };
        fetchData();
    }, []);



    const handleEditClick = (card, categoria) => {
        setCurrentCard(card);
        setCurrentCategory(categoria);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = async (updatedCard) => {
        try {
            const response = await fetch(`http://localhost:3001/${currentCategory}/${updatedCard.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedCard)
            });

            if (!response.ok) {
                throw new Error('Error al actualizar la tarjeta');
            }

            const data = await response.json();
            setCards(prevCards => ({
                ...prevCards,
                [currentCategory]: prevCards[currentCategory].map(card => card.id === data.id ? data : card)
            }));
            setIsModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteClick = async (cardId, currentCategory) => {
        try {
            const response = await fetch(`http://localhost:3001/${currentCategory}/${cardId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Error al eliminar la tarjeta');
            }

            setCards(prevCards => {
                const updatedCategory = prevCards[currentCategory] || [];
                return {
                    ...prevCards,
                    [currentCategory]: updatedCategory.filter(card => card.id !== cardId)
                };
            });
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>
            <Cabecera />
            <Banner img="fondo" src="player" />

            <Categorias title="FRONT END" nombreCategoria="frontend" cards={cards.frontend} onEdit={handleEditClick} onDelete={handleDeleteClick} />

            <Categorias title="BACK END" nombreCategoria="backend" cards={cards.backend} onEdit={handleEditClick} onDelete={handleDeleteClick} />

            <Categorias title="INNOVACIÓN Y GESTIÓN" nombreCategoria="innovgestion" cards={cards.innovgestion} onEdit={handleEditClick} onDelete={handleDeleteClick} />

            <Footer />
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <EditForm onSubmit={handleFormSubmit} initialData={currentCard} />
            </Modal>
        </>
    )
}

export default Inicio;