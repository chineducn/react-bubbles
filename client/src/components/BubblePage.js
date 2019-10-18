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

  const saveEdit = color => {
    debugger
    axios()
      .put()
      .then(response => {
        debugger
      })
      .catch(error => {
        debugger
      });
    
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axios()
      .delete(`http://localhost:5000/api/colors/${color.id}`)
      .then(response => {
        setColorList(colorList.filter(colors => colors.id !== response.data));
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <>
      <ColorList
        colors={colorList}
        deleteColor={deleteColor}
        updateColors={setColorList}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
