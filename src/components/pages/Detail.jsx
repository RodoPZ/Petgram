import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { useParams } from "react-router-dom";
import { Layout } from "../Layout";

const Detail = () => {
  const { id } = useParams();
  return (
    <Layout title={`Fotografía ${id}`}>
      <PhotoCardWithQuery id={id} />
    </Layout>
  );
};

export default Detail;
