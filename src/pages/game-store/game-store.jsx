import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getGamesBasedOnPlatform } from "../../apis/gameAPI";
import GameStorePagination from "../../components/GameStore/GameStorePagination";
import GameStoreGameList from "../../components/GameStore/GameStoreGameList";
import "./game-store.scss";
import GameStorePlatformOptions from "../../components/GameStore/GameStorePlatformOptions";
import GameStoreGallery from "../../components/GameStore/GameStoreGallery";

export default function GameStore() {
  const [list, setList] = useState([]);
  const [platform, setPlatform] = useState("4919");
//   const [category, setCategory] = useState("4");
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 400);
    getGamesBasedOnPlatform(platform, page).then((res) => {
      setList(res);
    });
  }, [page, platform]);

  const handlePagination = (e) => {
    e.preventDefault();
    if (e.target.id !== "next" && e.target.id !== "previous")
      setPage(parseInt(e.target.id));
    else if (e.target.id === "next") setPage(page + 1);
    else setPage(page - 1);
  };

  const handlePlatform = (e) => {
      e.preventDefault();
      setPage(1);
      setPlatform(e.target.id.split('-')[1]);
  }

  return (
    <div className="container-fluid game-store-page">
      <div className="container game-store-content">
        <div className="row game-store-custom-breadcrumb">
          <ul>
            <li>
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link to="#" className="text-white active">
                Store
              </Link>
            </li>
          </ul>
        </div>
        {/* GALLERY */}
        <GameStoreGallery />
        {/* PLATFORMS */}
        <GameStorePlatformOptions handlePlatform={handlePlatform}/>
        {/* OPTIONS */}
        
        {/* GAME LIST */}
        <GameStoreGameList list={list}/>
        {/* PAGINATION */}
        <GameStorePagination page={page} handlePagination={handlePagination}/>
      </div>
    </div>
  );
}
