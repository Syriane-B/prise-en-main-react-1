import React  from 'react';

function EmailSendModal({ userEmail }) {
    console.log(userEmail);

    return (
        <div className="modal">
            <h2>
                Votre liste vous a bien été envoyée par mail !
            </h2>
            <p>
                adresse mail : { userEmail }
            </p>
        </div>
    );
}

export default EmailSendModal;
