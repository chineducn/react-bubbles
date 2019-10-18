import React, { useState } from "react";
import styled from 'styled-components';

const StyledSection = styled.section`
 display: flex;
 align-items: center;

 .delete {
   margin-right: 1.5rem;
   cursor: pointer;
 }
`;
const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, deleteColor, saveEdit, addColor }) => {
  
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorToAdd, setColorToAdd] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdited = e => {
    e.preventDefault();
    saveEdit(colorToEdit);
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  };
  const saveAddedd = e => {
    e.preventDefault();
    addColor(colorToAdd);
  };
  const clearForm = e => {
    e.preventDefault();
    setColorToAdd(initialColor);
    setEditing(false);
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <StyledSection key={color.color}>
            <span className="delete" onClick={() => deleteColor(color)}>
                x
            </span>
           <li onClick={() => editColor(color)}>
            <span>
              {" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
            </li>
          </StyledSection>
        ))}
      </ul>
      {editing ? (
        <form onSubmit={saveEdited}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={clearForm}>cancel</button>
          </div>
        </form>
      )
        : (
          <form onSubmit={saveAddedd}>
          <legend>add color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToAdd({ ...colorToAdd, color: e.target.value })
              }
              value={colorToAdd.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToAdd({
                  ...colorToAdd,
                  code: { hex: e.target.value }
                })
              }
              value={colorToAdd.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">add</button>
            <button onClick={clearForm}>clear</button>
          </div>
        </form>
        )
      }
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
      
    </div>
  );
};

export default ColorList;
