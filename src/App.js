import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return ( 
      <article className="default">
        <FullName name="Alex" surname="Duganov" link="google.com" />
        <FullName name="Richard" surname="Nikson" link="ya.ru" />
        <FullName name="Sofia" surname="Weider" link="star.war" />
      </article>
    );
  }
}



function FullName(props) {
    return (
      <article>
        <h2> Name {props.name}, surname - {props.surname}</h2>
        <a href={props.link}> Link to my profile </a>
      </article>
    )
}


export default App;
