import React, { useState } from "react";
import { NftSection } from "../components/marketPlace/NftSection";
import { MarketPlaceFilters } from "../components/marketPlace/MarketPlaceFilters";
import { MarketPlaceHeader } from "../components/marketPlace/MarketPlaceHeader";
import { MarketPlaceSubmenu } from "../components/marketPlace/MarketPlaceSubmenu";
import { LayoutContainer } from "../layout/LayoutContainer";
import { AddNftForm } from "../components/marketPlace/AddNftForm"; // Adjust the import path

export function HomePage() {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);

  return (
    <LayoutContainer>
      <MarketPlaceHeader />
      <MarketPlaceSubmenu />
      <MarketPlaceFilters />
      <NftSection />
      <button
        onClick={handleOpenForm}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg"
      >
        Add NFT
      </button>
      {isFormOpen && <AddNftForm onClose={handleCloseForm} />}
    </LayoutContainer>
  );
}
