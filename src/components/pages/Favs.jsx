import React from "react";
import { useGetFavorites } from "../hooks/useGetFavorites";
import { ListOfFavs } from "../ListOfFavs";
import { Layout } from "../Layout";
const Favs = () => {
  const { data, loading, error } = useGetFavorites();
  console.log({ data, loading, error });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const { favs } = data;

  return (
    <>
      <Layout
        title={`Tus favoritos`}
        subtitle={`Aquí puedes encontrar tus favoritos`}
      >
        <ListOfFavs favs={favs} />
      </Layout>
    </>
  );
};

export default Favs;
