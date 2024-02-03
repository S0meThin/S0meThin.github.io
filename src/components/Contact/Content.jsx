import React, {useRef} from 'react';
import './contact.scss';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser'

function Content() {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            "service_ydt3nkj",
            "template_03ke88q",
            refForm.current,
            'Uj-G0x7EoRXxkqCCL'
        ).then(
            () => {
                alert('Sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message!')
            }
        )
    }
    return (
        <section className = 'c-content contact-content'>
            <div className = "c-contact-content">
                <div className = "c-contact-content-first">
                <h1 className = "c-contact">
                    Contact me
                </h1>
                <div className = "c-contact-info">
                    I`m interested in whatever opportunity you might have for me, so feel free to contact me using the form below
                </div>
                <div className = "c-contact-form">
                    <form ref = {refForm} onSubmit = {sendEmail} action="">
                        <div className = "c-contact-form-holder">
                            <div className = "c-contact-firstLine">
                                <div className = "c-contact-form-name">
                                    <label htmlFor="name">
                                        Name  
                                    </label>
                                    <br />
                                    <input type="text" name = "name" autoComplete='off'/>
                                </div>
                            <div className = "c-contact-form-email">
                                <label htmlFor="email">
                                    Email  
                                </label>
                                <br />
                                <input type="email" name = "email" autoComplete='off' />
                            </div>
                            </div>
                            <div className = "c-contact-form-subject">
                                <label htmlFor="subject">
                                    Email subject  
                                </label>
                                <br />
                                <input type="text" name = "subject" autoComplete='off' />
                            </div>
                            <div className = "c-contact-form-message">
                                <label htmlFor="message">
                                    Message  
                                </label>
                                <br />
                                <textarea name="message" id="" cols="30" rows="10" autoComplete='off'></textarea>
                            </div>
                        </div>
                        <input type="submit" className = "c-contact-submit"/>
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Content;