import React, { useState } from 'react'
import axios from 'axios'

import styles from './contactPost.module.css'


export default function ContactPost() {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/ab9e1be7-6132-4cc9-8fdb-441e433cc831",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Merci pour votre Message!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };

    return (
        <>
    
        <div>
            <h3 className='section-headline'>Me contacter</h3>
            <div className="col-md-8 mt-5">
                <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1" required="required">Adresse Email</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example@example.fr"/>
                </div> 
                <div className="form-group">
                    <label for="exampleInputName">Nom & Prénom</label>
                    <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Entrez votre nom" required="required"/>
                </div>
                <div>
                    <label>Votre message</label>
                    <div>
                        <textarea className={styles.textArea} type="text" name="message" placeholder="Votre message" required="required"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
                    Submit
                </button>
                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                    </p>
                )}
                </form>
            </div>
        </div>  
                
        </>
    )
}
