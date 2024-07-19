import ListaCategorias from "Components/ListaCategorias/ListaCategoria";
import styles from "./EditForm.module.css"
import { useState, useEffect } from "react";



function EditForm({ onSubmit, initialData }) {
    const [formData, setFormData] = useState(initialData || {});

    useEffect(() => {
        setFormData(initialData || {});
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    if (!formData) return null;

    return (
        <section className={styles.formulario}>
            <form className={styles.containerModal} onSubmit={handleSubmit}>

                <h2
                    className={styles.tituloModal}>EDITAR CARD:

                </h2>

                <div className={styles.titulo}>
                    <label>
                        Titulo:
                    </label>
                    <input
                        type="text"
                        name="titulo"
                        value={formData.titulo || ''}
                        onChange={handleChange}
                    />

                </div>

                <div className={styles.categorias}>
                    <ListaCategorias />
                </div>

                <div className={styles.imagen}>
                    <label>
                        Imagen:
                    </label>
                    <input
                        type="text"
                        name="imagen"
                        value={formData.imagen || ''}
                        onChange={handleChange}
                    />

                </div>

                <div className={styles.video}>
                    <label>
                        Video:
                    </label>
                    <input
                        type="text"
                        name="video"
                        value={formData.video || ''}
                        onChange={handleChange}
                    />

                </div>

                <div className={styles.descripcion}>
                    <label>
                        Descripción:
                    </label>
                    <textarea
                        name="descripción"
                        value={formData.descripción || ''}
                        onChange={handleChange}>
                    </textarea>

                </div>

                <div className={styles.btn}>
                    <button className={styles.btnGuardar} type="submit" value="guardar">GUARDAR
                    </button>
                    <button className={styles.btnLimpiar} type="reset" value="limpiar formulario" onClick={() => setFormData({ titulo: '', categoria: 'frontend', imagen: ''
                        , video: '', descripcion: '' })}>LIMPIAR
                    </button>
                </div>
            </form>
        </section>
    )
}

export default EditForm;