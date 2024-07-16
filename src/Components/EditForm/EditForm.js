import ListaCategorias from "Components/ListaCategorias/ListaCategoria";
import styles from "./EditForm.module.css"
import { useState, useEffect } from "react";
import iconCerrarForm from "./iconCerrarForm.png"


function EditForm({ onSubmit, initialData}){
    const [formData, setFormData]= useState (initialData || {});

    useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData ({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    if (!formData) return null;

    return(
        <section className={styles.formulario}>
            <form className={styles.containerModal} onSubmit={handleSubmit}>
                <div className={styles.iconCerrarForm}>
                    <button>
                        <img src={iconCerrarForm} alt="Icono cerrar"/> 
                    </button> 
                </div>
                
                <h2 className={styles.tituloModal}>EDITAR CARD:</h2>
                
                <div className={styles.titulo}>
                    <label>
                        Titulo:
                        <input 
                        type="text"
                        name="titulo"
                        value={formData.titulo || ''}
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <ListaCategorias/>

               
                <div className={styles.imagen}>
                    <label>
                        Imagen:
                        <input
                        type="text"
                        name="imagen"
                        value={formData.imagen || ''}
                        onChange={handleChange}
                        />   
                    </label>
                </div>

                <div className={styles.video}>
                    <label>
                        Video:
                        <input
                        type="text"
                        name="video"
                        value={formData.video || ''}
                        onChange={handleChange}
                        />   
                    </label>
                </div>

                <div className={styles.descripcion}>
                    <label>
                        Descripción:
                        <textarea
                            name="descripción"
                            value={formData.descripción || ''}
                            onChange={handleChange}>
                        </textarea>
                    </label>
                </div>

                <div className={styles.btn}>
                    <button className={styles.btnGuardar} type="submit">GUARDAR 
                    </button>
                    <button className={styles.btnLimpiar} type="submit">LIMPIAR</button>  
                </div>
            </form>
        </section>
    )
}

export default EditForm;