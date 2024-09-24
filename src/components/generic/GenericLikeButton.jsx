import React from "react"
import { GenericIconButton } from "./GenericIconButton";
import toast from "react-hot-toast";
import { useLikeStore } from "../../hooks/useStore";
import { TiHeart, TiHeartOutline } from "react-icons/ti";

export const GenericLikeButton = ({ item }) => {
  const { likedItems, addLikeItem, unlikeItem } = useLikeStore()
  
  const handleLikeUnlike = (item, isLike) => {
    addLikeItem(item);
    if (isLike) unlikeItem(item);
    toast(`${isLike ? 'Removed from' : 'Added to'} likes!`, { icon: !isLike && '❤️' });
  };

  return (
    <GenericIconButton
      icon={likedItems?.includes(item) ? <TiHeart color="#ec7063" /> : <TiHeartOutline />}
      tooltip={likedItems?.includes(item) ? 'Unlike' : 'Like'}
      onClick={() => handleLikeUnlike(item, likedItems?.includes(item))}
    />
  );
}