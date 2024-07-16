import styles from "./Categorias.module.css"
import Cards from "Components/Cards/Cards";

function Categorias({ title, nombreCategoria, cards, onEdit, onDelete }) {
    return (
        <>
            <section className={styles.categoria}>
                <h2 className={styles[nombreCategoria]}> {title}</h2>

                <div className={styles.contenedorCards}>
                    {cards.map(card => (
                        <Cards
                            key={card.id}
                            {...card}
                            onEdit={() => onEdit(card, nombreCategoria)}
                            onDelete={() => onDelete(card.id, nombreCategoria)}
                        />
                    ))}
                </div>
            </section>

        </>

    )
}

export default Categorias;
