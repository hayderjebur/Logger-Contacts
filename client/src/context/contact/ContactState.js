import React, { useReducer } from "react";
import uuid from "uuid/v4";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_ALERT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  FILTER_CONTACT
} from "../type";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill John",
        email: "jill@gmail.com",
        phone: "111-1111-111",
        type: "personal"
      },
      {
        id: 1,
        name: "Sara John",
        email: "sara@gmail.com",
        phone: "111-2222-111",
        type: "personal"
      },
      {
        id: 1,
        name: "Harry John",
        email: "harry@gmail.com",
        phone: "111-3333-111",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add Contact
  const addContact = contact => {
    contact.id = uuid();

    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contatcs

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
