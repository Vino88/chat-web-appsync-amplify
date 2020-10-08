import gql from "graphql-tag"

export default gql(`
  query ListRooms {
    listRooms(filter: {and: {_deleted: {ne: true}}}){
      items {
        __typename
        id
        createdAt
      }
    }
  }`);
