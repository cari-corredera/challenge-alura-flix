import { useState } from "react";
import styles from "./index.module.css"
import Cabecera from "../../Components/Cabecera/Cabecera"
import Footer from "Components/Footer/Footer";
import ListaCategorias from "Components/ListaCategorias/ListaCategoria";
import home from "./home.png";
import masNuevoVideo from "./masNuevoVideo.png"


function NuevoVideo() {

    const [formData, setFormData] = useState({
        titulo: '',
        categoria: 'frontEnd',
        imagen: '',
        video: '',
        descripcion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('FormData before submit:', formData);
    
        if (!formData.categoria) {
            console.error('Error: La categoría no está definida');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/cursos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Error al crear el video');
            }
            const data = await response.json();
            console.log('Video creado:', data);
            // Limpia el formulario después de enviarlo
            setFormData({
                titulo: '',
                categoria: 'frontEnd',
                imagen: '',
                video: '',
                descripcion: ''
            });
        } catch (error) {
           console.log(formData.categoria); console.error('Error:', error);
        }
    };

    return (
        <>
            <Cabecera />
            <section>
                <form className={styles.containerNuevoVideo} onSubmit={handleSubmit}>

                    <div className={styles.titulos}>
                        <h2 className={styles.tituloModalVideo}>NUEVO VIDEO</h2>
                        <h6>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h6>
                    </div>

                    <div className={styles.formulario}>
                        <h4 className={styles.titCrearTarj}>Crear Tarjeta</h4>
                        
                        <div className={styles.contenedor}>
                            <div className={styles.titulo}>
                                <label className={styles.labelTitulo}>
                                    Titulo:
                                </label>
                                <input
                                    className={styles.inputTitulo}
                                    placeholder="Ingrese el título"
                                    type="text"
                                    name="titulo"
                                    value={formData.titulo}
                                    onChange={handleChange}
                                   
                                />

                            </div>

                            <ListaCategorias onChange={(categoria) => setFormData(prevData => ({ ...prevData, categoria }))}/>

                            <div className={styles.imagen}>
                                <label className={styles.labelImagen}>
                                    Imagen:
                                </label>
                                <input
                                    className={styles.inputImagen}
                                    placeholder="El enlace es obligatorio"
                                    type="text"
                                    name="imagen"
                                    value={formData.imagen}
                                    onChange={handleChange}

                                />

                            </div>

                            <div className={styles.video}>
                                <label className={styles.labelVideo}>
                                    Video:
                                </label>
                                <input
                                    className={styles.inputVideo}
                                    placeholder="Ingrese el enlace del video"
                                    type="text"
                                    name="video"
                                    value={formData.video}
                                    onChange={handleChange}

                                />

                            </div>
                            
                            <div className={styles.descripcion}>
                                <label className={styles.labelDescripcion}>
                                    Descripción:

                                </label>
                                <textarea className={styles.textareaDescripcion}
                                    placeholder="¿De qué se trata este video?"
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleChange}


                                >
                                </textarea>

                            </div>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <button className={styles.btnGuardar} type="submit" value="guardar">GUARDAR
                        </button>
                        <button className={styles.btnLimpiar} type="reset" value="limpiar formulario" onClick={() => setFormData({ titulo: '', categoria: 'frontend', imagen: ''
                        , video: '', descripcion: '' })}>LIMPIAR</button>
                    </div>
                </form>
            </section>
            <Footer
                iconHome={home}
                iconVideo={masNuevoVideo}
                textVideo="Nuevo Video"
                classVideo="activo"
            />  
        </>
    )
}

export default NuevoVideo;