import styles from "./index.module.css"
import Cabecera from "../../Components/Cabecera/Cabecera"
import Footer from "Components/Footer/Footer";
import ListaCategorias from "Components/ListaCategorias/ListaCategoria";

function NuevoVideo() {
    return(
        <>
            <Cabecera/>
            <section >
                <form className={styles.containerModalVideo}>

                <div className={styles.titulos}>
                    <h2 className={styles.tituloModalVideo}>NUEVO VIDEO</h2>
                    <h6>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h6>
                </div>

                <div className={styles.formulario}>
                    <h4 className={styles.titCrearTarj}>Crear Tarjeta</h4>
                    <div className={styles.contenedor}>
                        {/* <div className={styles.filaUno}> */}
                            <div className={styles.titulo}>
                                <label className={styles.labelTitulo}>
                                        Titulo:
                                </label>
                                <input 
                                    className={styles.inputTitulo}
                                    placeholder="Ingrese el título"
                                    type="text"
                                    name="titulo" 
                                />
                               
                            </div>

                            <ListaCategorias/>
                        {/* </div> */}

                        {/* <div className={styles.filaDos}> */}
                            <div className={styles.imagen}>
                                <label className={styles.labelImagen}>
                                    Imagen:
                                </label>
                                <input
                                    className={styles.inputImagen}
                                    placeholder="El enlace es obligatorio"
                                    type="text"
                                    name="imagen"
                                   
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

                                />   
                               
                            </div>
                        {/* </div> */}

                        {/* <div className={styles.filaTres}> */}
                            <div className={styles.descripcion}>
                                <label className={styles.labelDescripcion}>
                                    Descripción:
                                
                                </label>
                                <textarea className={styles.textareaDescripcion}
                                    placeholder="¿De qué se trata este video?"
                                    name="descripción"
                                
                                   
                                >
                                </textarea>
                                
                            </div>
                        </div> 
                    </div>   
                {/* </div> */}

                    {/* <div className={styles.irArriba}>
                        <a href="#top">Ir arriba</a>
                    </div> */}

                    <div className={styles.btn}>
                        <button className={styles.btnGuardar} type="submit" value="guardar">GUARDAR 
                        </button>
                        <button className={styles.btnLimpiar} type="reset" value="limpiar formulario">LIMPIAR</button>  
                    </div>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default NuevoVideo;