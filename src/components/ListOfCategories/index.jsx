import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import { LoadingCircle } from "../LoadingSkeleton/styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(function () {
    setLoading(true);
    fetch("https://petgram-server-leidy-daza-leidydaza.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(
    function () {
      const onScroll = () => {
        const newShowFixed = window.scrollY > 180;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onscroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4, 5, 6].map((number) => <LoadingCircle key={number} />)
        : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
