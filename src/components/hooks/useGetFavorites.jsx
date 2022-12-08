import { useQuery, gql } from "@apollo/client";
const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;
export const useGetFavorites = () => {
  const { data, loading, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });
  return { data, loading, error };
};
