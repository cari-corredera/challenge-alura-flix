import styles from "./ListaCategoria.module.css"

function ListaCategorias({selectedCategory, onChange }) {
    const handleCategoriaChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className={styles.categorias}>
            <label>Categorías</label>
            <select value={selectedCategory} className={styles.listaCategorias} name="categoria" onChange={handleCategoriaChange}>
                <option value="frontEnd">Front End</option>
                <option value="backEnd">Back End</option>
                <option value="innovgestion">Innovación y Gestión</option>
            </select>
        </div>

    )
}

export default ListaCategorias;