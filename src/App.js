import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bilgi from './bilgi.json';
import Experience from "./Experience";
import Interests from "./Interets";
import Projects from "./Projects";
import Skill from "./Skill";
import Language from "./Language";
import Education from "./Education";
class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <div className="sidebar-wrapper">
              <div className="profile-container">
                  <img className="profile" src={bilgi.image} alt=""
                  width="100px" height="100px"/>
                  <h1 className="name"> {bilgi.name} </h1>
                  <h3 className="tagline">Developer</h3>
              </div>

              <div className="contact-container container-block">
                  <ul className="list-unstyled contact-list">
                      <li className="email"><i className="fa fa-envelope"></i><a href={"mailto:" +  bilgi.email}>{bilgi.email}</a></li>
                      <li className="phone"><i className="fa fa-phone"></i><a href={bilgi.phone}>{bilgi.phone}</a></li>
                      <li className="website"><i className="fa fa-globe"></i><a href={bilgi.website} target="_blank">{bilgi.website}</a></li>
                      <li className="twitter"><i className="fa fa-twitter"></i><a href={bilgi.twitterlink} target="_blank">{bilgi.twitter}</a></li>
                  </ul>
              </div>
             <div className="education-container container-block">
                  <h2 className="container-block-title">Education</h2>
                  {bilgi.Education.map((item, key)=><Education item={item} key={key}/>)}
              </div>


              <div className="languages-container container-block">
                  <h2 className="container-block-title">Languages</h2>
                  <ul className="list-unstyled interests-list">
                      {bilgi.Languages.map((item, key)=> <Language item={item} key={key}/>)}
                  </ul>
              </div>

              <div className="interests-container container-block">
                  <h2 className="container-block-title">Interests</h2>
                  <ul className="list-unstyled interests-list">
                      {bilgi.Interests.map((item,key) => <Interests item={item} key={key}/>)}
                  </ul>
              </div>

          </div>

          <div className="main-wrapper">


              <section className="section summary-section">
                  <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                  <div className="summary">
                      <p>{bilgi.Career}</p>
                  </div>
              </section>

              <section className="section experiences-section">
                  <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

                {bilgi.Experiences.map((item,key) => <Experience item={item} key={key} />)}

              </section>


              <section className="section projects-section">
                  <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                  <div className="intro">
                      <p>{bilgi.ProjectDescription}</p>
                  </div>
                  {bilgi.Projects.map((item,key)=> <Projects item={item} key={key}/>)}
              </section>

              <section className="skills-section section">
                  <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                  <div className="skillset">
                      {bilgi.Skills.map((item,key)=> <Skill item={item} key={key}/>)}
                  </div>
              </section>

          </div>
      </div>
    );
  }
}

export default App;
