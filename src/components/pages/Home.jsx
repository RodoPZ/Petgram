import React from "react";
import { ListOfCategories } from "../ListOfCategories";
import { ListOfPhotoCards } from "../ListOfPhotoCards";
import { useParams } from "react-router-dom";
export const Home = () => {
  let { id } = useParams();
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
};
