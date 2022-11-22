import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./components/container/PhotoCardWithQuery";

export const APP = () => {
  const urlParams = new URLSearchParams(location.search);
  const detailId = urlParams.get("detail");
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          {" "}
          <ListOfCategories />
          <ListOfPhotoCards />
        </>
      )}
    </>
  );
};
