import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      formState: "1",
      firstName: "",
      lastTime: "",
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
      case "lastname":
          this.setState({firstName: event.target.value});
          break;
      case "reason":
          this.setState({firstName: event.target.value});
          break;
      case "squadron":
          this.setState({firstName: event.target.value});
          break;
    }
  }

  handleSubmit = () =>{
    
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
          <form>
            <input type="textbox" id="firstName" value ={this.state.firstName}  onChange={this.handleChange} ></input>
            <input type="textbox" id="lastName" value ={this.state.lastName} onChange={this.handleChange} ></input>
            <input type="textbox" id="reason" value ={this.state.reason} onChange={this.handleChange} ></input>
            <input type="textbox" id="squadron" value ={this.state.squadron} onChange={this.handleChange} ></input>       
          </form>
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

