import React from "react";

const ImageInput = ({ setInputSearch }) => {
  return (
    <div>
      <input
        onChange={(e) => setInputSearch(e.target.value)}
        className="border px-4 py-2 border-gray-400 rounded"
        type="text"
        placeholder="Search for image..."
      />
    </div>
  );
};

export default ImageInput;
