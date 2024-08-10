import Cabecera from "../../Components/Cabecera/Cabecera";
import Banner from "../../Components/Banner/Banner";
import Categorias from "../../Components/Categorias/Categorias";
import Footer from "../../Components/Footer/Footer"
import styles from "./index.module.css"
import Modal from "Components/Modal/Modal";
import EditForm from "Components/EditForm/EditForm";
import { useState, useEffect } from "react";
import CabeceraLink from "Components/CabeceraLink/CabeceraLink";
import home from "./home.png";
import masNuevoVideo from "./masNuevoVideo.png"



function Inicio() {

    console.log("iconHome",home);
    console.log("iconVideo", masNuevoVideo);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cards, setCards] = useState([]);

    const [currentCard, setCurrentCard] = useState(null);

    const [currentCategory, setCurrentCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/cursos');
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error al obtener los cursos:', error);
            }
        };
        fetchData();
    }, []);
    

    const frontEndCourses = cards.filter(card => card.categoria === 'frontEnd');
    const backEndCourses = cards.filter(card => card.categoria === 'backEnd');
    const innovGestionCourses = cards.filter(card => card.categoria === 'innovgestion');



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
            const response = await fetch(`http://localhost:3001/cursos/${updatedCard.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedCard)
            });
    
            if (!response.ok) {
                throw new Error('Error al actualizar el curso');
            }
    
            const data = await response.json();
    
            setCards(prevCards => 
                prevCards.map(card => card.id === data.id ? data : card)
            );
    
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error al actualizar el curso:', error);
        }
    };
    
    

    const handleDeleteClick = async (cardId) => {
        try {
            const response = await fetch(`http://localhost:3001/cursos/${cardId}`, {
                method: 'DELETE'
            });
    
            if (!response.ok) {
                throw new Error('Error al eliminar el curso');
            }
    
            setCards(prevCards => prevCards.filter(card => card.id !== cardId));
        } catch (error) {
            console.error('Error al eliminar el curso:', error);
        }
    };
    



    return (
        <>
            <Cabecera />
            <Banner img="fondo" src="player" />

            <Categorias title="FRONT END" nombreCategoria="frontend" cards={frontEndCourses} onEdit={handleEditClick} onDelete={handleDeleteClick} />

            <Categorias title="BACK END" nombreCategoria="backend" cards={backEndCourses} onEdit={handleEditClick} onDelete={handleDeleteClick} />

            <Categorias title="INNOVACIÓN Y GESTIÓN" nombreCategoria="innovgestion" cards={innovGestionCourses} onEdit={handleEditClick} onDelete={handleDeleteClick} />

            <Footer
                iconHome={home}
                textHome="HOME"
                classHome="activo"
                iconVideo={masNuevoVideo}

            />   
            
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <EditForm onSubmit={handleFormSubmit} initialData={currentCard} initialCategory={currentCategory} />
            </Modal>
        </>
    )
}

export default Inicio;