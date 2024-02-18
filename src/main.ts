import './style.scss';
import { wrap } from 'comlink';
import type { IContact } from './contact.model';

const worker = wrap<typeof import('./contact.webworker')>(new Worker(new URL('./contact.webworker.ts', import.meta.url), { type: 'module' }));

async function main() {
  const contacts: IContact[] = await worker.generateContacts(10000);
  console.log(contacts);
  var contactsApp = new Contacts(contacts);
  contactsApp.updateLength();
  contactsApp.createContacts();
}

main();

class Contacts {
    contacts: any;
    constructor(contacts: any) {
        this.contacts = contacts;
    }

    updateLength() {
        var contactsLengthElement = document.querySelector('#contacts-length');
        if (contactsLengthElement) {
            contactsLengthElement.textContent = this.contacts.length;
        }
    }

    createContacts() {
        var contactsContainer = document.querySelector('.contacts-container');
        if (contactsContainer) {
            this.contacts.forEach(function (contact: IContact) {
                var contactComponent = document.createElement('contact-component');
                contactComponent.setAttribute('id', contact.id as any);
                contactComponent.setAttribute('name', contact.name);
                contactComponent.setAttribute('tel', contact.tel);
                contactComponent.setAttribute('email', contact.email);
                contactsContainer && contactsContainer.appendChild(contactComponent);
            });
        }
    }
}
