import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  return <PhotoCardWithQuery id={id} />;
};
