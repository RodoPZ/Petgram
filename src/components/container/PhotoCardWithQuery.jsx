import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useGetPhotoWithQuery } from "../hooks/useGetPhotoWithQuery";
import propTypes from "prop-types";

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetPhotoWithQuery(id);

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <PhotoCard {...data.photo} />
    </>
  );
};

PhotoCardWithQuery.propTypes = {
  id: propTypes.string,
};
