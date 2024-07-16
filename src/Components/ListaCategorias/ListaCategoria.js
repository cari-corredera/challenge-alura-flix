import styles from "./ListaCategoria.module.css"

function ListaCategorias (){
    return(
        <div className={styles.categorias}>
            <label>Categorías</label>
            <select className={styles.listaCategorias}>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Innovación y Gestión">Innovación yGestion</option>
            </select>
        </div>

    )
}

export default ListaCategorias;