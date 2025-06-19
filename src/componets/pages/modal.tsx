import "./modal.css";

interface ModalProps {
  closeModal: (value: boolean) => void;
}

function Modal({ closeModal }: ModalProps) {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      closeModal(false);
    }
  };

  return (
    <div className="modalBackground" onClick={handleBackgroundClick}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <h3>Bog'lanish</h3>
        <button onClick={() => closeModal(false)}>X</button>
        <p>
          Ma'lumotlaringizni qoldiring va operatirim tez orada sizga aloqaga
          chiqadi
        </p>
        <input type="text" placeholder="Ismi sharifingizni kiriting" />
        <input type="number" placeholder="+998" />
        <button onClick={() => closeModal(false)}>Yuborish</button>
      </div>
    </div>
  );
}

export default Modal;