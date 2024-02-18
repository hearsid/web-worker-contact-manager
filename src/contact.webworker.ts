import { expose } from 'comlink';
import { IContact } from "./contact.model";
import { CONTACTS } from './contacts.constant';

function generateContacts(numberOfContacts: number): IContact[] {
  var contacts: IContact[] = [];
  
  // add full sets of CONTACTS
  for (let i = 0; i < Math.floor(numberOfContacts / CONTACTS.length); i++) {
    contacts = contacts.concat(CONTACTS);
  }

  // add remaining contacts
  const remainder = numberOfContacts % CONTACTS.length;
  for (let i = 0; i < remainder; i++) {
    contacts.push(CONTACTS[i]);
  }
  
  return contacts;
}

const worker = {
  generateContacts
};

expose(worker);
