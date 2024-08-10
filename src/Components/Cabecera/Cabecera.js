import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo-flix.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"




function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <Link to={"/"}>
                <section className={styles.logoContainer}>
                    <img src={logo} alt=" Logo ALuraFlix" />
                </section>
            </Link>

            <nav className={styles.botones}>
                <CabeceraLink url="/">
                    <button className={styles.btnHome}>
                        HOME 
                    </button>
                </CabeceraLink>

                <CabeceraLink url="./nuevovideo">
                    <button className={styles.btnVideo}>
                        NUEVO VIDEO
                    </button>
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera;