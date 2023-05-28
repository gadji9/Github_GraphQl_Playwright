import { gql } from "@apollo/client";

const GET_SEARCH_REPOSITORIES = gql`
  query GetRepositories(
    $repositoryName: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    search(
      query: $repositoryName
      type: REPOSITORY
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          name
          pushedAt
          url
          description
          primaryLanguage {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

const GET_OWN_REPOSITORIES = gql`
  query GetOwnRepositories(
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    viewer {
      repositories(first: $first, last: $last, after: $after, before: $before) {
        totalCount
        nodes {
          id
          name
          pushedAt
          url
          description
          primaryLanguage {
            name
          }
        }

        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;

export { GET_OWN_REPOSITORIES, GET_SEARCH_REPOSITORIES };
