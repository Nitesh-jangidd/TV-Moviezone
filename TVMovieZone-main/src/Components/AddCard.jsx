import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../assets/Animation - 1720638125102.gif";
import { setApiData } from "../Redux/createSlice/fetchapiSlice";
import axios from "axios";
import LoadingBar from 'react-top-loading-bar'

import {
  setSearchText,
  clearSearchText,
} from "../Redux/createSlice/serchSlice";
import { NoData } from "./NoData";

const AddCard = () => {
  const [progress, setProgress] = useState(0)
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const datas = useSelector((state) => state.fetchApi.apiData);
  const searchText = useSelector((state) => state.searchText.searchText);
  const dummy = useSelector((state) => state.searchText.dummy);

  const dispatch = useDispatch();
  useEffect(() => {
    setProgress(70)
    setLoading(true);
    axios
      .get(
        `https://www.omdbapi.com/?s=${searchText}&page=${page}&apikey=39d687ec`
      )
      .then((response) => {
        setProgress(80)
        dispatch(setApiData(response?.data?.Search));
        setProgress(100)
        setLoading(false);
        dispatch(clearSearchText);
        setProgress(100)
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [dummy, page]);

  return (
    <div>
      {!loading && !datas && <NoData></NoData>}
      {loading ? (
        <div>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <img src={Loader} className="m-auto w-10 h-8" /></div>
      ) : (
        <div>
          <div className="flex flex-wrap justify-around">
            {datas?.map((item, index) => (
              <div key={index}>
                <Modal item={item} />
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <button disabled={page===1 || !datas && page==1} 
              onClick={() => {
                setPage(page - 1);
              }}
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Previous Page
            </button>
            <button disabled={!searchText && datas}
              onClick={() => {
                dispatch(clearSearchText());
                dispatch(setApiData(null))
              }}
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Home
            </button>
            <button disabled={!datas }
              onClick={() => {
                setPage(page + 1);
              }}
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Next page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCard;
