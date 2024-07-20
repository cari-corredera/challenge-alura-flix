import styles from "./Banner.module.css"

function Banner({ img, color, src }) {

    return (
        <section className={styles.capa}
            style={{ backgroundImage: `url("/img/banner-${img}.png")` }}>


            <div className={styles.videoDestacado}>
                <div className={styles.player}>
                    <img src={`/img/banner-${src}.png`} alt="Imagen video"/>
                </div>

                <div className={styles.info}>
                    <button className={styles.btnCategoria}>FRONT END
                    </button>

                    <h3>Challenge react</h3>

                    <p>Este challenge es una forma de aprendizaje.Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React</p>
                </div>
            </div>
        </section>
    )
}

export default Banner;