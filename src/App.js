import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      formState: "1",
      firstName: "",
      lastName: "",
      reason: "",
      squadron: "",
      signIn: "",
      wait: ""
    };
  }

  splitInput(key){
    alert("hello it worked!");
  }

  haveCAC(e)
  {
      let formState = "1";
      this.setState({formState});
  }

  haveNoCAC(e)
  {
      this.setState({
        formState: "2"
    });
  }

  handleChange = (event) =>{
    switch (event.target.id) {
      case "firstName":
          this.setState({firstName: event.target.value});
          break;
      case "lastName":
          this.setState({lastName: event.target.value});
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
    alert(this.state);
  }

  clearFrom = (event) =>{
    this.setState({
        formState: "2",
        firstName: "",
        lastName: "",
        reason: "",
        squadron: "",
        signIn: "",
        wait: ""
    })
  } 

  render() {

    let form;

    if (this.state.formState === "1") {
      form = 
        <div className = "inputMenu-div">
          <h4 className = "formCAC">Please Scan the Front of you CAC</h4>
          <img src= "cac.jpg" height="300" width= "200" className = "formCAC" alt="Sample CAC"/>
          <div className= "scanBox">
            <input id="scanInput" type="textbox" onChange={this.handleChange} value = {this.state.firstName} ></input>         
          </div>
        </div>;
    } else {
      form =
        <div className = "inputMenu-div">
          <form onSubmit={this.handleSubmit}>
            <label>First Name: </label>
            <input type="textbox" id="firstName" value ={this.state.firstName}  onChange={this.handleChange} ></input><br />
            <label>Last Name: </label>
            <input type="textbox" id="lastName" value ={this.state.lastName} onChange={this.handleChange} ></input><br />
            <label>Reason for Visit: </label>
            <input type="textbox" id="reason" value ={this.state.reason} onChange={this.handleChange} ></input><br />
            <label>Squardon: </label>
            <input type="textbox" id="squadron" value ={this.state.squadron} onChange={this.handleChange} ></input><br />
            <input type="submit" value="Sign In"/>   
          </form>
          <button onClick={this.clearFrom}>Clear From</button>
        </div>;
    }


    return (
      <div id = "menu">
        <div className = "inputMenu-div">
          <button id="CAC" onClick={this.haveCAC.bind(this)} type="button" value= "1" className="btn btn-info">Sign In With CAC</button>
          <button id="NoCAC" onClick={this.haveNoCAC.bind(this)} type="button" value= "2" className="btn btn-info">Do Not have CAC</button>
        </div>
        
        <div>
          {form}
        </div>
      </div>
    );
  }


}

export default App;

