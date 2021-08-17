import React, { Component } from 'react';
import './styles/App.css';
import Landing from './components/Landing';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Pdf from './components/Pdf';
import uniqid from 'uniqid';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true,
      general: false,
      education: false,
      experience: false,
      pdf: true,
      studyNum: 1,
      workNum: 1,
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      description: '',
      study: [
        {
          title: '',
          org: '',
          orgDateFrom: '',
          orgDateTo: '',
          orgOngoing: false,
          id: uniqid(),
        },
      ],
      work: [
        {
          workTitle: '',
          employer: '',
          workDateFrom: '',
          workDateTo: '',
          workOngoing: false,
          id: uniqid(),
        },
      ],
    };
  }

  handleLandingBtn = () => {
    this.setState({
      start: false,
      general: true,
    });
  };

  handleGeneralBackBtn = () => {
    this.setState({
      start: true,
      general: false,
    });
  };

  handleGeneralNextBtn = () => {
    this.setState({
      general: false,
      education: true,
    });
  };

  handleEducationBackBtn = () => {
    this.setState({
      education: false,
      general: true,
    });
  };

  handleEducationNextBtn = () => {
    this.setState({
      education: false,
      experience: true,
    });
  };

  handleExperienceBackBtn = () => {
    this.setState({
      education: true,
      experience: false,
    });
  };

  handleExperienceNextBtn = () => {
    this.setState({
      experience: false,
      pdf: true,
    });
  };

  handlePdfBackBtn = () => {
    this.setState({
      experience: true,
      pdf: false,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  handleStudyChange = (e) => {
    const { name, value, type } = e.target;
    const arr = this.state.study.map((x) => {
      if (x.id === e.target.id) {
        type === 'checkbox' ? (x[name] = !x.orgOngoing) : (x[name] = value);
      }
      return x;
    });
    this.setState({
      study: arr,
    });
  };

  handleWorkChange = (e) => {
    const { name, value, type } = e.target;
    const arr = this.state.work.map((x) => {
      if (x.id === e.target.id) {
        type === 'checkbox' ? (x[name] = !x.workOngoing) : (x[name] = value);
      }
      return x;
    });
    this.setState({
      work: arr,
    });
  };

  handleExtraStudy = (e) => {
    this.setState((prevState) => {
      return {
        study: this.state.study.concat({
          title: '',
          org: '',
          orgDateFrom: '',
          orgDateTo: '',
          orgOngoing: false,
          id: uniqid(),
        }),
      };
    });
  };

  handleExtraWork = () => {
    this.setState(() => {
      return {
        work: this.state.work.concat({
          workTitle: '',
          employer: '',
          workDateFrom: '',
          workDateTo: '',
          workOngoing: false,
          id: uniqid(),
        }),
      };
    });
  };

  handleStudyDelete = (e) => {
    const arr = this.state.study.filter((x) => {
      return x.id !== e.target.id;
    });
    this.setState({
      study: arr,
    });
  };

  handleWorkDelete = (e) => {
    const arr = this.state.work.filter((x) => {
      return x.id !== e.target.id;
    });
    this.setState({
      work: arr,
    });
  };

  render() {
    const studyArr = this.state.study.map((x) => {
      return (
        <Education
          state={x}
          handleInputChange={this.handleStudyChange}
          handleDelete={this.handleStudyDelete}
          key={x.id}
        />
      );
    });
    const workArr = this.state.work.map((x) => {
      return (
        <Experience
          state={x}
          handleInputChange={this.handleWorkChange}
          handleDelete={this.handleWorkDelete}
          key={x.id}
        />
      );
    });
    if (this.state.start) {
      return <Landing handleLandingBtn={this.handleLandingBtn} />;
    } else if (this.state.general) {
      return (
        <main>
          <General
            state={this.state}
            handleInputChange={this.handleInputChange}
            handleGeneralBackBtn={this.handleGeneralBackBtn}
            handleGeneralNextBtn={this.handleGeneralNextBtn}
          />
        </main>
      );
    } else if (this.state.education) {
      return (
        <main>
          {studyArr}
          <div>
            <button className="extra" onClick={this.handleExtraStudy}>
              + More Education
            </button>
          </div>
          <div className="buttons">
            <button onClick={this.handleEducationBackBtn}>Back</button>
            <button onClick={this.handleEducationNextBtn}>Next</button>
          </div>
        </main>
      );
    } else if (this.state.experience) {
      return (
        <main>
          {workArr}
          <div>
            <button className="extra" onClick={this.handleExtraWork}>
              + More Work
            </button>
          </div>
          <div className="buttons">
            <button onClick={this.handleExperienceBackBtn}>Back</button>
            <button onClick={this.handleExperienceNextBtn}>Next</button>
          </div>
        </main>
      );
    } else if (this.state.pdf) {
      return (
        <div>
          <div>
            <Pdf state={this.state} ref={(el) => (this.componentRef = el)} />
          </div>
          <div className="pdf-buttons">
            <button onClick={this.handlePdfBackBtn}>Back</button>
            <ReactToPrint content={() => this.componentRef}>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <button onClick={handlePrint}>Print this out!</button>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
          </div>
        </div>
      );
    }
  }
}

export default App;
