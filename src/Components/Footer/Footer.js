import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../Cabecera/logo-flix.png"

function Footer() {
    return (
        <footer className={styles.footer}>
            <Link to={"/"}>
                <img src={logo} alt=" Logo ALuraFlix" />
            </Link>
        </footer>

    )
}

export default Footer;