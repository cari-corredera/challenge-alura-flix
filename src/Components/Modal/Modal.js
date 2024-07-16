import styles from "./Modal.module.css"

function Modal({open, onClose, children}){

    if(!open){
        return null;
    }

    return(
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <button 
                    className={styles.closeButton} onClick ={onClose}>
                   <span>X</span> 
                </button>
                {children}
            </div>
        </div>

    )
}

export default Modal;