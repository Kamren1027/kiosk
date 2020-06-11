import React, { Component } from 'react'

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
    return this.state.visits.map((visit, index) => {
      const { created, email, firstName, id, lastName, phone, section, service, serviceTime, station, tech, waitTime} = visit //destructuring
      return (
          <tr key={id}>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{created}</td>
            <td>{phone}</td>
            <td>{section}</td>
            <td>{service}</td>
            <td>{serviceTime}</td>
            <td>{station}</td>
            <td>{tech}</td>
            <td>{waitTime}</td>
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
          <h1 id='title'>Customer Queue</h1>
          <table id='visits'>
            <tbody>
                <tr>{/*this.renderTableHeader()*/}</tr>
                {this.renderTableData()}
            </tbody>
          </table>
      </div>
    )
  }
}

export default CustomerTable