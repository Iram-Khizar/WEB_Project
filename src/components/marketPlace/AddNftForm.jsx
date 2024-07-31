import React, { useState } from "react";
import axios from "axios";

export function AddNftForm({ onClose }) {
  const [title, setTitle] = useState("");
  const [reference, setReference] = useState("");
  const [author, setAuthor] = useState("");
  const [priceEth, setPriceEth] = useState("");
  const [priceUsd, setPriceUsd] = useState("");
  const [img, setImg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !reference || !author || !priceEth || !priceUsd || !img) {
      setError("All fields are required!");
      return;
    }

    const newNft = {
      title,
      reference,
      author,
      priceEth,
      priceUsd,
      img,
    };

    axios
      .post("http://localhost:3000/nfts", newNft)
      .then(() => {
        onClose(); // Close the form on successful submission
      })
      .catch((error) => {
        console.error("Error adding NFT:", error);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Add New NFT</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter NFT title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Reference</label>
            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter NFT reference"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter author name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Price (ETH)
            </label>
            <input
              type="number"
              step="0.01"
              value={priceEth}
              onChange={(e) => setPriceEth(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter price in ETH"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Price (USD)
            </label>
            <input
              type="number"
              step="0.01"
              value={priceUsd}
              onChange={(e) => setPriceUsd(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter price in USD"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter image URL"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add NFT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
