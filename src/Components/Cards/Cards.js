import styles from "./Cards.module.css"
import iconBorrar from "./icon-borrar.png"
import iconEditar from "./icon-editar.png"


function Cards({ id, imagen, titulo, video, onEdit, onDelete }) {


    return (
        <div className={styles.container}>
            <div className={styles.contenedorImagen}>
                <a href={video}><img src={imagen} className={styles.imagen} alt={titulo} /></a>
            </div>
            <div className={styles.titulo}>
                <h3>{titulo}</h3>
            </div>
            <div className={styles.icon}>
                <button onClick={onDelete}>
                    <img src={iconBorrar} alt="Icono borrar" /> BORRAR
                </button>

                <button onClick={onEdit}>
                    <img src={iconEditar} alt="Icono editar" /> EDITAR
                </button>
            </div>
        </div>
    )
}

export default Cards;