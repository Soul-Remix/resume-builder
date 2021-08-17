import React from 'react';
import '../styles/form.css';

function General(props) {
  return (
    <div className="info">
      <h2>Personal Information</h2>
      <hr />
      <form className="general-form">
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={props.state.firstName}
          onChange={props.handleInputChange}
          required
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={props.state.lastName}
          onChange={props.handleInputChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={props.state.email}
          onChange={props.handleInputChange}
          required
        />
        <input
          name="number"
          type="tel"
          placeholder="Phone Number"
          value={props.state.number}
          onChange={props.handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Describe yourself in a few words"
          value={props.state.description}
          onChange={props.handleInputChange}
          required
        />
      </form>
      <div className="buttons">
        <button onClick={props.handleGeneralBackBtn}>Back</button>
        <button onClick={props.handleGeneralNextBtn}>Next</button>
      </div>
    </div>
  );
}

export default General;
