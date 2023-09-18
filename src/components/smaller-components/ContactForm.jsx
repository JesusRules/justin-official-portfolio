import React, { } from 'react';
import { styled, keyframes  } from 'styled-components'

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

function ContactForm({ contactForm }) {
    return (
        <ContactContainer>
            <ContactContent ref={contactForm}>
                <h2 style={{gridArea: 'one'}} className='title'>Contact Me!</h2>
                <div className='names'>
                    <div style={{gridArea: 'two'}} className='inputBox first-name'>
                        <input type="text" placeholder='First Name'/>
                    </div>
                    <div style={{gridArea: 'three'}} className='inputBox last-name'>
                        <input type="text" placeholder='Last Name'/>
                    </div>
                </div>
                <div style={{gridArea: 'four'}} className='inputBox email'>
                    <input type="email" placeholder='Email'/>
                </div>
                <div style={{gridArea: 'five'}} className='inputBox phone-number'>
                    <input type="tel" placeholder='Phone Number (Optional)'/>
                </div>
                <div style={{gridArea: 'six'}} className='inputBox subject'>
                    <input type="tel" placeholder='Subject'/>
                </div>
                <div style={{gridArea: 'seven'}} className="inputBox message" title="Your message">
                  <textarea rows="6" type="text" placeholder="What Do You Need Done?"></textarea>
                </div>
                <div style={{gridArea: 'eight'}} className='inputBox send-btn'>
                    <input type="submit" value="Send" id="send-btn"/>
                </div>
            </ContactContent>
        </ContactContainer>
    );
}

export default ContactForm;