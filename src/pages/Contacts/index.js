import React from 'react';
import './contacts.css'

import ContactsClass from './contacts'

function ContactsPage(){
    return (
      <div className="App">
        <h1>Contacts</h1>
        <ContactsClass />
      </div>
    );
}

export default ContactsPage;