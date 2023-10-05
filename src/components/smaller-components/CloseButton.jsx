import styled from "styled-components";

const CloseButtonImg = styled.img`
  width: 1.5rem;
  position: absolute;
  right: .6rem;
  top: .6rem;
  cursor: pointer;

`

function CloseButton({ setOpenModal, color="black" }) {
    const buttonClassName = color === "white" ? "close-button-white" : "close-button-black";

  return (
    <>
    {(color === "white") ? (
      <CloseButtonImg src="/img/projects/misc/close-icon-white.png" onClick={() => setOpenModal(false)}/>
    ) : (
      <CloseButtonImg src="/img/projects/misc/close-icon.png" onClick={() => setOpenModal(false)}/>
    )}
    {/* // <a onClick={() => setOpenModal(false)} className="close-button">
    //   <div className="in">
    //     <div className={buttonClassName}></div>
    //     <div className={buttonClassName}></div>
    //   </div>
    //   <div className="out">
    //     <div className={buttonClassName}></div>
    //     <div className={buttonClassName}></div>
    //   </div>
    // </a> */}
    </>
  );

}

export default CloseButton;