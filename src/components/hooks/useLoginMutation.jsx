import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
export const useLoginMutation = () => {
  const [Mutation, { data, loading, error }] = useMutation(LOGIN);

  return { Mutation, data, loading, error };
};
