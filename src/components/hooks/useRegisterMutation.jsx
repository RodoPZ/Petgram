import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
export const useRegisterMutation = () => {
  const [Mutation, { data, loading, error }] = useMutation(REGISTER);

  return { Mutation, data, loading, error };
};
