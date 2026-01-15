import Modal from "react-modal";
import styles from "./ComingSoonModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    maxWidth: "415px",
    borderRadius: "16px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
};

export default function ComingSoonModal({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel=""
    >
      <div className={styles.comingSoonModal}>
        <h3>Coming Soon ...</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className={styles.buttonContainer}>
          <button className="main-button" onClick={closeModal}>
            Go Back
          </button>
        </div>
      </div>
    </Modal>
  );
}
