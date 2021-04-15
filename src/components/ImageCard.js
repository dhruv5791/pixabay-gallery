import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div key={image.id} className="relative shadow rounded overflow-hidden">
      <img className="w-full" src={image.webformatURL} alt={image.tags} />
      <img
        className="absolute top-1 left-1 rounded-full w-10"
        src={image.userImageURL}
        alt={image.user}
      />
      <h1 className="text-2xl p-4">User ID: {image.user_id}</h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>Comments: {image.comments}</div>
        <div>Likes: {image.likes}</div>
        <div>{image.tags}</div>
      </div>
    </div>
  );
};

export default ImageCard;
