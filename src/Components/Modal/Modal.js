import styles from "./Modal.module.css"
import iconCerrarForm from "./iconCerrarForm.png"


function Modal({ open, onClose, children }) {

    if (!open) {
        return null;
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <button
                    className={styles.closeButton} onClick={onClose}>
                    <img src={iconCerrarForm} alt="Icono cerrar" />
                </button>
                {children}
            </div>
        </div>

    )
}

export default Modal;