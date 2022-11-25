import React from "react";
import { PhotoCard } from "../PhotoCard";
import propTypes from "prop-types";
import { useGetPhotos } from "../hooks/useGetPhotos";
import { LoadingRectangle } from "../LoadingSkeleton/styles";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (error) return <pre>{error.message}</pre>;

  return loading ? (
    <ul>
      {[1, 2, 3, 4, 5].map((number) => (
        <LoadingRectangle key={number} />
      ))}
    </ul>
  ) : (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

ListOfPhotoCards.propTypes = {
  categoryId: propTypes.string,
};
