import { gql } from "@apollo/client";

const GET_REPOSITORY = gql`
  query GetRepository($id: ID!) {
    node(id: $id) {
      ... on Repository {
        name
        description
        url
        pushedAt
        primaryLanguage {
          name
        }
        languages(first: 10) {
          nodes {
            name
          }
        }
        owner {
          id
          avatarUrl
          ... on Organization {
            url
            email
            name
          }
          ... on User {
            url
            name
          }
        }
      }
    }
  }
`;

export { GET_REPOSITORY };
