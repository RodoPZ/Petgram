import React from "react";
import { PhotoCard } from "../PhotoCard";
import propTypes from "prop-types";
import { useGetPhotos } from "../hooks/useGetPhotos";
import { LoadingRectangle } from "../LoadingSkeleton/styles";
import { Item } from "./styles";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (error) return <pre>{error.message}</pre>;

  return loading ? (
    <Item>
      {[1, 2, 3, 4, 5].map((number) => (
        <LoadingRectangle key={number} />
      ))}
    </Item>
  ) : (
    <Item>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </Item>
  );
};

ListOfPhotoCards.propTypes = {
  categoryId: propTypes.string,
};
