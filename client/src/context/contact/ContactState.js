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
  FILTER_CONTACT,
  UPDATE_CONTACT
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
        id: 2,
        name: "Sara John",
        email: "sara@gmail.com",
        phone: "111-2222-111",
        type: "personal"
      },
      {
        id: 3,
        name: "Harry John",
        email: "harry@gmail.com",
        phone: "111-3333-111",
        type: "personal"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add Contact
  const addContact = contact => {
    contact.id = uuid();

    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //Filter Contatcs

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
