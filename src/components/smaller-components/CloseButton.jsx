function CloseButton({ setOpenModal, color="black" }) {
    return (
        <a onClick={() => setOpenModal(false)} className="close-button">
          <div className="in">
          <div className="close-button-block"></div>
          <div className="close-button-block"></div>
          </div>
          <div className="out">
          <div className="close-button-block"></div>
          <div className="close-button-block"></div>
          </div>
          </a>
    )
}

export default CloseButton;