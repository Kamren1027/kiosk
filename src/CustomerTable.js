import React, { Component } from 'react';
import './CustomerTable.css';

class CustomerTable extends Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
        visits: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/visit/")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          visits: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  renderTableData() {
    return this.state.visits.map((visit) => {
      const { created, firstName, id, lastName, phone, service, waitTime} = visit //destructuring
      return (
          <tr key={id}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{created}</td>
            <td>{phone}</td>
            <td>{service}</td>
            <td>{waitTime}</td>
            <td><button id="process" className="btn btn-info" onClick={() => this.processCustomer(visit)}>Process</button></td>
          </tr>
      )
    })
  }

  renderTableHeader() {
    let header = Object.keys(this.state.visits[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  render() {
    return (
      <div>
          <h1 id='tableTitle'>Customer Queue</h1>
          <table id='visits'>
            <tbody>
                <tr>{/*this.renderTableHeader()*/}</tr>
                {this.renderTableData()}
            </tbody>
          </table>
      </div>
    )
  }

  processCustomer(visit) {  
    alert('Processing' + visit.firstName);
    fetch("http://localhost:8080/visit/" + visit.id)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          visits: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
}

export default CustomerTable