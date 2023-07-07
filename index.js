import  {listContacts,
getContactById,
removeContact,
addContact} from "./contacts.js";
import yargs from "yargs";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await addContact(name, email, phone );
      return console.log(newContact);
    case "remove":
      const removedContact = await removeContact(id);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const { argv } = yargs(process.argv.slice(2));

invokeAction(argv);
