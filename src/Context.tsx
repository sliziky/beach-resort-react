import React, { Component } from "react";
import items from "./data";
import { IRoom } from "./model/IRoom";

const RoomContext = React.createContext<IProviderState | null>(null);

export interface IProviderState {
  rooms: IRoom[];
  sortedRooms: IRoom[];
  featuredRooms: IRoom[];
  loading: boolean;
}

interface IProviderProps {}

export default class RoomProvider extends Component<
  IProviderProps,
  IProviderState
> {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  componentDidMount() {
    let rooms: IRoom[] = this.formatData(items);
    let featuredRooms = rooms.filter((r) => r.featured);

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms:rooms,
      loading: false,
    });

    console.log(rooms);
  }

  formatData(items: any): IRoom[] {
    let tempItems: IRoom[] = items.map((item: any) => {
      let id = item.sys.id;
      let images = item.fields.images.map(
        (image: any) => image.fields.file.url
      );
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  render() {
    return (
      <RoomContext.Provider value={this.state}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
