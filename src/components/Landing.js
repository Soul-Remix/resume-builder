import React from 'react';
import '../styles/Landing.css';

function Landing(props) {
  return (
    <div className="header">
      <h1>Easy and Free Online Resume Builder</h1>
      <p>
        Create your resume in minutes with this free resume builder. Download it
        to your computer or use it to apply for any job.
      </p>
      <button onClick={props.handleLandingBtn}>Build your free resume</button>
    </div>
  );
}

export default Landing;
