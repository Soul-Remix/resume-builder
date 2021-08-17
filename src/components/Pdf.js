import React, { Component } from 'react';
import PdfExp from './Pdf-exp';
import PdfEdu from './pdf-edu';
import '../styles/Pdf.css';

class Pdf extends Component {
  render() {
    const expArr = this.props.state.study.map((x) => {
      return <PdfEdu state={x} key={x.id} />;
    });
    const eduArr = this.props.state.work.map((x) => {
      return <PdfExp state={x} key={x.id} />;
    });
    return (
      <div className="pdf">
        <header>
          <h1>
            {this.props.state.firstName} {this.props.state.lastName}
          </h1>
          <h3>{this.props.state.work[0].workTitle}</h3>
        </header>
        <div className="pdf-grid">
          <div>
            <section>
              <h2>Description</h2>
              <hr />
              <p>{this.props.state.description}</p>
            </section>
            <section>
              <h2>Experience</h2>
              <hr />
              {expArr}
            </section>
            <section>
              <h2>Education</h2>
              <hr />
              {eduArr}
            </section>
          </div>
          <div className="personal-info">
            <h2>Personal Information</h2>
            <p>{this.props.state.email}</p>
            <p>{this.props.state.number}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pdf;
