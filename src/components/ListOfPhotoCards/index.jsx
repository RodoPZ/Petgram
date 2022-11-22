import React from "react";
import { PhotoCard } from "../PhotoCard";
import propTypes from "prop-types";
import { useGetPhotos } from "../hooks/useGetPhotos";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (error) return <pre>{error.message}</pre>;

  return loading ? (
    "Loading..."
  ) : (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

ListOfPhotoCards.propTypes = {
  categoryId: propTypes.number,
};
