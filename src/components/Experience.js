import React from 'react';
import '../styles/form.css';

function Experience(props) {
  return (
    <div className="info">
      <h2>Work experience</h2>
      <hr />
      <form className="education-form">
        <input
          name="workTitle"
          type="text"
          placeholder="Title of the occupation"
          value={props.state.workTitle}
          onChange={props.handleInputChange}
          id={props.state.id}
          required
        />
        <input
          name="employer"
          type="text"
          placeholder="Employer"
          value={props.state.employer}
          onChange={props.handleInputChange}
          id={props.state.id}
          required
        />
        <div className="date">
          <input
            className="date-field"
            name="workDateFrom"
            type="text"
            placeholder="From dd/mm/yyyy"
            value={props.state.workDateFrom}
            onChange={props.handleInputChange}
            id={props.state.id}
            required
          />
          <input
            className="date-field"
            name="workDateTo"
            type="text"
            placeholder="To dd/mm/yyyy"
            value={props.state.workDateTo}
            onChange={props.handleInputChange}
            id={props.state.id}
            disabled={props.state.workOngoing ? true : false}
          />
          <div className="ongoing">
            <input
              type="checkbox"
              value={props.state.ongoing}
              onChange={props.handleInputChange}
              id={props.state.id}
              name="workOngoing"
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

export default Experience;
