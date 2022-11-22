import { useQuery, gql } from "@apollo/client";
const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;
export const useGetPhotos = (categoryId) => {
  const { data, loading, error } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });
  return { data, loading, error };
};
