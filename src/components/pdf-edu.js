import React from 'react';

function PdfEdu(props) {
  return (
    <div className="view">
      <div className="view-date">
        <p>{props.state.orgDateFrom}</p>
        <span>-</span>
        <p>
          {props.state.orgDateTo !== '' ? props.state.orgDateTo : 'Present'}
        </p>
      </div>
      <div>
        <p>{props.state.title}</p>
        <p>{props.state.org}</p>
      </div>
    </div>
  );
}

export default PdfEdu;
