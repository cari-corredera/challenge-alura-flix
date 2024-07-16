import styles from "./Categorias.module.css"
import Cards from "Components/Cards/Cards";

function Categorias ({title,nombreCategoria, cards, onEdit}){
    return(
        <>
            <section className={styles.categoria}>
                <h2 className={styles[nombreCategoria]}> { title }</h2>
                
                {cards.map(card => (
                    <Cards
                        key={card.id}
                        {...card}
                        onEdit={() => onEdit(card, nombreCategoria)}
                    />
                ))}
            </section>
            
            
            
        </>

    )
}

export default Categorias;
