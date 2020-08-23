import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGamesBasedOnPlatform } from "../../apis/gameAPI";
import {
  GameStoreHeader,
  GameStoreGameList,
  GameStorePagination,
  GameStorePlatformOptions,
} from "../../components/GameStore";
import "./game-store.scss";
import { FetchGameRequest, FetchGameSuccess } from "../../actions/GameActions";

export default function GameStore() {
  const [list, setList] = useState([]);
  const [platform, setPlatform] = useState("4919");
  //   const [category, setCategory] = useState("4");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.gameState.loading);

  useEffect(() => {
    window.scrollTo(0, 400);
    dispatch(FetchGameRequest());
    getGamesBasedOnPlatform(platform, page).then((res) => {
      setList(res);
      dispatch(FetchGameSuccess());
    });
  }, [page, platform]);

  const handlePagination = React.useCallback(
    (e) => {
      e.preventDefault();
      if (e.target.id !== "next" && e.target.id !== "previous")
        setPage(parseInt(e.target.id));
      else if (e.target.id === "next") setPage(page + 1);
      else setPage(page - 1);
    },
    [page]
  );

  const handlePlatform = React.useCallback(
    (e) => {
      e.preventDefault();
      setPage(1);
      setPlatform(e.target.id.split("-")[1]);
    },
    [platform]
  );

  return (
    <div className="container-fluid game-store-page">
      <div className="container game-store-content">
        <div className="row game-store-custom-breadcrumb">
          <ul>
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white active">
                Store
              </Link>
            </li>
          </ul>
        </div>
        {/* GALLERY */}
        <GameStoreHeader />
        {/* PLATFORMS */}
        <GameStorePlatformOptions handlePlatform={handlePlatform} />
        {/* OPTIONS */}

        {/* GAME LIST */}
        <GameStoreGameList list={list} isLoading={isLoading} />
        {/* PAGINATION */}
        <GameStorePagination page={page} handlePagination={handlePagination} />
      </div>
    </div>
  );
}
