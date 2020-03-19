import React, { useState } from "react";
import Modal from "react-modal";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Welcome to my sample page</h2>
      <button onClick={() => setModalIsOpen(true)}>Register Me!</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "grey" },
          content: { color: "#3f3160" }
        }}
      >
        <h2>Registration</h2>
        <div>
          First Name: <input type="text"></input>
        </div>
        <div>
          Last Name: <input type="text"></input>
        </div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
