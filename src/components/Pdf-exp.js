import React from 'react';

function PdfExp(props) {
  return (
    <div className="view">
      <div className="view-date">
        <p>{props.state.workDateFrom}</p>
        <span>-</span>
        <p>
          {props.state.workDateTo !== '' ? props.state.workDateTo : 'Present'}
        </p>
      </div>
      <div>
        <p>{props.state.workTitle}</p>
        <p>{props.state.employer}</p>
      </div>
    </div>
  );
}

export default PdfExp;
