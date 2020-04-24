import React, { Component } from "react";

import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, RouteProps, RouteComponentProps } from "react-router-dom";
import { RoomContext } from "../Context";
import { IRoom } from "../model/IRoom";

interface ISingleRoomState {
  slug: string;
  defaultBcg: string;
}

interface MatchParams {
  room: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

export default class SingleRoom extends Component<
  MatchProps,
  ISingleRoomState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      slug: this.props.match.params.room,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room: IRoom = getRoom(this.state.slug);
    if (room === undefined) {
      return (
        <div className="error">
          <h3>No such room</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    return (
      <Hero hero="roomsHero">
        <Banner title={room.name}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}
