import React, { useState } from 'react';


function MessageForm() {
  // State variables to store the name and message
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Event handler to handle changes in the name input
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Event handler to handle changes in the message input
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Event handler to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Do something with the name and message (e.g., submit to a server)
    console.log('Name:', name);
    console.log('Message:', message);
    // Clear the form fields after submission
    setName('');
    setMessage('');
  };

  return (
    
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }} border="3">
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
            style={{ width: '100%', minHeight: '100px', padding: '0.5rem' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', align:'center', }}>Submit</button>
      </form>
    );
    
   
}

export default MessageForm;
