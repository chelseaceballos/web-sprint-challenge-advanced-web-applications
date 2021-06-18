import React, { useState } from "react";

import Color from"./Color";
import EditMenu from"./EditMenu";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors,deleteAColor }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
  
    axiosWithAuth()
    .put(`api/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => {
      console.log(res.data)
      updateColors(colors.map(color => {
        if(color.id === res.data.id){
          return res.data
        } else {
          return color
        }
      }))
    })
    .catch(err => {
       console.log(err)
    })

  };

  const deleteColor = color => {
   console.log(color.id)
    axiosWithAuth()
    .delete(`api/colors/${color.id}`)
    .then(res =>{
      console.log(res.data)
      deleteAColor(res.data)
     
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;
