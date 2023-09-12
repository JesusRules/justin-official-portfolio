function CloseButton({ setOpenModal, color="black" }) {
    const buttonClassName = color === "white" ? "close-button-white" : "close-button-black";

  return (
    <a onClick={() => setOpenModal(false)} className="close-button">
      <div className="in">
        <div className={buttonClassName}></div>
        <div className={buttonClassName}></div>
      </div>
      <div className="out">
        <div className={buttonClassName}></div>
        <div className={buttonClassName}></div>
      </div>
    </a>
  );

}

export default CloseButton;