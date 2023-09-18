import React, {} from 'react';
import { styled, keyframes  } from 'styled-components'

const ContactContainer = styled.div`
    /* position: absolute;
    background-color: white;
    margin: auto;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    justify-content: center; */
    z-index: 1000;
    position: absolute;
    height: 100%;
    width: 100%;
`;

const ContactContent = styled.div`
    padding: 3rem;
    text-align: center;
    position: absolute;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 255, 255); //0.8 alpha
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
`;

function ContactForm() {
    return (
        <ContactContainer>
            <ContactContent>
                <h2>Contact Me!</h2>
                <div className='inputBox'>
                    <input type="text" placeholder='First Name'/>
                </div>
                <div className='inputBox'>
                    <input type="email" placeholder='Email'/>
                </div>
            </ContactContent>
        </ContactContainer>
    );
}

export default ContactForm;