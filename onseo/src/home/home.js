import React, { Component } from 'react';
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import  Brand  from '../image/BrandOnseo.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "bootswatch/dist/materia/bootstrap.css";
import './home.css';
import { Row, Col } from "react-bootstrap";
const contentStyle = {
  background: "rgba(255,255,255,0.6)",
  borderRadius: "0 10px 10px 0",
  width: "25%",
  height: "100%",
  border: "none",
  marginLeft: "0",
};

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Brand: Brand,
        showMenu: false,
        search: false,
        value: ""
      }
      this.showMenu = this.showMenu.bind(this);
      this.handleClickSearch = this.handleClickSearch.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleChange = this.handleChange.bind(this);
  
    }
    handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
    handleSearch(e) {
      console.log(this.state.value);
      this.setState({
        value: ""
      });
    }
    handleClickSearch(event) {
      event.preventDefault();
      this.setState({ search: !this.state.search });
    }
    showMenu(event) {
      event.preventDefault();
      this.setState({
        showMenu: true
      })
    }
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <Row>
              <Col sm={3} lg={3}>
                <div className="styles">
                  <Popup
                    modal
                    contentStyle={contentStyle}
                    closeOnDocumentClick={true}
                    trigger={open => <BurgerIcon open={open} />}
                  >
                    {close => <Menu close={close} />}
                  </Popup>
                </div>
              </Col>
              <Col sm={1} lg={1}></Col>
              <Col sm={4} lg={4}>
                <a href="#" className="App-brand">
                  <img className='Img-brand' src={this.state.Brand} />
                </a>
              </Col>
              <Col className="text-right" sm={4} lg={4}>
                <a onClick={this.handleClickSearch} className="search">
                  <i className="glyphicon glyphicon-search font-size blueColor"></i>
                </a>
                {this.state.search ? 
                    (
                      <div>
                        <a onClick={this.handleSearch}>
                          <i className="glyphicon glyphicon-chevron-right blueColor text-size"></i>
                        </a>
                        <input onChange={this.handleChange} value={this.state.value} className="searchField form-control text-size1" type="text" placeholder="Search..." />
                      </div>
                    ) : 
                    (
                      null
                    )
                  }
              </Col>  
            </Row>  
          </div>
          <div className="home">
            <div className="home-text">
              {/* <ReactCSSTransitionGroup  transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                <h1 className="blue-text">THE GAME ARE</h1>
                <h1 className="white-text">OUR BUSSiNESS</h1>
              </ReactCSSTransitionGroup> */}
            </div>
          </div>
        </div>
      );
    }
  }
  export default Home;