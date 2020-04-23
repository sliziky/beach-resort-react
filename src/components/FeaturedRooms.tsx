import React, { Component, useContext } from "react";

import { RoomContext } from "../Context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const value = this.context;
    console.log(value);
    return <div>Hello from Featured rooms {value}</div>;
  }
}
