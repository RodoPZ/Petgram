import React from "react";
import { ListOfCategories } from "../ListOfCategories";
import { ListOfPhotoCards } from "../ListOfPhotoCards";
import { useParams } from "react-router-dom";

import { Layout } from "../Layout";
const HomePage = () => {
  let { id } = useParams();
  return (
    <>
      <Layout
        title={"Tu app de fotos de mascotas"}
        subtitle={
          "Con petgram puedes encontrar fotos de animales domésticos muy bonitos"
        }
      >
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
      </Layout>
    </>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id;
});
