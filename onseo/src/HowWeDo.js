import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "bootswatch/dist/materia/bootstrap.css";
import './App.css';
import { Navbar, NavItem, Nav, Grid, Row, Col, DropdownButton, MenuItem } from "react-bootstrap";

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="home">
          <div className="home-text">
            <ReactCSSTransitionGroup  transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
              <h2>{'TutsPlus - Welcome to React Animations'}</h2>
            </ReactCSSTransitionGroup>
          </div>
        </div>
        );
    }
}
export default Skills;