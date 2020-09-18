import React, { Component } from 'react';
import './App.css';
import CustomerTable from './CustomerTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formState: "CAC",
      firstName: "",
      lastName: "",
      email : "",
      station : "",
      section : "",
      service : "",
      tech : "",
      created : "",
      serviceTime : ""
    };
  }

  splitInput(key) {
    alert("hello it worked!");
  }

  haveCAC(e){
      let formState = "CAC";
      this.setState({formState});
  }

  haveNoCAC(e){
      this.setState({
        formState: "noCAC"
    });
  }

  showQueue(e){
    this.setState({
      formState: "queue"
    });
  }


  handleChange = (event) => {
    switch (event.target.id) {
      case "firstName":
          this.setState({firstName: event.target.value});
          break;
      case "lastName":
          this.setState({lastName: event.target.value});
          break;
      case "email":
          this.setState({email: event.target.value});
          break;
      case "reason":
          this.setState({reason: event.target.value});
          break;
      case "squadron":
          this.setState({squadron: event.target.value});
          break;
      default:
          break;
    }
  }

  handleSubmit = (event) =>{ 
    var visit = {
      firstName : this.state.firstName, 
      lastName : this.state.lastName, 
      phone : this.state.phone,
      email : this.state.email,
      station : this.state.station,
      section : this.state.section,
      service : this.state.service,
      tech : this.state.tech,
      created : this.state.created,
      serviceTime : this.state.serviceTime
    };

    fetch("http://localhost:8080/visit/", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(visit)
      });
  }

  clearFrom = (event) =>{
    this.setState({
        formState: "noCAC",
        firstName: "",
        lastName: "",
        reason: "",
        squadron: "",
        phone: "",
        signIn: "",
        wait: "",
        status: ""
    })
  } 

  render() {

    let form;

    if (this.state.formState === "CAC") {
      form = 
        <div className = "inputMenu-div">
          <h4 className = "formCAC">Please Scan the Front of you CAC</h4>
          <img src= "cac.jpg" height="300" width= "200" className = "formCAC" alt="Sample CAC"/>
          <div className= "scanBox">
            <input id="scanInput" type="textbox" onChange={this.handleChange} value = {this.state.firstName} ></input>         
          </div>
        </div>;
    } else if (this.state.formState === "noCAC") {
      form =
        <div className = "inputMenu-div">
          <form className = "inputbox" onSubmit={this.handleSubmit}>
            <label>First Name: </label>
            <input type="textbox" id="firstName" value ={this.state.firstName}  onChange={this.handleChange} ></input><br />
            <label>Last Name: </label>
            <input type="textbox" id="lastName" value ={this.state.lastName} onChange={this.handleChange} ></input><br />
            <label>Phone: </label>
            <input type="textbox" id="phone" value ={this.state.phone} onChange={this.handleChange} ></input><br />
            <label>Email: </label>
            <input type="email" id="email" value ={this.state.email} onChange={this.handleChange} ></input><br />
            <label>Squardon: </label>
            <input type="textbox" id="squadron" value ={this.state.squadron} onChange={this.handleChange} ></input><br />
            <label>Reason for Visit: </label>
            <input type="textbox" id="reason" value ={this.state.reason} onChange={this.handleChange} ></input><br />
            <div id= "clearFloat"></div>
            <input id="submit" type="submit" value="Sign In" className="btn btn-info"/> 
            <button id="clear" className="btn btn-info" onClick={this.clearFrom}> Clear Form</button>  
          </form> 
        </div>;
    } else if(this.state.formState === "queue") {
      form = 
      <div className = "inputMenu-div">
        <CustomerTable/>
      </div>
    } 


    return (
      <div id = "menu">
        <div className = "inputMenu-div">
          <button id="CAC" onClick={this.haveCAC.bind(this)} type="button" value= "CAC" className="btn btn-info">Sign In With CAC</button>
          <button id="NoCAC" onClick={this.haveNoCAC.bind(this)} type="button" value= "noCAC" className="btn btn-info">Do Not have CAC</button>
          <button id="showQueue" onClick={this.showQueue.bind(this)} type="button" value= "queue" className="btn btn-info">Waiting List</button>
        </div>
        
        <div>
          {form}
        </div>
      </div>
    );
  }


}

export default App;

