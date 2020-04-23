import React, { Component } from "react";

import { RoomContext } from "../Context";

import { IProviderState } from "../Context";
import Room from "./Room";
import Loading from "./Loading";
import Title from "./Title";
import { IRoom } from "../model/IRoom";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms }: IProviderState = this.context;
    console.log(featuredRooms);
    let rooms = featuredRooms.map((room: IRoom) => {
        return (<Room key={room.id} room={room}></Room>)
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms"></Title>
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
