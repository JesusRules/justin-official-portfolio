import { useEffect, useId, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import gsap from 'gsap';
import '../../css/ContactForm.css';

function Field({ id, label, required = false, className = '', children }) {
    return (
        <div className={`inputBox ${className}`}>
            <label htmlFor={id}>
                {label}{required && <> <span className="required-marker" aria-hidden="true">*</span></>}
            </label>
            {children}
        </div>
    );
}

function ContactForm({ contactForm }) {
    const formId = useId();
    const [rememberName, setRememberName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [successModal, setSuccessModal] = useState(false);
    const successModalRef = useRef();
    const [errorModal, setErrorModal] = useState(false);
    const errorModalRef = useRef();
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const sendingRef = useRef(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        if (sendingRef.current) return;

        if (!firstName.trim() || !lastName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            setShowErrorMessage(true);
            return;
        }

        sendingRef.current = true;
        setIsSending(true);
        setShowErrorMessage(false);
        setErrorModal(false);
        setSuccessModal(false);

        const emailService = 'service_np61i8q';
        const templateId = 'template_k7g7a9m';
        const publicKey = 'QEmJXApzcSZ86edg8';
        const templateParams = {
            from_name: `${firstName} ${lastName}`,
            email,
            phoneNumber,
            subject,
            // Keep the source in the existing template field, without changing the visitor's input.
            message: `${message}\n\nSent from https://justin-bernard.com`,
        };

        try {
            await emailjs.send(emailService, templateId, templateParams, publicKey);
            setRememberName(firstName);
            setSuccessModal(true);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setSubject('');
            setMessage('');
        } catch (error) {
            setErrorMessage('Your message could not be sent. Please try again later.');
            setErrorModal(true);
            console.error('Email error:', error);
        } finally {
            sendingRef.current = false;
            setIsSending(false);
        }
    };

    useEffect(() => {
        if (!successModal) return;
        const tween = gsap.to(successModalRef.current, {
            opacity: 0,
            duration: 1,
            delay: 7,
            onComplete: () => setSuccessModal(false),
        });
        return () => tween.kill();
    }, [successModal]);

    useEffect(() => {
        if (!errorModal) return;
        const tween = gsap.to(errorModalRef.current, {
            opacity: 0,
            duration: 1,
            delay: 7,
            onComplete: () => setErrorModal(false),
        });
        return () => tween.kill();
    }, [errorModal]);

    useEffect(() => {
        const timer = setTimeout(() => setShowErrorMessage(false), 5000);
        return () => clearTimeout(timer);
    }, [showErrorMessage]);

    return (
        <>
            {successModal && (
                <div className="contact-feedback contact-feedback-success" ref={successModalRef} role="status">
                    <button type="button" className="contact-feedback-close" aria-label="Close success message" onClick={() => setSuccessModal(false)}>
                        <img src="/svg/close-button.svg" alt="" />
                    </button>
                    <h3>Thank you, {rememberName}!</h3>
                    <p>Your message was successfully sent!</p>
                </div>
            )}

            {errorModal && (
                <div className="contact-feedback contact-feedback-error" ref={errorModalRef} role="alert">
                    <button type="button" className="contact-feedback-close" aria-label="Close error message" onClick={() => setErrorModal(false)}>
                        <img src="/svg/close-button.svg" alt="" />
                    </button>
                    <h3>Unable to send your message</h3>
                    <p>{errorMessage}</p>
                </div>
            )}

            <div className="contact-form-layer">
                <form ref={contactForm} className="contact-form" onSubmit={sendEmail} aria-busy={isSending}
                    aria-labelledby={`${formId}-title`} aria-describedby={`${formId}-intro`}>
                    <header className="contact-form-heading">
                        <h2 id={`${formId}-title`} className="title">Let’s talk.</h2>
                        <p id={`${formId}-intro`}>Tell me about your project.</p>
                    </header>

                    <div className="contact-fields">
                        <div className="contact-field-row names">
                            <Field id={`${formId}-first-name`} label="First Name" required className="first-name">
                                <input id={`${formId}-first-name`} name="firstName" type="text" autoComplete="given-name" aria-required="true" disabled={isSending}
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </Field>
                            <Field id={`${formId}-last-name`} label="Last Name" required className="last-name">
                                <input id={`${formId}-last-name`} name="lastName" type="text" autoComplete="family-name" aria-required="true" disabled={isSending}
                                    value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </Field>
                        </div>
                        <div className="contact-field-row">
                            <Field id={`${formId}-email`} label="Email" required className="email">
                                <input id={`${formId}-email`} name="email" type="email" autoComplete="email" aria-required="true" disabled={isSending}
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Field>
                            <Field id={`${formId}-phone`} label="Phone Number" className="phone-number">
                                <input id={`${formId}-phone`} name="phoneNumber" type="tel" autoComplete="tel" disabled={isSending}
                                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            </Field>
                        </div>
                        <Field id={`${formId}-subject`} label="Subject" required className="subject">
                            <input id={`${formId}-subject`} name="subject" type="text" aria-required="true" disabled={isSending}
                                value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </Field>
                        <Field id={`${formId}-message`} label="Message" required className="message">
                            <textarea id={`${formId}-message`} name="message" rows="5" aria-required="true" disabled={isSending}
                                value={message} onChange={(e) => setMessage(e.target.value)} />
                        </Field>
                    </div>

                    {showErrorMessage && <p className="contact-required-error" role="alert">Please fill out all required fields!</p>}
                    <button type="submit" className="contact-send-button" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send message'}
                    </button>
                </form>
            </div>
        </>
    );
}

export default ContactForm;
