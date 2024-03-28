import React, { useState } from "react";

const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [formSubmitted, setFormSubmitted] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;

    if (username.trim() === "") {
      setFormSubmitted(false);

      // If username is empty, do not submit the form
      return;
    }
    setFormSubmitted(true);

    // Submit the form
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display validation message if username is empty */}
      {username.trim() === "" && formSubmitted === false && (
        <p>Please enter a username.</p>
      )}

      {/* Display success message if form is submitted */}
      {formSubmitted && username.trim() !== "" && (
        <p>Form submitted successfully."{username}"</p>
      )}
    </div>
  );
};

export default FormComponent;
