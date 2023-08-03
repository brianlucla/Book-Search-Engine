import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query  {
    user {
      _id
      username
      email
      password
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;