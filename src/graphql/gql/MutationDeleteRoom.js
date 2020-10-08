import gql from "graphql-tag"

export default gql(`
mutation DeleteRoom($id: ID!) {
  deleteRoom(input: { id: $id, _version: 1}) {
    __typename
    id
    createdAt
  }
}`);