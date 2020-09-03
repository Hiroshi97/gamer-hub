import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGamesBasedOnPlatform } from "../../api-call/gameAPI";
import {
  GameStoreHeader,
  GameStoreGameList,
  GameStorePagination,
  GameStorePlatformOptions,
} from "../../components/GameStore";
import "./game-store.scss";
import { FetchGameRequest, FetchGameSuccess } from "../../actions/GameActions";
import { Toast, ToastBody } from "react-bootstrap";

export default function GameStore() {
  const [list, setList] = useState([]);
  const [platform, setPlatform] = useState("4919");
  //   const [category, setCategory] = useState("4");
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.gameState.loading);
  const isDone = useRef(false);

  useEffect(() => {
    isDone.current = false;
    if (!isDone.current) {
      window.scrollTo(0, 400);
      dispatch(FetchGameRequest());
      getGamesBasedOnPlatform(platform, page).then((res) => {
        setList(res);
        dispatch(FetchGameSuccess());
      });
    }
    return () => {
      isDone.current = true;
    };
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

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = React.useCallback(() => {
    setShow(false);
  });

  return (
    <div className="container-fluid game-store-page">
      <div className="container game-store-content">
        <div className="row game-store-custom-breadcrumb mt-4">
          <ul>
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" className="text-white active">
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
        <GameStoreGameList
          list={list}
          isLoading={isLoading}
          handleShow={handleShow}
        />
        {/* PAGINATION */}
        <GameStorePagination page={page} handlePagination={handlePagination} />
      </div>
      <Toast
        style={{
          position: "fixed",
          bottom: "20px" /* Place the button at the bottom of the page */,
          right: "30px" /* Place the button 30px from the right */,
          zIndex: 99 /* Make sure it does not overlap */,
          backgroundColor: "#5cb85c",
        }}
        onClose={handleClose}
        show={show}
        autohide
        delay={1000}
      >
        <ToastBody><i className="fas fa-check-circle"></i> Added successfully!</ToastBody>
      </Toast>
    </div>
  );
}
