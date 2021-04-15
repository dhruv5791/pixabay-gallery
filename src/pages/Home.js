import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import ImageInput from "../components/ImageInput";
const API_KEY = "21145804-b1dabd64212070a566be72dd1";

const Home = () => {
  const [images, setImages] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${inputSearch}&image_type=photo&&pretty=true`
    )
      .then((response) => response.json())
      .then((data) => setImages(data.hits));
  }, [inputSearch]);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl uppercase">Pixabay Image Search</h1>
      <div className="flex justify-center my-5">
        <ImageInput setInputSearch={(inputText) => setInputSearch(inputText)} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Link key={index} to={`/${image.id}`}>
            <ImageCard image={image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
