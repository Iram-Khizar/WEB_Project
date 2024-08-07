// import {
//   Cross,
//   Diamond,
//   Discount,
//   Hand,
//   Image,
//   Search,
// } from "../../assets/Icons";
// import { Button } from "../shared/Button";

// export function MarketPlaceSubmenu() {
//   return (
//     <div className="py-6 flex md:gap-3 justify-between text-sm">
//       <div className="flex bg-zinc-800 rounded-xl items-center p-3 gap-1 w-full">
//         <Search />
//         <input type="search" placeholder="Search" className="bg-zinc-800" />
//       </div>
//       <div className="flex gap-3">
//         <Button
//           className="md:flex hidden gap-2.5 rounded-xl px-[50px]  bg-secondary-danger items-center"
//           variant="ghost"
//         >
//           <Image />
//           <span>NFT</span>
//           <Cross />
//         </Button>
//         <Button
//           className="md:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center min-w-max"
//           variant="ghost"
//         >
//           <Discount />
//           <span>Discount Codes</span>
//         </Button>
//         <Button
//           className="xl:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center  min-w-max"
//           variant="ghost"
//         >
//           <Hand />
//           <span>Physical Items</span>
//         </Button>
//         <Button
//           className="xl:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center  min-w-max"
//           variant="ghost"
//         >
//           <Diamond />
//           <span>Perks</span>
//         </Button>
//       </div>
//     </div>
//   );
// }
// // import React, { useState, useEffect } from "react";
// // import { Search } from "../../assets/Icons";
// // import { Button } from "../shared/Button";
// // import axios from "axios";

// // export function MarketPlaceSubmenu() {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [nfts, setNfts] = useState([]);

// //   useEffect(() => {
// //     const delayDebounceFn = setTimeout(() => {
// //       if (searchQuery) {
// //         axios
// //           .get(`http://localhost:3000/nfts?search=${searchQuery}`)
// //           .then((response) => {
// //             setNfts(response.data);
// //           })
// //           .catch((error) => {
// //             console.error("Error fetching NFTs:", error);
// //           });
// //       }
// //     }, 500);

// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchQuery]);

// //   const handleSearchChange = (e) => {
// //     setSearchQuery(e.target.value);
// //   };

// //   return (
// //     <div className="py-6 flex md:gap-3 justify-between text-sm">
// //       <div className="flex bg-zinc-800 rounded-xl items-center p-3 gap-1 w-full">
// //         <Search />
// //         <input
// //           type="search"
// //           placeholder="Search"
// //           className="bg-zinc-800"
// //           value={searchQuery}
// //           onChange={handleSearchChange}
// //         />
// //       </div>
// //       <div className="flex gap-3">
// //         <Button
// //           className="md:flex hidden gap-2.5 rounded-xl px-[50px] bg-secondary-danger items-center"
// //           variant="ghost"
// //         >
// //           <Image />
// //           <span>NFT</span>
// //           <Cross />
// //         </Button>
// //         <Button
// //           className="md:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center min-w-max"
// //           variant="ghost"
// //         >
// //           <Discount />
// //           <span>Discount Codes</span>
// //         </Button>
// //         <Button
// //           className="xl:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center min-w-max"
// //           variant="ghost"
// //         >
// //           <Hand />
// //           <span>Physical Items</span>
// //         </Button>
// //         <Button
// //           className="xl:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center min-w-max"
// //           variant="ghost"
// //         >
// //           <Diamond />
// //           <span>Perks</span>
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // }
import React, { useState, useEffect } from "react";
import {
  Search,
  Image,
  Cross,
  Discount,
  Hand,
  Diamond,
} from "../../assets/Icons";
import { Button } from "../shared/Button";
import axios from "axios";

export function MarketPlaceSubmenu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        axios
          .get(`http://localhost:3000/nfts?search=${searchQuery}`)
          .then((response) => {
            setNfts(response.data);
          })
          .catch((error) => {
            console.error("Error fetching NFTs:", error);
          });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="py-6 flex md:gap-3 justify-between text-sm">
      <div className="flex bg-zinc-800 rounded-xl items-center p-3 gap-1 w-full">
        <Search />
        <input
          type="search"
          placeholder="Search"
          className="bg-zinc-800"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex gap-3">
        <Button
          className="md:flex hidden gap-2.5 rounded-xl px-[50px] bg-secondary-danger items-center"
          variant="ghost"
        >
          <Image />
          <span>NFT</span>
          <Cross />
        </Button>
        <Button
          className="md:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center min-w-max"
          variant="ghost"
        >
          <Discount />
          <span>Discount Codes</span>
        </Button>
        <Button
          className="xl:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center min-w-max"
          variant="ghost"
        >
          <Hand />
          <span>Physical Items</span>
        </Button>
        <Button
          className="xl:flex hidden gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center min-w-max"
          variant="ghost"
        >
          <Diamond />
          <span>Perks</span>
        </Button>
      </div>
    </div>
  );
}
