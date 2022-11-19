import React from "react";

export default function PersonDetails({ person }) {
  return (
    <div>
      <img
        src={person.picture.large}
        alt={person.name.first}
        style={{ display: "inline-block" }}
      />
      <h3>
        {person.name.title} {person.name.first} {person.name.last} (
        {person.login.username})
      </h3>
      <p>
        {person.location.city}, {person.location.state},{" "}
        {person.location.country}
      </p>
      <hr />
    </div>
  );
}
