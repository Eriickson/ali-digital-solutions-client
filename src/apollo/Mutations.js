import gql from "graphql-tag";

const NEW_USER_M = gql`
  mutation NewUser($user: UserInput!) {
    newUser(user: $user)
  }
`;

export { NEW_USER_M };
