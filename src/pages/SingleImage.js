import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../components/ImageCard";
const API_KEY = "21145804-b1dabd64212070a566be72dd1";

const SingleImage = () => {
  let { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!isNaN(parseInt(id))) {
      fetch(
        `https://pixabay.com/api/?key=${API_KEY}&id=${id}&image_type=photo&&pretty=true`
      )
        .then((response) => response.json())
        .then((data) => setImage(data.hits[0]));
    }
  }, []);
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="max-w-lg">
        {image ? (
          <ImageCard image={image} />
        ) : (
          <h1>No image found with given ID.</h1>
        )}
      </div>
    </div>
  );
};

export default SingleImage;
