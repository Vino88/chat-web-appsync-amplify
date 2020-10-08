import React from "react";
import {
  Button,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  CircularProgress
} from "@material-ui/core";
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TrashIcon from '@material-ui/icons/DeleteSharp';
import Avatar from '@material-ui/icons/PersonRounded';
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import uuid from "uuid/v4";
import { Query, Mutation } from "react-apollo";
import { withUser } from "./helpers";

//(filter: {and: {_deleted: {ne: true}}})

const LIST_ROOMS = gql`
  query ListRooms {
    listRooms{
      items {
        id
        createdAt
      }
    }
  }
`;

const CREATE_ROOM = gql`
  mutation CreateRoom($id: ID!) {
    createRoom(input: { id: $id }) {
      id
      createdAt
    }
  }
`;

const DELETE_ROOM = gql`
  mutation DeleteRoom($id: ID!) {
    deleteRoom(input: { id: $id, , _version: 1 }) {
      id
      createdAt
    }
  }
`;

function roomChat(userId) {
  return (
    <>
      <Query query={LIST_ROOMS} fetchPolicy="cache-and-network">
        {({ data, loading, error }) => {
          if (error) return <div>{error.message}</div>;
          if (loading) return <CircularProgress />;
         const user ={userId};
         console.log(user.userId.username);
          return (
            <List
              subheader={
                <ListSubheader component="div">
                <Avatar color="secondary"
                    aria-label="PersonRounded"
                    style={{ position: "responsive", align:"center"}}></Avatar>
                  {user.userId.username} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                List of rooms 
                  
                </ListSubheader>
              }
              dense
            >
              {data.listRooms.items.map(room => (
                <ListItem key={room.id} divider>
                  <Button
                    style={{ flex: 1 }}
                    component={Link}
                    to={`/room/${room.id}`}
                  >
                    <ListItemText
                      primary={room.id}
                      secondary={room.createdAt}
                    />
                  </Button>
                  
                  <Mutation mutation={DELETE_ROOM}>
                    {mutate => (
                      <Fab
                        color="secondary"
                        aria-label="deleteSharp"
                        style={{ position: "responsive", bottom: 10, right: 10 }}
                        onClick={() => {
                          const id = room.id;
                          mutate({
                            variables: {
                              id
                            },
                            optimisticResponse: () => ({
                              deleteRoom: {
                                id,
                                createdAt: new Date()
                              }
                            }),
                            update: (cache, { data: { deleteRoom } }) => {
                              const data = cache.readQuery({ query: LIST_ROOMS });
                              // filter element is there cuz if you are online, you might get the item faster
                              data.listRooms.items = [
                                deleteRoom,
                                ...data.listRooms.items.filter(
                                  item => item.id !== deleteRoom.id
                                )
                              ];
                              cache.writeQuery({ query: LIST_ROOMS, data });
                            } 
                          });
                          window.location.reload(false);
                          }}
                      >
                        <TrashIcon />
                      </Fab>
                    )}
                  </Mutation>
                </ListItem>
              ))}
            </List>
          );
        }}
      </Query>
      <Mutation mutation={CREATE_ROOM}>
        {mutate => (
          <Fab
            color="primary"
            aria-label="Add"
            style={{ position: "absolute", bottom: 10, right: 10 }}
            onClick={() => {
              const id = uuid(); // generate ID - to be consistent with server after sync
              mutate({
                variables: {
                  id
                },
                optimisticResponse: () => ({
                  createRoom: {
                    id,
                    createdAt: new Date()
                  }
                }),
                update: (cache, { data: { createRoom } }) => {
                  const data = cache.readQuery({ query: LIST_ROOMS });
                  // filter element is there cuz if you are online, you might get the item faster
                  data.listRooms.items = [
                    createRoom,
                    ...data.listRooms.items.filter(
                      items => items.id !== createRoom.id
                    )
                  ];
                  cache.writeQuery({ query: LIST_ROOMS, data });
                }
              });
              window.location.reload(false);
            }}
          >
            <AddIcon />
          </Fab>
        )}
      </Mutation>
    </>
  );
};
export default withUser(roomChat);