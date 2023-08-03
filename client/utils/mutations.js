import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!){
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookData: BookInput!) {
    removeBook(bookData: $bookData){
      _id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email:$email, password:$password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $username: String!) {
    addUser(email:$email, password: $password, username: $username) {
      token 
      user {
        _id
        username
      }
    }
  }
`