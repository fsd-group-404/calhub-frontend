import React, { useState } from "react";
import { Button, Input } from 'react-daisyui';
import Modal from 'react-bootstrap/Modal';


function UserInfoModal({ showModal, setShowModal, handleSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    // Add other fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = () => {
    handleSubmit(formData);
    setFormData({
      name: '',
      email: '',
      course: '',
     });
    setShowModal(false);
  };

  const handleClose = () => setShowModal(false);

  console.log("hello");
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Title>"Enter Your Information"</Modal.Title>
      <Modal.Body>
        <Input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        {/* Add other input fields as needed */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleFormSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserInfoModal;