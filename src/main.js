import './style.scss';
import contacts from './contacts.constant';

console.log(contacts);
const worker = new Worker('contacts.worker.js');
worker.postMessage(10); 

worker.onmessage = function(event) {
    const contacts = event.data;
    var contactsApp = new Contacts(contacts);
    contactsApp.updateLength();
    contactsApp.createContacts();
};

class Contacts {

    constructor(contacts) {
        this.contacts = contacts;
    }

    updateLength() {
        var contactsLengthElement = document.querySelector('#contacts-length');
        contactsLengthElement.textContent = this.contacts.length;
    }

    createContacts() {
        var contactsContainer = document.querySelector('.contacts-container');
        this.contacts.forEach(function (contact) {
            var contactComponent = document.createElement('contact-component');
            contactComponent.setAttribute('id', contact.id);
            contactComponent.setAttribute('name', contact.name);
            contactComponent.setAttribute('tel', contact.tel);
            contactComponent.setAttribute('email', contact.email);
            contactsContainer.appendChild(contactComponent);
        });
    }
}
