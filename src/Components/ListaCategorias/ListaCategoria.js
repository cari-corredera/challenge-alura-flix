import styles from "./ListaCategoria.module.css"

function ListaCategorias({ onChange }) {
    const handleCategoriaChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className={styles.categorias}>
            <label>Categorías</label>
            <select className={styles.listaCategorias} name="categoria" onChange={handleCategoriaChange}>
                <option value="frontend">Front End</option>
                <option value="backend">Back End</option>
                <option value="innovgestion">Innovación yGestion</option>
            </select>
        </div>

    )
}

export default ListaCategorias;