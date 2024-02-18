import contacts from "./contacts.constant";

self.onmessage = function(event) {
    const numberOfContacts = event.data;
    const contacts = [];

    for (let i = 0; i < numberOfContacts; i++) {
        const contact = {
            id: i.toString(),
            name: `Contact ${i}`,
            tel: `123-456-78${i}`,
            email: `contact${i}@example.com`
        };
        contacts.push(contact);
    }

    self.postMessage(contacts);
};