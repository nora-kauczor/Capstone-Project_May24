import React from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const StyledBookmarkIcon = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
  font-size: 1.5em;
`;

const StyledFilledHeart = styled(FaHeart)`
  color: red;
`;

const StyledUnfilledHeart = styled(FaRegHeart)`
  color: red;
`;

export function BookmarkIcon({
  onHandleBookmarkedIcon,
  recipe,
  bookmarkedRecipesIDs,
}) {
  function handleClick() {
    onHandleBookmarkedIcon(recipe);
  }

  const isBookmarked = bookmarkedRecipesIDs.includes(recipe._id);

  return (
    <StyledBookmarkIcon onClick={handleClick}>
      {isBookmarked ? <StyledFilledHeart /> : <StyledUnfilledHeart />}
    </StyledBookmarkIcon>
  );
}
