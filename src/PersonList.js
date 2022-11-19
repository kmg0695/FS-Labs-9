import React, { Component } from "react";
import axios from "axios";
import PersonDetails from "./PersonDetails";

export default class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      this.setState({ persons: res.data.results });
    });
  }

  render() {
    return (
      <>
        <h2>Person List</h2>
        {this.state.persons.map((person) => (
          <div key={person.email}>
            <PersonDetails person={person} />
          </div>
        ))}
      </>
    );
  }
}
