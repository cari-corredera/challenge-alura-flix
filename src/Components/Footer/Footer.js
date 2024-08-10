import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import CabeceraLink from "Components/CabeceraLink/CabeceraLink";
import logo from "../Cabecera/logo-flix.png"
import home from "./home.png"
import masNuevoVideo from "./masNuevoVideo.png"

function Footer({ iconHome, textHome, classHome, iconVideo, textVideo, classVideo }) {
    return (
        
        <footer className={styles.footer}>
            <Link to={"/"}>
                <img className={styles.imgLogo} src={logo} alt=" Logo ALuraFlix" />
            </Link>

            <nav className={styles.botones}>
                <CabeceraLink url="/">
                    <button className={`${styles.btnHome} ${styles [classHome]}`}>
                       <img src={iconHome} alt="icono home"/> {textHome}
                    </button>
                </CabeceraLink>

                <CabeceraLink url="./nuevovideo">
                    <button className={`${styles.btnVideo} ${styles [classVideo]}`}>
                        <img src={iconVideo} alt="icono mas"/> {textVideo}
                    </button>
                </CabeceraLink>
            </nav>
            
        </footer>
    
    )
}

export default Footer;