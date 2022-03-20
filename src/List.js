import React, { Component } from "react";
import App from './App';

const List = ({list}) => (
    <ul>
      {(
        list
          .filter(list => list.show)
          .map(list => <li><b>Name:</b> {list.firstname} {list.lastname} <b>Number:</b> {list.phone}</li>)
      )}
    </ul>
);

export default List;