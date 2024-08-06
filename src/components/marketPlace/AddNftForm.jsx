import React, { useState } from "react";
import axios from "axios";
import "./AddNftForm.css";

export function AddNftForm({ onClose }) {
  const [title, setTitle] = useState("");
  const [reference, setReference] = useState("");
  const [author, setAuthor] = useState("");
  const [priceEth, setPriceEth] = useState("");
  const [priceUsd, setPriceUsd] = useState("");
  const [img, setImg] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result); // base64 string
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
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

    try {
      await axios.post("http://localhost:3000/nfts", newNft);
      onClose(); // Close the form on successful submission
    } catch (error) {
      console.error("Error adding NFT:", error);
    }
  };

  return (
    <div className="add-nft-overlay">
      <div className="add-nft-container">
        <h2 className="add-nft-title">Add New NFT</h2>
        {error && <div className="add-nft-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="add-nft-field">
            <label className="add-nft-label">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="add-nft-input"
              placeholder="Enter NFT title"
            />
          </div>
          <div className="add-nft-field">
            <label className="add-nft-label">Reference</label>
            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              className="add-nft-input"
              placeholder="Enter NFT reference"
            />
          </div>
          <div className="add-nft-field">
            <label className="add-nft-label">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="add-nft-input"
              placeholder="Enter author name"
            />
          </div>
          <div className="add-nft-field">
            <label className="add-nft-label">Price (ETH)</label>
            <input
              type="number"
              step="0.01"
              value={priceEth}
              onChange={(e) => setPriceEth(e.target.value)}
              className="add-nft-input"
              placeholder="Enter price in ETH"
            />
          </div>
          <div className="add-nft-field">
            <label className="add-nft-label">Price (USD)</label>
            <input
              type="number"
              step="0.01"
              value={priceUsd}
              onChange={(e) => setPriceUsd(e.target.value)}
              className="add-nft-input"
              placeholder="Enter price in USD"
            />
          </div>
          <div className="add-nft-field">
            <label className="add-nft-label">Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="add-nft-input"
            />
          </div>
          <div className="add-nft-actions">
            <button
              type="button"
              onClick={onClose}
              className="add-nft-cancel-button"
            >
              Cancel
            </button>
            <button type="submit" className="add-nft-submit-button">
              Add NFT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
