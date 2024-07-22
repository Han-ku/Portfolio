import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [stateMessage, setStateMessage] = useState(null)
    const navigate = useNavigate()

    const sendEmail = (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const form = event.target
        const formData = new FormData(form)
        const formDataObj = Object.fromEntries(formData.entries())

        if (formDataObj.fullname === '' || formDataObj.email === '' || formDataObj.message === '') {
            alert("All fields are required.")
            setIsSubmitting(false)
        } else {
            emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then((res) => {
                setStateMessage('Message sent successfully!')
                setIsSubmitting(false)
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000);
            }, (err) => {
                console.error('Failed to send message:', err)
                setStateMessage("Something went wrong, please try again later.")
                setIsSubmitting(false)
                setTimeout(() => {
                    setStateMessage(null)
                }, 5000)
            });
            form.reset()

            console.log('Service ID:', process.env.REACT_APP_SERVICE_ID);
            console.log('Template ID:', process.env.REACT_APP_TEMPLATE_ID);
            console.log('Public Key:', process.env.REACT_APP_PUBLIC_KEY);
        }
    }

    // const handleForm = (event) => {
    //     event.preventDefault()
    //     let form = event.target
    //     let formData = new FormData(form)
    //     let formDataObj = Object.fromEntries(formData.entries())

    //     // let formJson = JSON.stringify(formDataObj)

    //     console.log(formDataObj)

    //     if(formDataObj.name === '' || formDataObj.email === '' || formDataObj.message === '') {
    //         alert("Name is required")
    //     }
    // }

    return (
        <>
            {/* <div>This is the Contact's page</div>
            <div>
                <button onClick={() => {nav("/")}}>Go back to Home Page &rarr;</button>
            </div> */}

            <h2 className='center p-2'>Contact Me</h2>
            <div className='flex flex-center'>
            {/* Watch the video with forms */}
                <form onSubmit={sendEmail}>
                    <div>
                        <input className='field-form' type="text" name="fullname" placeholder='Provide your full name..' />
                    </div>
                    <div>
                        <input className='field-form' type="email" name="email" placeholder='Your email address..' />
                    </div>
                    <div>
                        <textarea className='field-form' name="message" placeholder='Your message..'></textarea>
                    </div>
                    <div>
                        <button type='submit' value="Send" disabled={isSubmitting} id='btn-msg'>Send Message</button>
                    </div>
                    {stateMessage && <p>{stateMessage}</p>}
                </form>
            </div>
        </>
    )
}

export default Contact