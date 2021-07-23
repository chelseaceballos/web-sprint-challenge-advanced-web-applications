import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    axiosWithAuth()
    .get('api/colors')
    .then(res => setColorList(res.data))
  }, [refresh])
  
const deleteColor = (id) => {
  setColorList(colorList.filter(item => (item.id !== id)))
  setRefresh(!refresh)
}

  return (
    <div className="container">
      <ColorList colors={colorList} deleteAColor={deleteColor} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
