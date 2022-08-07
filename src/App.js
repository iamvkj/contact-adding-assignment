import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Contacts from "./components/Contacts";
import ContactDetails from "./components/ContactDetails";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

import Messages from "./components/Messages";
import MessageDetails from "./components/MessageDetails";

import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Contacts />} />
        <Route exact path="/contactDetails" element={<ContactDetails />} />
        <Route exact path="/addContact" element={<AddContact />} />
        <Route exact path="/editContact" element={<EditContact />} />

        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/messageDetails" element={<MessageDetails />} />

        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;