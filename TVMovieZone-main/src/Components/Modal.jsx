import { Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Noimage from "../assets/images.jfif"

import { useSelector } from "react-redux";
export default function Component({ item }) {
  const mainArray = useSelector((state) => state.fetchApi.apiData);
  const [openModal, setOpenModal] = useState(false);
  const [modalArray, setmodalArray] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?t=${item.Title}&apikey=39d687ec`)
      .then((response) => {
        
        setmodalArray(response.data);

     
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [mainArray]);
  return (
    <>
      <div
        onClick={() => {
        
          setOpenModal(true);
        }}
      >
        <Card item={item}></Card>
      </div>
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="bg-gradient-to-r from-gray-300 to-slate-500"
      >
        <Modal.Header className="md:ml-[26%]  lg:ml-[27%] ">{modalArray?.Title}</Modal.Header>
        <Modal.Body className="bg-gradient-to-r from-fuchsia-300 to-violet-300">
          <div className="space-y-6 ">
            <img src={modalArray.Poster=="N/A"?Noimage:modalArray.Poster} className="m-[auto]" />
            <p className="text-3xl leading-relaxed text-black dark:text-gray-400 text-center ">
              Details
            </p>
            <p className="text-base leadtext text-blue-800">
              Plot:-<span className="text-stone-800">{modalArray.Plot=="N/A"?"No Plot Availabe":modalArray.Plot}</span>
            </p>
            <p className="text-base leading-relaxed text-blue-800 dark:text-gray-400">
              Year of Release:- <span className="text-stone-800">{modalArray.Year}</span>
            </p>
            <p className="text-base leading-relaxed text-blue-800 dark:text-gray-400">
              Genre:- <span className="text-stone-800">{modalArray.Genre}</span>
            </p>
            <p className="text-base leading-relaxed text-blue-800 dark:text-gray-400">
              Director:-<span className="text-stone-800">{modalArray.Director}</span>
            </p>
            <p className="text-base leading-relaxed text-blue-800 dark:text-gray-400">
              Language:- <span className="text-stone-800">{modalArray.Language}</span>
            </p>
            <p className="text-base leading-relaxed text-blue-800 dark:text-gray-400 dark">
              Rating:<br></br>{modalArray.Ratings=="N/A"?"No rating Available": 
              modalArray.Ratings &&
                modalArray.Ratings.map((rating, index) => (
                  <span className="text-stone-800" key={index}>
                     {rating.Source}:- {rating.Value} <br />
                  </span>
                ))}
            </p>
            <p className="text-base leading-relaxed text-blue-800 dark:text-gray-400 dark">
              Actors:-<span className="text-stone-800">{modalArray.Actors}</span>
            </p>
            <p className="text-center">----------------------End---------------------</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
