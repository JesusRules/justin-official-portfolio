import React, {} from 'react';
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
    display: flex;
    flex-direction: column;
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.1); 
    
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

        #btn {
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

    .group {
        display: flex;
        justify-content: space-between;
        a {
            font-size: 1.25em;
            color: white;
            text-decoration: none;
        }
        a:nth-child(2) {
            text-decoration: underline;
        }
    }

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
                    <input type="text" placeholder='Last Name'/>
                </div>
                <div className='inputBox'>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className='inputBox'>
                    <input type="tel" placeholder='Phone Number'/>
                </div>
                <div className="inputBox" title="Your message">
                  <textarea rows="6" type="text" placeholder="What Do You Need Done?"></textarea>
                </div>
                <div className='inputBox'>
                    <input type="submit" value="Send" id="btn"/>
                </div>
            </ContactContent>
        </ContactContainer>
    );
}

export default ContactForm;