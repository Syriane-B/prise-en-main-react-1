import React, { useState } from 'react';
import EmailSendModal from "./EmailSendModal";

function EmailForm() {

    // store boo if email is valid
    const [emailInputValue, setEmailInputValue] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isEmailSend, setIsEmailSend] = useState(false);

    function handleChange (e) {
        setEmailInputValue(e.target.value);
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputValue))
        {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
    }

    function handleEmailSending (e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        setIsEmailSend(true);
    }

    return (
        <>
            <form action="" method="post">
                <h5>Vous souhaitez recevoir par mail votre sélection ?</h5>
                <label htmlFor="email">Email</label>
                <input name="email" onChange={handleChange}/>
                {!isEmailValid &&
                    <p id="component-error-text" >l'email entré n'est pas valide</p>
                }
                {
                    isEmailValid &&
                    <button onClick={handleEmailSending}>Envoyer !</button>
                }
            </form>
            {isEmailSend? <EmailSendModal userEmail={emailInputValue} /> : ''}
        </>
    );
}

export default EmailForm;
