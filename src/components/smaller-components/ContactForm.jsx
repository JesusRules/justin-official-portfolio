import React, { useEffect, useRef, useState } from 'react';
import { styled, keyframes  } from 'styled-components'
import emailjs from "emailjs-com";
import gsap from 'gsap';

const ContactContainer = styled.div`
    z-index: 1000;
    position: absolute;
    height: 100%;
    width: 100%;
`;

const ContactContent = styled.div`
    padding: 1rem 3rem;
    position: absolute;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 500px;

    background: rgb(255, 255, 255, 0.15); //0.15
    backdrop-filter: blur(25px);
    border: 1px solid rgb(255, 255, 255);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    border-left: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.1); 
    
    align-items: center;
    opacity: 0;

    .names {
        display: flex;
        gap: 1.4rem;
        width: 86%;
        position: relative;
        right: .635rem;
        margin: 0 auto;
    }
    
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'one one'
    'two three'
    'four four'
    'five five'
    'six six'
    'seven seven'
    ; */

    h2 {
        position: relative;
        width: 100%;
        text-align: center;
        font-size: 2.5em;
        font-weight: 600;
        color: white;
        margin-bottom: 2rem;
    }
    .inputBox {
        position: relative;
        width: 90%;
        margin: 0 auto;
        input, textarea {
            padding: .8rem;
            width: 91.5%;
            outline: none;
            font-size: 1.1em;
            color: #000000;
            border-radius: 5px;
            /* background: rgba(0,0,0,0.2); //0.2 */
            background: rgba(255,255,255,1); //0.2
            box-shadow: inset 0 0 15px rgba(0,0,0,0.25);
            border: 1px solid rgba(0,0,0,0.5);
            margin-bottom: 15px;
        }
        ::placeholder {
            color: rgba(0, 0, 0, 0.525);
            /* color: rgba(255,255,255, 0.5); */ //old
        }
        #send-btn {
            width: 100%;
            position: relative;
            border: none;
            outline: none;
            background: linear-gradient(0deg, #2c3c99, #00b0ff);
            cursor: pointer;
            color: white;
            font-weight: 500;
            box-shadow: none;
            transition: 0.5s;
        }
    }
    /* .first-name {
        width: 80%;
    }
    .last-name {
        width: 80%;
    }
    .first-name, .last-name {
        position: relative;
        right: .17rem;
    } */

   
    @media only screen and (max-width: 700px) {
        .names {
            width: 100%;
            display: flex;
            gap: 0;
            right: 0;
            flex-direction: column;
        }
        /* grid-template-columns: 1fr;
        grid-template-areas: 
        'one'
        'two'
        'three'
        'four'
        'five'
        'six'
        'seven';
        
        .first-name {
            width: 90%;
        }
        .last-name {
            width: 90%;
        } */
    }
`;

const SuccessModal = styled.div`
    position: absolute;
    margin: auto;
    color: #007400;
    border: 1.5px solid #007400;
    background-color: #ddffdd;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100000;
    height: 10rem;
    width: 20rem;
    .content {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-evenly;
        margin: auto;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const ErrorModal = styled.div`
    position: absolute;
    margin: auto;
    color: #740000;
    border: 1.5px solid #740000;
    background-color: #ffdddd;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100000;
    height: 10rem;
    width: 20rem;
    .content {
        padding: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-evenly;
        margin: auto;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const RequiredFieldsText = styled.p`
  color: #f00000;  
  text-align: center;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1rem;
  /* background-color: #ffffff7a; */
`;  

function ContactForm({ contactForm }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    // Modals
    const [successModal, setSuccessModal] = useState(false);
    const successModalRef = useRef();
    const [errorModal, setErrorModal] = useState(false);
    const errorModalRef = useRef();
    // ErrorMessage
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    
    const sendEmail = (e) => {
        e.preventDefault();

        if (firstName === "" || lastName === "" || email === "" || subject === ""
        || message === "")
        {
            setShowErrorMessage(true);
            return;
        }
        
        // setErrorModal(true);
        const emailService = 'service_np61i8q';
        const templateId = 'template_k7g7a9m';
        const templateParams = {
            from_name: `${firstName} ${lastName}`,
            email: email,
            phoneNumber: phoneNumber,
            subject: subject,
            message: message,
        };

        // / Send the email
        // emailjs.send(emailService, templateId, templateParams)
        // .then((response) => {
        //     setSuccessModal(true);
        //     console.log('Email sent:', response);
        //     // Reset the form or show a success message
        // })
        // .catch((error) => {
        //     setErrorModal(true);
        //     setErrorMessage(error);
        //     console.error('Email error:', error);
        // });
    }

    useEffect(() => {
        if (successModal) {
            gsap.to(successModalRef.current, {
                onStart: () => {
                    successModalRef.current.style.display = "block";
                },
                opacity: 0,
                duration: 1,
                delay: 7,
                onComplete: () => {
                    setSuccessModal(false);
                    successModalRef.current.style.display = "none";
                }
            })
        }
    }, [successModal])

    useEffect(() => {
        if (errorModal) {
            gsap.to(errorModalRef.current, {
                onStart: () => {
                    errorModalRef.current.style.display = "block";
                },
                opacity: 0,
                duration: 1,
                delay: 7,
                onComplete: () => {
                    setErrorModal(false);
                    errorModalRef.current.style.display = "none";
                }
            })
        }
    }, [errorModal])

    // RED PARAGRAPH LINE
    useEffect(() => {
        if (showErrorMessage) {
            setTimeout(() => {
                setShowErrorMessage(false);
            }, 5000)
        }
    }, [showErrorMessage])

    return (
        <>
        {successModal && (
            <SuccessModal ref={successModalRef}>
                <div className='content'>
                    <p style={{fontWeight: 400}}>Thank you <span style={{fontWeight: 900, fontStyle: 'italic'}}>{firstName}!</span></p>
                    
                    <p style={{fontWeight: 800}}>Your message was <span style={{textDecoration: 'underline'}}>successfully</span> sent!</p>
                </div>
            </SuccessModal>
        )}

        {errorModal && (
            <ErrorModal ref={errorModalRef}>
                <div className='content'>
                    <p style={{fontWeight: 900}}>Error sending the message!</p>
                    <p>The problem: {errorMessage}</p>
                </div>
            </ErrorModal>
        )}

        <ContactContainer>
            <ContactContent ref={contactForm}>
                <h2 style={{gridArea: 'one'}} className='title'>Contact Me!</h2>
                <div className='names'>
                    <div style={{gridArea: 'two'}} className='inputBox first-name'>
                        <input type="text" placeholder='First Name'
                            value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div style={{gridArea: 'three'}} className='inputBox last-name'>
                        <input type="text" placeholder='Last Name'
                            value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div style={{gridArea: 'four'}} className='inputBox email'>
                    <input type="email" placeholder='Email'
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div style={{gridArea: 'five'}} className='inputBox phone-number'>
                    <input type="tel" placeholder='Phone Number (Optional)'
                            value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div style={{gridArea: 'six'}} className='inputBox subject'>
                    <input type="tel" placeholder='Subject'
                            value={subject} onChange={(e) => setSubject(e.target.value)}/>
                </div>
                <div style={{gridArea: 'seven'}} className="inputBox message" title="Your message">
                  <textarea rows="6" type="text" placeholder="What Do You Need Done?"
                            value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                {showErrorMessage && (
                    <RequiredFieldsText>Please fillout all required fields!</RequiredFieldsText>
                )}

                <div style={{gridArea: 'eight'}} className='inputBox send-btn'>
                    <input type="submit" value="Send" onClick={sendEmail} id="send-btn"/>
                </div>
            </ContactContent>
        </ContactContainer>
        </>
    );
}

export default ContactForm;