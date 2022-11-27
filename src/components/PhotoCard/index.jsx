import React from "react";
import { Img, ImgWrapper, Article } from "./styles";
import { FavButton } from "../FavButton";

import PropTypes from "prop-types";
import { useNearScreen } from "../hooks/useNearScreen";
import { useMuationToogleLike } from "../hooks/useLikeMutation";
import { Link } from "react-router-dom";

export const PhotoCard = ({ id, liked, likes = 0, src }) => {
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();
  const [show, element] = useNearScreen();

  const handleFavCLick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavCLick} />
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string,
  likes: PropTypes.number,
  src: PropTypes.string,
  liked: PropTypes.bool,
};
