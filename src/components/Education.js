import React from 'react';
import '../styles/form.css';

function Education(props) {
  return (
    <div className="info">
      <h2>Education and Training</h2>
      <hr />
      <form className="education-form">
        <input
          name="title"
          type="text"
          placeholder="Title of qualification awarded"
          value={props.state.title}
          onChange={props.handleInputChange}
          id={props.state.id}
          required
        />
        <input
          name="org"
          type="text"
          placeholder="Organization providing education and training"
          value={props.state.org}
          onChange={props.handleInputChange}
          id={props.state.id}
          required
        />
        <div className="date">
          <input
            className="date-field"
            name="orgDateFrom"
            type="text"
            placeholder="From dd/mm/yyyy"
            value={props.state.orgDateFrom}
            onChange={props.handleInputChange}
            id={props.state.id}
            required
          />
          <input
            className="date-field"
            name="orgDateTo"
            type="text"
            placeholder="To dd/mm/yyyy"
            value={props.state.orgDateTo}
            onChange={props.handleInputChange}
            id={props.state.id}
            disabled={props.state.orgOngoing ? true : false}
          />
          <div className="ongoing">
            <input
              type="checkbox"
              value={props.state.ongoing}
              onChange={props.handleInputChange}
              id={props.state.id}
              name="orgOngoing"
            />
            <label>Ongoing</label>
          </div>
        </div>
      </form>
      <div className="delete">
        <button
          id={props.state.id}
          className="delete-btn"
          onClick={props.handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Education;
