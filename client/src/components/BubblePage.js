import React, { useState, useEffect } from "react";
import axios from "../axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getColors = () => {
    axios()
      .get('http://localhost:5000/api/colors')
      .then(response => {
        setColorList(response.data);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  useEffect(() => {
    getColors();
  }, [])

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  };

  const deleteColor = color => {
    // make a delete request to delete this color
  };

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
